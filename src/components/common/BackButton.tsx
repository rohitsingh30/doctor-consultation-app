import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { avatarStyles, buttonStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

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
}) => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity 
      style={buttonStyles(theme).backButton}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessible={true}
    >
      <Icon name="arrow-left" style={avatarStyles(theme).image} />
    </TouchableOpacity>
  );
};

export default BackButton;
