import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { containerStyles, shadowsStyle, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import BackButton from './BackButton';
import { useTheme } from 'src/styles/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme().theme;

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate sending reset link
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('Success', 'Password reset link sent to your email');
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset link');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <BackButton />
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={{ backgroundColor: theme.colors.primaryLight, padding: 12, borderRadius: 9999, marginBottom: 16 }}>
            <Icon name="lock" size={24} color={theme.colors.primary} />
          </View>
          <Text style={[textStyles(theme).headerTitle, { fontSize: 24, fontWeight: '700' }]}>Forgot Password</Text>
        </View>
        
        <View style={[containerStyles(theme).formContainer, shadowsStyle(theme).md, { backgroundColor: theme.colors.surface, borderRadius: 8, padding: 16, borderWidth: 1, borderColor: theme.colors.border }]}>
          <Text style={[textStyles(theme).bodyText, { textAlign: 'center', marginBottom: 16 }]}>
            Enter your email address below to receive a password reset link.
          </Text>
          
          <View style={{ marginBottom: 16 }}>
            <Text style={textStyles(theme).label}>Email</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                rightIcon="envelope"
              />
            </View>
          </View>
          
          <TouchableOpacity
            style={[{ backgroundColor: theme.colors.primary, borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 16 }]}
            onPress={handleSubmit}
            disabled={isLoading}
            accessibilityRole="button"
            accessibilityLabel="Send Reset Link"
          >
            {isLoading ? (
              <Text style={{ color: theme.colors.textInverted, fontSize: 16, fontWeight: '600' }}>Sending...</Text>
            ) : (
              <Text style={{ color: theme.colors.textInverted, fontSize: 16, fontWeight: '600' }}>Send Reset Link</Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'center' }}
            onPress={() => navigation.navigate('DoctorLogin')}
          >
            <Text style={{ color: theme.colors.primary, fontWeight: '600' }}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;