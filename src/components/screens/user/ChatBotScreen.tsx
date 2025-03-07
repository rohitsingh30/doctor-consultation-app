// React and React Native imports
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Animated, Easing } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserStackParamList } from '../../../types/types';

// Local imports
import { useChatContext } from '../../../context/ChatContext';
import { buttonStyles, chatStyles, commonStyles, containerStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import Header from '../../common/Header';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  suggestions?: string[];
  answeredOptions?: string[];
};

// Typing animation component
const TypingIndicator = memo(() => {
  const [dots] = useState(() => [
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0)
  ]);

  useEffect(() => {
    const animations = dots.map((dot, index) =>
      Animated.sequence([
        Animated.delay(index * 200),
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot, {
              toValue: 1,
              duration: 400,
              easing: Easing.ease,
              useNativeDriver: true,
            }),
            Animated.timing(dot, {
              toValue: 0,
              duration: 400,
              easing: Easing.ease,
              useNativeDriver: true,
            }),
          ])
        ),
      ])
    );

    animations.forEach(animation => animation.start());

    return () => {
      dots.forEach(dot => dot.stopAnimation());
    };
  }, [dots]);

  return (
    <View style={[commonStyles.flexRow, containerStyles.centeredContent]}>
      {dots.map((dot, index) => (
        <Animated.View
          key={index}
          style={[
            commonStyles.statCard,
            {
              width: 8,
              height: 8,
              marginHorizontal: 2,
              transform: [
                {
                  translateY: dot.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -4],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
});

TypingIndicator.displayName = 'TypingIndicator';

const ChatBotScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackParamList>>();
  const { addSymptom, generateReport } = useChatContext();
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStage, setCurrentStage] = useState<'initial' | 'symptoms' | 'severity' | 'duration' | 'report'>('initial');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState<{[key: string]: string}>({});

  useEffect(() => {
    // Initial message with typing animation
    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages([{
        id: '1',
        text: "Hi! I'm your health assistant. Let's gather some information about how you're feeling. What symptoms are you experiencing?",
        sender: 'bot',
        suggestions: ['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Other']
      }]);
      setIsTyping(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (scrollViewRef.current) {
      const timer = setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, isTyping]);

  const addBotMessage = useCallback((message: Omit<Message, 'id' | 'sender'>) => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'bot',
        ...message
      }]);
      setIsTyping(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSuggestionPress = useCallback(async (suggestion: string) => {
    const messageId = messages[messages.length - 1]?.id;
    if (!messageId) {
      addBotMessage({
        text: "I'm sorry, there was an error processing your request. Please try again.",
        suggestions: ['Start Over']
      });
      return;
    }

    try {
      // Update selected suggestions
      setSelectedSuggestions(prev => ({
        ...prev,
        [messageId]: suggestion
      }));

      // Add user's selection to chat
      setMessages(prev => {
        const updatedMessages = [...prev];
        const lastMessage = updatedMessages[updatedMessages.length - 1];
        if (lastMessage?.suggestions) {
          lastMessage.answeredOptions = [...(lastMessage.answeredOptions || []), suggestion];
        }
        
        return [...updatedMessages, {
          id: Date.now().toString(),
          text: suggestion,
          sender: 'user'
        }];
      });

      // View Analysis click
      if (suggestion === 'View Analysis') {
        try {
          const report = generateReport();
          navigation.navigate('MedicalRecords', { report });
          return;
        } catch (error) {
          addBotMessage({
            text: "I'm sorry, there was an error generating your report. Please try again.",
            suggestions: ['Start Over']
          });
          return;
        }
      }

      // Handle different conversation stages
      switch (currentStage) {
        case 'initial':
          addBotMessage({
            text: `On a scale of 1-10, how severe is your ${suggestion.toLowerCase()}?`,
            suggestions: ['1-3 (Mild)', '4-7 (Moderate)', '8-10 (Severe)']
          });
          setCurrentStage('severity');
          break;

        case 'severity':
          addBotMessage({
            text: "How long have you been experiencing this?",
            suggestions: ['Today', '2-3 days', '1 week', 'More than a week']
          });
          setCurrentStage('duration');
          break;

        case 'duration':
          try {
            // Calculate the symptom name based on conversation flow
            const symptomMessageIndex = messages.length - 4;
            const symptomName = symptomMessageIndex >= 0 ? 
                             messages[symptomMessageIndex].text : 
                             'Symptom';
            
            // Calculate severity
            const severityMessage = messages[messages.length - 2].text;
            const severity = severityMessage.startsWith('1-3') ? 2 : 
                          severityMessage.startsWith('4-7') ? 5 : 9;
            
            addSymptom({
              id: Date.now().toString(),
              name: symptomName,
              severity: severity,
              duration: suggestion
            });

            addBotMessage({
              text: "Are you experiencing any other symptoms?",
              suggestions: ['Yes', 'No, generate report']
            });
            setCurrentStage('symptoms');
          } catch (error) {
            addBotMessage({
              text: "I'm sorry, there was an error processing your symptoms. Please try again.",
              suggestions: ['Start Over']
            });
            setCurrentStage('initial');
          }
          break;

        case 'symptoms':
          if (suggestion === 'Yes') {
            addBotMessage({
              text: "What other symptoms are you experiencing?",
              suggestions: ['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Other']
            });
            setCurrentStage('initial');
          } else {
            try {
              const report = generateReport();
              addBotMessage({
                text: "I've analyzed your symptoms and generated a report. What would you like to do?",
                suggestions: report.shouldSeeDoctor ? 
                  ['View Report', 'Consult Doctor Now'] :
                  ['View Report', 'Consult Doctor (Optional)']
              });
              setCurrentStage('report');
            } catch (error) {
              addBotMessage({
                text: "I'm sorry, there was an error generating your report. Please try again.",
                suggestions: ['Start Over']
              });
              setCurrentStage('initial');
            }
          }
          break;

        case 'report':
          if (suggestion.includes('Consult Doctor')) {
            navigation.navigate('DoctorSearch');
          } else {
            try {
              navigation.navigate('MedicalRecords', { report: generateReport() });
            } catch (error) {
              addBotMessage({
                text: "I'm sorry, there was an error accessing your medical records. Please try again.",
                suggestions: ['Start Over']
              });
              setCurrentStage('initial');
            }
          }
          break;
      }
    } catch (error) {
      console.error('Error handling suggestion:', error);
      addBotMessage({
        text: "I'm sorry, there was an error processing your request. Please try again.",
        suggestions: ['Start Over']
      });
      setCurrentStage('initial');
    }
  }, [messages, currentStage, addBotMessage, addSymptom, generateReport, navigation]);

  const renderMessage = useCallback((message: Message) => (
    <View
      key={message.id}
      style={[
        containerStyles.messageContainer,
        sharedStyles.shadow,
        message.sender === 'user' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }
      ]}
    >
      <Text style={[
        commonStyles.bodyText,
        message.sender === 'user' ? { color: theme.colors.textInverted } : { color: theme.colors.text }
      ]}>
        {message.text}
      </Text>
      
      {message.suggestions && (
        <View style={[commonStyles.flexRow, { flexWrap: 'wrap', marginTop: theme.spacing.sm }]}>
          {message.suggestions.map((suggestion, index) => (
            <TouchableOpacity
              key={index}
              style={[
                buttonStyles.suggestionButton,
                sharedStyles.shadow,
                selectedSuggestions[message.id] && selectedSuggestions[message.id] !== suggestion && buttonStyles.disabledButton
              ]}
              onPress={() => handleSuggestionPress(suggestion)}
              disabled={!!selectedSuggestions[message.id]}
            >
              <Text style={[
                textStyles.smallText,
                (message.answeredOptions?.includes(suggestion) || selectedSuggestions[message.id]) && textStyles.disabledText
              ]}>
                {suggestion}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  ), [handleSuggestionPress, selectedSuggestions]);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="AI Health Assistant" showBackButton={true} />
      
      <View style={commonStyles.container}>
        <ScrollView
          ref={scrollViewRef}
          style={chatStyles.chat}
          contentContainerStyle={containerStyles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map(renderMessage)}
          {isTyping && <TypingIndicator />}
          <View style={{ paddingBottom: 20 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatBotScreen;