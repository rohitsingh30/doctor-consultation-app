import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { containerStyles, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';

import BackButton from './BackButton';

const ResetPasswordScreen = () => {
  const theme = useTheme().theme;

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('Success', 'Password reset successfully', [
        { text: 'OK', onPress: () => navigation.navigate('DoctorLogin') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <BackButton />
        <View style={containerStyles(theme).logoContainer}>
          <Text style={textStyles(theme).headerTitle}>Create New Password</Text>
        </View>
        
        <View style={containerStyles(theme).formContainer}>
          <Text style={textStyles(theme).bodyText}>
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
            style={{ marginTop: 20 }}
          />
          
          <CustomButton
            title="Reset Password"
            onPress={handleSubmit}
            isLoading={isLoading}
            style={{ marginTop: 20 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
