import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { buttonStyles,textStyles } from 'src/styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  icon,
}) => {
  const theme = useTheme().theme;
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return buttonStyles(theme).primaryButton;
      case 'secondary':
        return buttonStyles(theme).secondaryButton;
      case 'outline':
        return buttonStyles(theme).outlineButton;
      default:
        return buttonStyles(theme).primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return textStyles(theme).primaryText;
      case 'secondary':
        return textStyles(theme).secondaryText;
      case 'outline':
        return textStyles(theme).outlineText;
      default:
        return textStyles(theme).primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyles(theme).button,
        getButtonStyle(),
        fullWidth && textStyles(theme).fullWidthText,
        disabled && buttonStyles(theme).disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' ? theme.colors.primary : theme.colors.textInverted} 
        />
      ) : (
        <>
          {icon && icon}
          <Text 
            style={[
                textStyles(theme).text, 
              getTextStyle(), 
              disabled && textStyles(theme).disabledText,
              icon ? { marginLeft: theme.spacing.xs } : null,
              textStyle
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};


export default Button;