import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { DoctorStackParamList } from '../../../types/types';
import Header from '../../common/Header';
import { commonStyles, containerStyles, theme } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

type DoctorChatRouteProp = RouteProp<DoctorStackParamList, 'DoctorChat'>;
type Message = {
  id: string;
  text: string;
  sender: 'doctor' | 'patient';
  timestamp: Date;
};

const MessageBubble = memo(({ message }: { message: Message }) => (
  <View
    style={[
      containerStyles.messageContainer,
      {
        alignSelf: message.sender === 'doctor' ? 'flex-end' : 'flex-start',
        backgroundColor: message.sender === 'doctor' ? theme.colors.primary : theme.colors.surface
      }
    ]}
    accessibilityLabel={`${message.sender} message: ${message.text}`}
    accessibilityRole="text"
  >
    <Text
      style={{
        color: message.sender === 'doctor' ? theme.colors.textInverted : theme.colors.text
      }}
    >
      {message.text}
    </Text>
    <Text
      style={{
        fontSize: 12,
        color: message.sender === 'doctor' ? theme.colors.textInverted : theme.colors.textTertiary,
        alignSelf: 'flex-end',
        marginTop: theme.spacing.xxs
      }}
    >
      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Text>
  </View>
));

MessageBubble.displayName = 'MessageBubble';

const DoctorChatScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const route = useRoute<DoctorChatRouteProp>();
  const { chatId } = route.params;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  // Mock patient data
  const patient = {
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  useEffect(() => {
    // In a real app, you would fetch messages from an API
    const mockMessages = [
      {
        id: '1',
        text: 'Hello Dr., I have been experiencing headaches lately.',
        sender: 'patient',
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        id: '2',
        text: 'How long have you been experiencing these headaches?',
        sender: 'doctor',
        timestamp: new Date(Date.now() - 3500000)
      },
      {
        id: '3',
        text: 'For about a week now. They usually occur in the afternoon.',
        sender: 'patient',
        timestamp: new Date(Date.now() - 3400000)
      },
    ] as Message[];

    setMessages(mockMessages);
  }, [chatId]);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, []);

  const sendMessage = useCallback(() => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage.trim(),
      sender: 'doctor',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    scrollToBottom();
  }, [newMessage, scrollToBottom]);

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={`Chat with ${patient.name}`} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1, padding: theme.spacing.md }}
          contentContainerStyle={{ paddingBottom: theme.spacing.lg }}
          onContentSizeChange={scrollToBottom}
        >
          {messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            padding: theme.spacing.md,
            backgroundColor: theme.colors.background,
            borderTopWidth: 1,
            borderTopColor: theme.colors.border,
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 40,
              backgroundColor: theme.colors.surface,
              borderRadius: 20,
              paddingHorizontal: theme.spacing.md,
              marginRight: theme.spacing.sm
            }}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            accessibilityLabel="Message input field"
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: theme.colors.primary,
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            accessibilityLabel="Send message"
            accessibilityRole="button"
            disabled={newMessage.trim() === ''}
          >
            <Icon name="send" size={16} color={theme.colors.textInverted} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DoctorChatScreen;
