import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { DoctorStackParamList } from '../../../types/types';
import { commonStyles, containerStyles, textStyles, buttonStyles } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import BackButton from '../../common/BackButton';

const DoctorSignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const { login } = useContext(AuthContext);

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
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={containerStyles.loginScrollContainer}>
        <View style={containerStyles.logoContainer}>
          <Text style={textStyles.appName}>Doc-X</Text>
          <Text style={textStyles.tagline}>Doctor Sign Up</Text>
        </View>

        <View style={containerStyles.formContainer}>
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
            style={buttonStyles.primary}
          />

          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate('DoctorLogin')}
          >
            <Text style={textStyles.forgotPasswordText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorSignUpScreen;