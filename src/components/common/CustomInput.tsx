import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../styles/ThemeProvider';
import { textStyles } from '../../styles/commonStyles';

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label, 
  error, 
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder,
  ...rest 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();
  console.log('CustomInput theme:', theme);
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={textStyles(theme).label}>{label}</Text>
      <TextInput
        style={[
          textStyles(theme).input,
          error ? { borderColor: theme.colors.error } : null,
          isFocused ? { borderColor: theme.colors.primary } : null
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
      {error ? <Text style={textStyles(theme).errorText}>{error}</Text> : null}
    </View>
  );
};

export default CustomInput;
