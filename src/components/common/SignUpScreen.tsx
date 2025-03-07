import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';
import { buttonStyles, commonStyles, containerStyles, textStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
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
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={containerStyles.loginScrollContainer}>
        <View style={containerStyles.logoContainer}>
          <Text style={textStyles.appName}>Doc-X</Text>
          <Text style={textStyles.tagline}>Create your account</Text>
        </View>

        <View style={containerStyles.formContainer}>
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
            style={containerStyles.userTypeContainer}
            onPress={() => setIsDoctor(!isDoctor)}
          >
            <View style={containerStyles.checkboxContainer}>
              <View style={[containerStyles.checkbox, isDoctor && containerStyles.checkboxChecked]}>
                {isDoctor && <View style={containerStyles.checkboxInner} />}
              </View>
              <Text style={textStyles.userTypeText}>Register as Doctor</Text>
            </View>
          </TouchableOpacity>

          <CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            isLoading={isLoading}
            style={buttonStyles.loginButton}
          />
        </View>

        <View style={containerStyles.footer}>
          <Text style={textStyles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={textStyles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
