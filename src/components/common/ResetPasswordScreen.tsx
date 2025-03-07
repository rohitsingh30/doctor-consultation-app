import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../types/types';
import { commonStyles, containerStyles,textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BackButton from './BackButton';

type ResetPasswordRouteProp = RouteProp<AuthStackParamList, 'ResetPassword'>;

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const route = useRoute<ResetPasswordRouteProp>();
  const { token } = route.params;
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would call your password reset API with the token
      Alert.alert(
        'Success', 
        'Your password has been reset. Please log in with your new password.',
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
        <Text style={textStyles.headerTitle}>Create New Password</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <View style={[commonStyles.container, { padding: 20 }]}>
        <Text style={commonStyles.bodyText}>
          Enter your new password below.
        </Text>
        
        <CustomInput
          label="New Password"
          placeholder="Enter your new password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
          style={{ marginTop: 20 }}
        />
        
        <CustomInput
          label="Confirm New Password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          error={errors.confirmPassword}
        />
        
        <CustomButton
          title="Reset Password"
          onPress={handleSubmit}
          isLoading={isLoading}
          style={{ marginTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
