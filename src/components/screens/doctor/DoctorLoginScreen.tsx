// Reference - doctor-consultation-app/appFlows/DoctorFlow-Login.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-LoginDark.html

import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { AppStackParamList } from '../../../types/types';
import { containerStyles, textStyles, buttonStyles, shadowsStyle } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';
import { createDoctorLoginStyles } from '../../../styles/screens/doctorLoginStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DoctorLoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { login } = useContext(AuthContext);
  const { theme } = useTheme();
  const styles = createDoctorLoginStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userData = {
        id: '1',
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
        <View style={styles.headerContainer}>
            <Text style={[styles.welcomeText, { fontSize: 24, fontWeight: '700' }]}>DOC-X</Text>
        </View>

        <View style={[styles.formContainer, shadowsStyle(theme).md]}>
          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            rightIcon="envelope"
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            rightIcon="lock"
          />

          <TouchableOpacity 
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
            accessibilityRole="button"
            accessibilityLabel="Forgot Password"
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.primaryButton, shadowsStyle(theme).md, { width: '100%', paddingVertical: theme.spacing.md, marginTop: theme.spacing.md }]}
            onPress={handleLogin}
            disabled={isLoading}
            accessibilityRole="button"
            accessibilityLabel="Sign In"
          >
            {isLoading ? (
              <Text style={[styles.primaryButtonText, { fontSize: 16 }]}>Signing In...</Text>
            ) : (
              <Text style={[styles.primaryButtonText, { fontSize: 16 }]}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={[containerStyles(theme).footer, { flexDirection: 'row', justifyContent: 'center' }]}>
          <Text style={textStyles(theme).footerText}>Don't have an account?</Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('DoctorSignUp')}
            accessibilityRole="button"
            accessibilityLabel="Sign Up"
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorLoginScreen;