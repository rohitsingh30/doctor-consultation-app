import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';
import { buttonStyles, commonStyles, containerStyles, sharedStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { textStyles } from 'src/styles/commonStyles';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { login } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);
    try {
      // For demo purposes, we'll simulate different user types
      const userData = {
        id: '123',
        email,
        name: isDoctor ? 'Dr. John Doe' : 'John Smith',
        type: isDoctor ? 'doctor' : 'user',
      };

      await login(userData);
      // Navigation will be handled by AppNavigator based on user type
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles.safeArea}>
      <ScrollView contentContainerStyle={containerStyles.loginScrollContainer}>
        <View style={containerStyles.logoContainer}>
          <Text style={textStyles.appName}>Doc-X</Text>
          <Text style={textStyles.tagline}>Your Health, Our Priority</Text>
        </View>

        <View style={containerStyles.formContainer}>
          <CustomInput
            label="Email"
            placeholder="Enter your email"
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

          <TouchableOpacity 
            style={containerStyles.userTypeContainer}
            onPress={() => setIsDoctor(!isDoctor)}
          >
            <View style={containerStyles.checkboxContainer}>
              <View style={[buttonStyles.checkbox, isDoctor && buttonStyles.checkboxChecked]}>
                {isDoctor && <View/>}
              </View>
              <Text style={textStyles.userTypeText}>Login as Doctor</Text>
            </View>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            isLoading={isLoading}
            style={buttonStyles.primary}
          />

          <TouchableOpacity 
            style={containerStyles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={textStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={textStyles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={textStyles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
