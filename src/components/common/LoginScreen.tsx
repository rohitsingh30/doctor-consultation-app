import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/types';
import { textStyles, buttonStyles, containerStyles } from '../../styles/commonStyles';
import CustomButton from './CustomButton';
import { useTheme } from 'src/styles/ThemeProvider';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const theme = useTheme().theme;

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView contentContainerStyle={containerStyles(theme).loginScrollContainer}>
        <View style={containerStyles(theme).logoContainer}>
          <Image
            source={{ uri: 'https://example.com/logo.png' }}
            style={{ width: 100, height: 100, marginBottom: 20 }}
            accessibilityLabel="App Logo"
          />
          <Text style={textStyles().appName}>Doc-X</Text>
          <Text style={textStyles().tagline}>Your Health, Our Priority</Text>
        </View>

        <View style={containerStyles(theme).formContainer}>
          <CustomButton
            title="Login as Doctor"
            onPress={() => navigation.navigate('DoctorLogin')}
            style={[buttonStyles(theme).primary, { marginBottom: 15 }]}
          />

          <CustomButton
            title="Login as User"
            variant='secondary'
            onPress={() => navigation.navigate('DoctorLogin')}
            style={buttonStyles(theme).outlineButton}
          />
        </View>

        <View style={containerStyles(theme).footer}>
          <Text style={textStyles(theme).footerText}>Don't have an account?</Text>
          <CustomButton
            title="Sign Up"
            onPress={() => navigation.navigate('DoctorSignUp')}
            style={buttonStyles(theme).button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;