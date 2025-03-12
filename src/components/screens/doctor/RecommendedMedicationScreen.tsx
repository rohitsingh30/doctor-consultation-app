// Reference - doctor-consultation-app/appFlows/DoctorFlow-RecommendedMedicine.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-RecommendedMedicineDark.html

import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStackParamList } from '../../../types/types';
import { useTheme } from '../../../styles/ThemeProvider';
import { createPrescribeMedicationStyles } from '../../../styles/screens/recommendedMedicineStyles';
import BackButton from '../../common/BackButton';
import { buttonStyles, containerStyles, headerStyles, profileStyles, textStyles } from 'src/styles/commonStyles';
import { appHeaderWithBackButton } from '@components/common/Header';

type Medication = {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  comments?: string;
  addedBy: 'doctor' | 'ai';
  verified: boolean;
};

const PrescribeMedicationScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { theme } = useTheme();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [editingMedication, setEditingMedication] = useState<Medication | null>(null);
  const [expandedMedications, setExpandedMedications] = useState<string[]>([]);

  const toggleMedicationExpansion = (id: string) => {
    setExpandedMedications(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const addMedication = () => {
    const newMedication: Medication = {
      id: `${Date.now()}`,
      name: '',
      dosage: '',
      frequency: '',
      duration: '',
      comments: '',
      addedBy: 'doctor',
      verified: false,
    };
    setMedications([...medications, newMedication]);
    setEditingMedication(newMedication);
    setExpandedMedications([...expandedMedications, newMedication.id]);
  };

  const handleSaveMedication = () => {
    if (!editingMedication) return;
    setMedications(prev =>
      prev.map(med => (med.id === editingMedication.id ? editingMedication : med))
    );
    setEditingMedication(null);
  };

  const renderMedicationForm = (medication: Medication): JSX.Element => (
    <View style={containerStyles(theme).medicationForm}>
      <Text style={textStyles(theme).labelText}>Medication Name</Text>
      <TextInput
        style={textStyles(theme).textInput}
        placeholder="Enter medication name"
        value={editingMedication?.id === medication.id ? editingMedication.name : medication.name}
        onChangeText={(text) =>
          editingMedication?.id === medication.id &&
          setEditingMedication({ ...editingMedication, name: text })
        }
        onFocus={() => !editingMedication && setEditingMedication(medication)}
      />

      <Text style={textStyles(theme).labelText}>Dosage</Text>
      <TextInput
        style={textStyles(theme).textInput}
        placeholder="e.g., 50mg"
        value={editingMedication?.id === medication.id ? editingMedication.dosage : medication.dosage}
        onChangeText={(text) =>
          editingMedication?.id === medication.id &&
          setEditingMedication({ ...editingMedication, dosage: text })
        }
        onFocus={() => !editingMedication && setEditingMedication(medication)}
      />

      <Text style={textStyles(theme).labelText}>Frequency</Text>
      <TextInput
        style={textStyles(theme).textInput}
        placeholder="e.g., 2x/day"
        value={editingMedication?.id === medication.id ? editingMedication.frequency : medication.frequency}
        onChangeText={(text) =>
          editingMedication?.id === medication.id &&
          setEditingMedication({ ...editingMedication, frequency: text })
        }
        onFocus={() => !editingMedication && setEditingMedication(medication)}
      />

      <Text style={textStyles(theme).labelText}>Duration</Text>
      <TextInput
        style={textStyles(theme).textInput}
        placeholder="e.g., 7 days"
        value={editingMedication?.id === medication.id ? editingMedication.duration : medication.duration}
        onChangeText={(text) =>
          editingMedication?.id === medication.id &&
          setEditingMedication({ ...editingMedication, duration: text })
        }
        onFocus={() => !editingMedication && setEditingMedication(medication)}
      />
    </View>
  );

  const renderMedicationItem = (medication: Medication): JSX.Element => (
    <View key={medication.id} style={[containerStyles(theme).sectionContainer, { backgroundColor: theme.colors.surface }]}>
      <TouchableOpacity
        style={headerStyles(theme).medicationHeader}
        onPress={() => toggleMedicationExpansion(medication.id)}
      >
        <Icon name="pills" size={20} color={theme.colors.primary} style={profileStyles(theme).medicationIcon} />
        <Text style={textStyles(theme).medicationName}>
          {medication.name || 'New Medication'}
        </Text>
      </TouchableOpacity>

      {expandedMedications.includes(medication.id) && renderMedicationForm(medication)}
    </View>
  );

  const renderMedicationsList = (): JSX.Element => (
    <View>
      {medications.map(medication => renderMedicationItem(medication))}
    </View>
  );

  const renderAddButton = (): JSX.Element => (
    <TouchableOpacity
      style={buttonStyles(theme).addButton}
      onPress={addMedication}
      accessibilityLabel="Add new medication"
    >
      <Text style={buttonStyles(theme).addButtonText}>Add Medication</Text>
    </TouchableOpacity>
  );

  const renderActionButtons = (): JSX.Element => (
    <View style={containerStyles(theme).actionButtonsContainer}>
      <TouchableOpacity
        style={buttonStyles(theme).primaryButton}
        onPress={() => {
          Alert.alert('Success', 'Medications prescribed successfully.');
          navigation.goBack();
        }}
        accessibilityLabel="Prescribe medications"
      >
        <Text style={buttonStyles(theme).primaryButtonText}>Prescribe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonStyles(theme).secondaryButton}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Cancel prescription"
      >
        <Text style={buttonStyles(theme).secondaryButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderScreenContent = (): JSX.Element => (
    <View style={containerStyles(theme).contentContainer}>
      {renderMedicationsList()}
      {renderAddButton()}
      {renderActionButtons()}
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
      {appHeaderWithBackButton(navigation, theme, 'Prescribe Medication')}
      {renderScreenContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrescribeMedicationScreen;