import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { textStyles, buttonStyles, containerStyles, shadowsStyle } from '../../styles/commonStyles';
import CustomButton from './CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDoctorLoginStyles } from '../../styles/screens/doctorLoginStyles';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { theme } = useTheme();
  const styles = createDoctorLoginStyles(theme);

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={[styles.welcomeText, { fontSize: 24, fontWeight: '700' }]}>DOC-X</Text>
          <Text style={[textStyles(theme).tagline, { marginTop: 4 }]}>Your Health, Our Priority</Text>
        </View>

        <View style={[styles.formContainer, shadowsStyle(theme).md]}>
          <TouchableOpacity
            style={[styles.primaryButton, shadowsStyle(theme).md, { width: '100%', paddingVertical: theme.spacing.md, marginBottom: 15 }]}
            onPress={() => navigation.navigate('DoctorLogin')}
            accessibilityRole="button"
            accessibilityLabel="Login as Doctor"
          >
            <Text style={[styles.primaryButtonText, { fontSize: 16 }]}>Login as Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[buttonStyles(theme).outlineButton, { width: '100%', paddingVertical: theme.spacing.md }]}
            onPress={() => navigation.navigate('PatientLogin')}
            accessibilityRole="button"
            accessibilityLabel="Login as Patient"
          >
            <Text style={buttonStyles(theme).outlineButtonText}>Login as Patient</Text>
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

export default LoginScreen;