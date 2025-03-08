// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { UserStackParamList } from '../types/types';

// // Use the existing folder structure for imports
// import DashboardScreen from '../components/screens/user/DashboardScreen';
// import ChatBotScreen from '../components/screens/user/ChatBotScreen';
// import DoctorSearchScreen from '../components/screens/user/DoctorSearchScreen';
// import DoctorProfileScreen from '../components/screens/doctor/DoctorProfileScreen';
// import AppointmentBookingScreen from '../components/screens/user/AppointmentBookingScreen';
// import AppointmentConfirmationScreen from '../components/screens/user/AppointmentConfirmationScreen';
// import AppointmentDetailScreen from '../components/screens/user/AppointmentConfirmationScreen';
// import MedicalRecordsScreen from '../components/screens/doctor/MedicalRecordsScreen';
// import ReportDetailScreen from '../components/screens/user/ReportDetailScreen';
// import ProfileScreen from '../components/screens/user/ProfileScreen';

// const Stack = createStackNavigator<UserStackParamList>();

// const UserNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Dashboard"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Dashboard" component={DashboardScreen} />
//       <Stack.Screen name="ChatBot" component={ChatBotScreen} />
//       <Stack.Screen name="DoctorSearch" component={DoctorSearchScreen} />
//       <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
//       <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
//       <Stack.Screen name="AppointmentConfirmation" component={AppointmentConfirmationScreen} />
//       <Stack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} />
//       <Stack.Screen name="MedicalRecords" component={MedicalRecordsScreen} />
//       <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// export default UserNavigator;
