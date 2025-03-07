import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../types/types';

// Import LoginScreen from common instead of auth
import LoginScreen from '../components/common/LoginScreen';
import DoctorLoginScreen from '../components/common/DoctorLoginScreen';
import SignUpScreen from '../components/common/SignUpScreen';
import ForgotPasswordScreen from '../components/common/ForgotPasswordScreen';
import ResetPasswordScreen from '../components/common/ResetPasswordScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;