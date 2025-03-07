import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { commonStyles, containerStyles, theme } from '../../styles/commonStyles';

const LoadingScreen = () => {
  return (
    <View style={containerStyles.centeredContainer}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingScreen;
