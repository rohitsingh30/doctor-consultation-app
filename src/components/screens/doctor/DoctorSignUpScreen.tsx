
// Reference - doctor-consultation-app/appFlows/DoctorFlow-SignUp.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-SignUpDark.html

import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { AppStackParamList } from '../../../types/types';
import {containerStyles, textStyles, buttonStyles, shadowsStyle } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDoctorLoginStyles } from '../../../styles/screens/doctorLoginStyles';

const DoctorSignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { login } = useContext(AuthContext);
  const { theme } = useTheme();
  const styles = createDoctorLoginStyles(theme);

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
        <View style={styles.headerContainer}>
          <View style={[styles.logoContainer, { backgroundColor: theme.colors.primaryLight, padding: 12, borderRadius: 9999 }]}>
            <Icon name="user-plus" size={24} color={theme.colors.primary} />
          </View>
          <Text style={[styles.welcomeText, { fontSize: 24, fontWeight: '700' }]}>Create Account</Text>
          <Text style={[textStyles(theme).tagline, { marginTop: 4 }]}>Join our healthcare platform</Text>
        </View>

        <View style={[styles.formContainer, shadowsStyle(theme).md]}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
                rightIcon="user"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                rightIcon="envelope"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Create a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                rightIcon="lock"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                rightIcon="lock"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Medical License Number</Text>
            <View style={{ position: 'relative' }}>
              <CustomInput
                placeholder="Enter your license number"
                value=""
                onChangeText={() => {}}
                rightIcon="id-badge"
              />
            </View>
          </View>
          
          <Text style={[textStyles(theme).footerText, { marginTop: 8, marginBottom: 16, fontSize: 12, textAlign: 'center' }]}>By signing up, you agree to our Terms and Privacy Policy</Text>

          <TouchableOpacity
            style={[styles.primaryButton, { width: '100%', paddingVertical: theme.spacing.md, backgroundColor: theme.colors.primary, borderRadius: 8 }]}
            onPress={handleSignUp}
            disabled={isLoading}
            accessibilityRole="button"
            accessibilityLabel="Create Account"
          >
            {isLoading ? (
              <Text style={[styles.primaryButtonText, { fontSize: 16, color: theme.colors.textInverted }]}>Creating Account...</Text>
            ) : (
              <Text style={[styles.primaryButtonText, { fontSize: 16, color: theme.colors.textInverted }]}>Create Account</Text>
            )}
          </TouchableOpacity>
        </View>
        
        <View style={[containerStyles(theme).footer, { flexDirection: 'row', justifyContent: 'center' }]}>
          <Text style={textStyles(theme).footerText}>Already have an account?</Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('DoctorLogin')}
            accessibilityRole="button"
            accessibilityLabel="Sign In"
          >
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorSignUpScreen;