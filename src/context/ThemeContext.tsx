import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the theme types
type ThemeMode = 'light' | 'dark' | 'system';

// Define the context type
type ThemeContextType = {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

// Create the context with default values
export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'system',
  isDarkMode: false,
  toggleTheme: () => {},
  setThemeMode: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Get the device color scheme
  const deviceColorScheme = useColorScheme();
  
  // State for the theme mode
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  
  // Compute whether dark mode is active based on theme mode and device settings
  const isDarkMode = themeMode === 'system' 
    ? deviceColorScheme === 'dark'
    : themeMode === 'dark';

  // Load the saved theme mode on component mount
  useEffect(() => {
    const loadThemeMode = async () => {
      try {
        const savedThemeMode = await AsyncStorage.getItem('themeMode');
        if (savedThemeMode) {
          setThemeMode(savedThemeMode as ThemeMode);
        }
      } catch (error) {
        console.error('Error loading theme mode:', error);
      }
    };

    loadThemeMode();
  }, []);

  // Save the theme mode when it changes
  useEffect(() => {
    const saveThemeMode = async () => {
      try {
        await AsyncStorage.setItem('themeMode', themeMode);
      } catch (error) {
        console.error('Error saving theme mode:', error);
      }
    };

    saveThemeMode();
  }, [themeMode]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setThemeMode(prevMode => {
      if (prevMode === 'system') {
        return deviceColorScheme === 'dark' ? 'light' : 'dark';
      } else {
        return prevMode === 'dark' ? 'light' : 'dark';
      }
    });
  };

  // Set a specific theme mode
  const setThemeModeHandler = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  // Context value
  const contextValue = {
    themeMode,
    isDarkMode,
    toggleTheme,
    setThemeMode: setThemeModeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};