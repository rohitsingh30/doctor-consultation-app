import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import { buttonStyles, containerStyles, headerStyles, shadowsStyle } from '../../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';
import { mockDoctorData } from 'src/data/doctorData';
import { createDoctorProfileStyles } from '../../../styles/screens/doctorProfileStyles';
import { useAuth } from 'src/hooks/useAuth';
import { appHeaderWithBackButton } from '@components/common/Header';

const DoctorProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { user } = useAuth();
  const doctorId = user?.id ?? "1";
  const { theme } = useTheme();
  const doctor = mockDoctorData[doctorId as keyof typeof mockDoctorData];
  const styles = createDoctorProfileStyles(theme);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: doctor.name,
    specialty: doctor.specialty,
    email: 'doctor@example.com',
    bio: doctor.about,
    bankAccount: '*****4532',
    consultationFee: '$150'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    setIsEditing(false);
  };

  const renderInputField = (label: string, field: string, icon: string | null = null) => (
    <TouchableOpacity 
      style={styles.inputContainer}
      onPress={() => !isEditing && setIsEditing(true)}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Edit ${label}`}
    >
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputWrapper, isEditing && styles.inputWrapperActive]}>
        <TextInput
          style={[styles.input, icon ? { paddingRight: 40 } : {}, isEditing && styles.inputActive]}
          value={formData[field as keyof typeof formData]}
          onChangeText={(value) => handleInputChange(field, value)}
          editable={isEditing}
          accessibilityLabel={label}
          placeholderTextColor={theme.colors.textTertiary}
        />
        {icon && (
          <View style={styles.iconContainer}>
            <Icon name={icon} size={20} color={theme.colors.primary} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).container} contentContainerStyle={{ paddingBottom: 80 }}>
        {appHeaderWithBackButton(navigation,theme,'Profile')}
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          {renderInputField('Full Name', 'name')}
          {renderInputField('Specialization', 'specialty')}
          {renderInputField('Email', 'email', 'envelope')}
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Bio</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.bio}
              onChangeText={(value) => handleInputChange('bio', value)}
              multiline
              numberOfLines={4}
              editable={isEditing}
              accessibilityLabel="Bio"
              placeholderTextColor={theme.colors.textTertiary}
            />
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Payment Details</Text>
          {renderInputField('Bank Account Number', 'bankAccount', 'university')}
          {renderInputField('Consultation Fee (per hour)', 'consultationFee', 'money')}

        </View>
        {isEditing && (
        <View style={[styles.buttonContainer, shadowsStyle(theme).md]}>
          <TouchableOpacity 
            style={[styles.saveButton, buttonStyles(theme).primaryButton, { flex: 1, marginRight: theme.spacing.sm }]}
            onPress={handleSave}
            accessibilityRole="button"
            accessibilityLabel="Save Changes"
          >
            <Text style={[styles.saveButtonText, buttonStyles(theme).primaryButtonText, { fontSize: 16, fontWeight: '600' }]}>Save Changes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.cancelButton, buttonStyles(theme).outlineButton, { flex: 1 }]}
            onPress={() => setIsEditing(false)}
            accessibilityRole="button"
            accessibilityLabel="Cancel"
          >
            <Text style={[styles.cancelButtonText, buttonStyles(theme).outlineButtonText, { fontSize: 16, fontWeight: '600' }]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorProfileScreen;
