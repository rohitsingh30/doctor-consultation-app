import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignal, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { theme, commonStyles, containerStyles,textStyles,avatarStyles } from '../../styles/commonStyles';

const StatusBar = () => {
  return (
    <View style={containerStyles.statusBarContainer}>
      <Text style={textStyles.statusBarTime}>9:41 AM</Text>
      <View style={containerStyles.statusBarIconsContainer}>
        <FontAwesomeIcon icon={faSignal} size={16} color={theme.colors.textSecondary} style={avatarStyles.image} />
        <FontAwesomeIcon icon={faWifi} size={16} color={theme.colors.textSecondary} style={avatarStyles.image} />
        <FontAwesomeIcon icon={faBatteryFull} size={16} color={theme.colors.textSecondary} />
      </View>
    </View>
  );
};

export default StatusBar;
