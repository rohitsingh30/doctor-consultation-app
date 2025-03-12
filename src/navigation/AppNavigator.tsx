import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/common/LoginScreen';
import DoctorLoginScreen from '../components/screens/doctor/DoctorLoginScreen';
import DoctorDashboardScreen from '../components/screens/doctor/DoctorDashboardScreen';
import DashboardScreen from '../components/screens/user/DashboardScreen';
import PatientHistoryScreen from '../components/screens/doctor/PatientHistoryScreen';
import ConsultationConfirmScreen from '../components/screens/doctor/ConsultationConfirmScreen';
import ForgotPasswordScreen from '../components/common/ForgotPasswordScreen';
import ResetPasswordScreen from '../components/common/ResetPasswordScreen';
import SignUpScreen from '../components/common/SignUpScreen';
import { AppStackParamList } from '../types/types';
import App from 'App';
import DoctorSignUpScreen from '@components/screens/doctor/DoctorSignUpScreen';
import DoctorProfileScreen from '../components/screens/doctor/DoctorProfileScreen';
import AIReportsScreen from '@components/screens/doctor/AIReportsListScreen';
import AIReportViewScreen from '@components/screens/doctor/AIReportViewScreen';
import VideoConsultationScreen from '@components/screens/doctor/VideoConsultationScreen';
import AppointmentManagementScreen from '@components/screens/doctor/AppointmentManagementScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="loginScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="loginScreen" component={LoginScreen} />
    <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
    <Stack.Screen name="DoctorDashboard" component={DoctorDashboardScreen} />
    {/* <Stack.Screen name="UserDashboard" component={DashboardScreen} /> */}
    <Stack.Screen name="PatientHistory" component={PatientHistoryScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <Stack.Screen name="DoctorSignUp" component={DoctorSignUpScreen} />
    <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
    <Stack.Screen name="ReportList" component={AIReportsScreen} />
    <Stack.Screen name="ReportDetail" component={AIReportViewScreen} />
    <Stack.Screen name="VideoConsultation" component={VideoConsultationScreen} />
    <Stack.Screen name="AppointmentManagement" component={AppointmentManagementScreen} />
    <Stack.Screen name="ConsultationConfirm" component={ConsultationConfirmScreen} />
  </Stack.Navigator>
);
