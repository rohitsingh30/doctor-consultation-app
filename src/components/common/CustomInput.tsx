import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '../../styles/ThemeProvider';
import { textStyles } from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightIcon?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label, 
  error, 
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder,
  rightIcon,
  style,
  ...rest 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();
  
  return (
    <View style={[{ marginBottom: 16 }, style]}>
      {label && <Text style={textStyles(theme).label}>{label}</Text>}
      <View style={{ position: 'relative' }}>
        <TextInput
          style={[
            textStyles(theme).input,
            error ? { borderColor: theme.colors.error } : null,
            isFocused ? { borderColor: theme.colors.primary } : null,
            rightIcon ? { paddingRight: 40 } : null
          ]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textTertiary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {rightIcon && (
          <View style={styles.iconContainer}>
            <Icon name={rightIcon} size={20} color={theme.colors.textSecondary} />
          </View>
        )}
      </View>
      {error ? <Text style={textStyles(theme).errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CustomInput;
