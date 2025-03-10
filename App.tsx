import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { ChatProvider } from './src/context/ChatContext';
import { View } from 'react-native';
import { containerStyles } from './src/styles/commonStyles';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/styles/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={containerStyles().baseContainer}>
          <StatusBar style="dark" />
          <AuthProvider>
            <ChatProvider>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </ChatProvider>
          </AuthProvider>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
