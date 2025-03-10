
// Reference - doctor-consultation-app/appFlows/DoctorFlow-SignUp.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-SignUpDark.html

import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { AppStackParamList } from '../../../types/types';
import {containerStyles, textStyles, buttonStyles } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';

const DoctorSignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { login } = useContext(AuthContext);
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const userData = {
        id: '123',
        email,
        name,
        type: 'doctor',
      };

      await login(userData);
      navigation.navigate('DoctorDashboard');
    } catch (error) {
      Alert.alert('Sign Up Failed', 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <View style={containerStyles(theme).logoContainer}>
          <Text style={textStyles(theme).appName}>Doc-X</Text>
          <Text style={textStyles(theme).tagline}>Doctor Sign Up</Text>
        </View>

        <View style={containerStyles(theme).formContainer}>
          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />

          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            isLoading={isLoading}
            style={buttonStyles(theme).primary}
          />

          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate('DoctorLogin')}
          >
            <Text style={textStyles(theme).forgotPasswordText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorSignUpScreen;