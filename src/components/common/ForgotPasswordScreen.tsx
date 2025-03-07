import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/types';
import { commonStyles, containerStyles, headerStyles,textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BackButton from './BackButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would call your password reset API
      Alert.alert(
        'Success', 
        'If an account with that email exists, we\'ve sent password reset instructions.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={containerStyles.headerContainer}>
        <BackButton />
        <Text style={headerStyles.headerTitle}>Reset Password</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <View style={[commonStyles.container, { padding: 20 }]}>
        <Text style={commonStyles.bodyText}>
          Enter the email address associated with your account, and we'll send you a link to reset your password.
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
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={commonStyles.primaryButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
