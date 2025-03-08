import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../../context/AuthContext';
import { AppStackParamList } from '../../../types/types';
import { commonStyles, containerStyles, textStyles, buttonStyles } from '../../../styles/commonStyles';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import BackButton from '../../common/BackButton';

const UserLoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userData = {
        id: '456',
        email,
        name: 'John Smith',
        type: 'user',
      };

      await login(userData);
      navigation.navigate('UserDashboard');
    } catch (error) {
      Alert.alert('Login Failed', 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={containerStyles.loginScrollContainer}>
        <BackButton />
        <View style={containerStyles.logoContainer}>
          <Text style={textStyles.appName}>Doc-X</Text>
          <Text style={textStyles.tagline}>User Login</Text>
        </View>

        <View style={containerStyles.formContainer}>
          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomButton
            title="Sign In"
            onPress={handleLogin}
            isLoading={isLoading}
            style={buttonStyles.primary}
          />

          <TouchableOpacity 
            style={{ marginTop: 20, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={textStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={containerStyles.footer}>
          <Text style={textStyles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={textStyles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserLoginScreen;