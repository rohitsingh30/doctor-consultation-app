import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignal, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { containerStyles,textStyles,avatarStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';


const StatusBar = () => {
  const theme = useTheme().theme;
  
  return (
    <View style={containerStyles(theme).statusBarContainer}>
      <Text style={textStyles(theme).statusBarTime}>9:41 AM</Text>
      <View style={containerStyles(theme).statusBarIconsContainer}>
        <FontAwesomeIcon icon={faSignal} size={16} color={theme.colors.textSecondary} style={avatarStyles(theme).image} />
        <FontAwesomeIcon icon={faWifi} size={16} color={theme.colors.textSecondary} style={avatarStyles(theme).image} />
        <FontAwesomeIcon icon={faBatteryFull} size={16} color={theme.colors.textSecondary} />
      </View>
    </View>
  );
};

export default StatusBar;
