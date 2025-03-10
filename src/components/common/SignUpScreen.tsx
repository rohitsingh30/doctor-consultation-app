import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';
import { buttonStyles, containerStyles, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import { useTheme } from 'src/styles/ThemeProvider';

import CustomButton from './CustomButton';

const SignUpScreen = () => {
  const theme = useTheme().theme;

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { register } = useContext(AuthContext);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    
    setIsLoading(true);
    try {
      await register({
        name,
        email,
        type: isDoctor ? 'doctor' : 'user',
      });
      // Navigation will be handled by AppNavigator
    } catch (error) {
      Alert.alert('Registration Failed', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <View style={containerStyles(theme).logoContainer}>
          <Text style={textStyles(theme).appName}>Doc-X</Text>
          <Text style={textStyles(theme).tagline}>Create your account</Text>
        </View>

        <View style={containerStyles(theme).formContainer}>
          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            error={errors.name}
          />

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            error={errors.email}
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          <CustomInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={errors.confirmPassword}
          />

          <TouchableOpacity 
            style={containerStyles(theme).userTypeContainer}
            onPress={() => setIsDoctor(!isDoctor)}
          >
            <View style={containerStyles(theme).checkboxContainer}>
              <View style={[containerStyles(theme).checkbox, isDoctor && containerStyles(theme).checkboxChecked]}>
                {isDoctor && <View style={containerStyles(theme).checkboxInner} />}
              </View>
              <Text style={textStyles(theme).userTypeText}>Register as Doctor</Text>
            </View>
          </TouchableOpacity>

          <CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            isLoading={isLoading}
            style={buttonStyles(theme).loginButton}
          />
        </View>

        <View style={containerStyles(theme).footer}>
          <Text style={textStyles(theme).footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DoctorLogin')}>
            <Text style={textStyles(theme).signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
