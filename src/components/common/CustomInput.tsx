import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { theme } from 'src/styles/theme';
import { textStyles } from 'src/styles/commonStyles';

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

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={textStyles.label}>{label}</Text>
      <TextInput
        style={[
          error ? textStyles.input : null,
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
      {error ? <Text style={textStyles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default CustomInput;
