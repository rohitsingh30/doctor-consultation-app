// Reference - doctor-consultation-app/appFlows/DoctorFlow-Login.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-LoginDark.html

import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { AppStackParamList } from '../../../types/types';
import { containerStyles, textStyles, buttonStyles } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';

const DoctorLoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { login } = useContext(AuthContext);
  const {theme} = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userData = {
        id: '123',
        email,
        name: 'Dr. John Doe',
        type: 'doctor',
      };

      await login(userData);
      navigation.navigate('DoctorDashboard');
    } catch (error) {
      Alert.alert('Login Failed', 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <View style={containerStyles(theme).logoContainer}>
          <Text style={textStyles(theme).appName}>Doc-X</Text>
          <Text style={textStyles(theme).tagline}>Access your healthcare dashboard</Text>
        </View>

        <View style={containerStyles(theme).formContainer}>
          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomButton
            title="Sign In"
            onPress={handleLogin}
            isLoading={isLoading}
            style={buttonStyles(theme).primary}
          />

          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={textStyles(theme).forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={containerStyles(theme).footer}>
          <Text style={textStyles(theme).footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DoctorSignUp')}>
            <Text style={textStyles(theme).signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorLoginScreen;