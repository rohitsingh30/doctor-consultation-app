import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { containerStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

const LoadingScreen = () => {
  const theme = useTheme().theme;
  return (
    <View style={containerStyles(theme).centeredContainer}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingScreen;
