import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { buttonStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  style,
  textStyle
}) => {
  const theme = useTheme().theme;  
  const getButtonStyle = () => {
    if (variant === 'primary') return buttonStyles(theme).primaryButton;
    if (variant === 'secondary') return buttonStyles(theme).secondaryButton;
    return buttonStyles(theme).secondaryButton;
  };

  const getTextStyle = () => {
    if (variant === 'primary') return buttonStyles(theme).primaryButtonText;
    return buttonStyles(theme).secondaryButtonText;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        disabled || isLoading ? buttonStyles(theme).disabledButton : null,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={variant === 'primary' ? theme.colors.textInverted : theme.colors.primary} />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
