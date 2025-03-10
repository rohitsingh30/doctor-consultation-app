import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { buttonStyles, containerStyles, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BackButton from './BackButton';
import { useTheme } from 'src/styles/ThemeProvider';

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
        <BackButton />
        <View style={containerStyles(theme).logoContainer}>
          <Text style={textStyles(theme).headerTitle}>Forgot Password</Text>
        </View>
        
        <View style={containerStyles(theme).formContainer}>
          <Text style={textStyles(theme).bodyText}>
            Enter your email address below to receive a password reset link.
          </Text>
          
          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{ marginTop: 20 }}
          />
          
          <CustomButton
            title="Send Reset Link"
            onPress={handleSubmit}
            isLoading={isLoading}
            style={{ marginTop: 20 }}
          />
          
          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'center' }}
            onPress={() => navigation.navigate('DoctorLogin')}
          >
            <Text style={buttonStyles(theme).primaryButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;