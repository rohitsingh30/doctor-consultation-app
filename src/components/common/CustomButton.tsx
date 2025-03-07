import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { buttonStyles, commonStyles, theme } from '../../styles/commonStyles';

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
  const getButtonStyle = () => {
    if (variant === 'primary') return commonStyles.primaryButton;
    if (variant === 'secondary') return commonStyles.secondaryButton;
    return commonStyles.secondaryButton;
  };

  const getTextStyle = () => {
    if (variant === 'primary') return commonStyles.primaryButtonText;
    return buttonStyles.secondaryButtonText;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        disabled || isLoading ? buttonStyles.disabledButton : null,
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
