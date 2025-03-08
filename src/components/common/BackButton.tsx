import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { buttonStyles } from '../../styles/commonStyles';
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';
import { darkTheme } from '../../styles/darkTheme';

interface BackButtonProps {
  onPress?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  iconSize?: number;
  iconColor?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  onPress,
  testID = 'back-button',
  accessibilityLabel = 'Go back',
  iconSize = 24,
  iconColor,
}) => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  
  // Select the appropriate theme based on dark mode setting
  const currentTheme = isDarkMode ? darkTheme : theme;
  
  // Use provided iconColor or default to theme color
  const buttonColor = iconColor || (isDarkMode ? '#6B7280' : currentTheme.colors.primary);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity 
      style={{
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessible={true}
    >
      <Icon name="arrow-left" size={iconSize} color={buttonColor} />
    </TouchableOpacity>
  );
};

export default BackButton;
