import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextType, User, UserType } from '../types/types';

export const AuthContext = createContext<AuthContextType>({
  user: { 
    id: '1', 
    email: 'string',
    name: 'John',
    type: 'doctor' } as User,
  userType: null,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setUserType(parsedUser.type);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (userData: any) => {
    try {
      // In a real app, you would validate credentials with your API
      const userInfo: User = {
        id: userData.id || '1',
        email: userData.email,
        name: userData.name,
        type: userData.type || 'user', // Default to 'user' if not specified
      };

      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
      setUserType(userInfo.type);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setUserType(null);
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      // In a real app, you would send registration data to your API
      const userInfo: User = {
        id: userData.id || String(Date.now()),
        email: userData.email,
        name: userData.name,
        type: userData.type || 'user', // Default to 'user' if not specified
      };

      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
      setUserType(userInfo.type);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userType,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};