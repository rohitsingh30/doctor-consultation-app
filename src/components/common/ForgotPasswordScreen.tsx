import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/types';
import { buttonStyles, commonStyles, containerStyles, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BackButton from './BackButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={containerStyles.loginScrollContainer}>
        <BackButton />
        <View style={containerStyles.logoContainer}>
          <Text style={textStyles.headerTitle}>Forgot Password</Text>
        </View>
        
        <View style={containerStyles.formContainer}>
          <Text style={commonStyles.bodyText}>
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
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={commonStyles.primaryButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;