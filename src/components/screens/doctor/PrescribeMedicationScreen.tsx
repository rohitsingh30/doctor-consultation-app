import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DoctorStackParamList } from '../../../types/types';
import { commonStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

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

const PrescribeMedicationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

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

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          <Text style={commonStyles.titleText}>Prescribe Medication</Text>

          {medications.map(medication => (
            <View key={medication.id} style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
              <TouchableOpacity
                style={commonStyles.flexRow}
                onPress={() => toggleMedicationExpansion(medication.id)}
              >
                <Icon name="pills" size={20} color={theme.colors.primary} />
                <Text style={commonStyles.bodyText}>
                  {medication.name || 'New Medication'}
                </Text>
              </TouchableOpacity>

              {expandedMedications.includes(medication.id) && (
                <View style={{ marginTop: theme.spacing.md }}>
                  <Text style={textStyles.labelText}>Medication Name</Text>
                  <TextInput
                    style={textStyles.textInput}
                    placeholder="Enter medication name"
                    value={editingMedication?.id === medication.id ? editingMedication.name : medication.name}
                    onChangeText={(text) =>
                      editingMedication?.id === medication.id &&
                      setEditingMedication({ ...editingMedication, name: text })
                    }
                    onFocus={() => !editingMedication && setEditingMedication(medication)}
                  />

                  <Text style={textStyles.labelText}>Dosage</Text>
                  <TextInput
                    style={textStyles.textInput}
                    placeholder="e.g., 50mg"
                    value={editingMedication?.id === medication.id ? editingMedication.dosage : medication.dosage}
                    onChangeText={(text) =>
                      editingMedication?.id === medication.id &&
                      setEditingMedication({ ...editingMedication, dosage: text })
                    }
                    onFocus={() => !editingMedication && setEditingMedication(medication)}
                  />

                  <Text style={textStyles.labelText}>Frequency</Text>
                  <TextInput
                    style={textStyles.textInput}
                    placeholder="e.g., 2x/day"
                    value={editingMedication?.id === medication.id ? editingMedication.frequency : medication.frequency}
                    onChangeText={(text) =>
                      editingMedication?.id === medication.id &&
                      setEditingMedication({ ...editingMedication, frequency: text })
                    }
                    onFocus={() => !editingMedication && setEditingMedication(medication)}
                  />
              </View>
              )}
            </View>
        ))}
          <TouchableOpacity
            style={[commonStyles.primaryButton, { marginTop: theme.spacing.md }]}
            onPress={addMedication}
          >
            <Text style={commonStyles.primaryButtonText}>Add Medication</Text>
          </TouchableOpacity>

          <View style={commonStyles.flexRow}>
            <TouchableOpacity
              style={[commonStyles.primaryButton, { flex: 1, marginRight: theme.spacing.sm }]}
              onPress={() => {
                Alert.alert('Success', 'Medications prescribed successfully.');
                navigation.goBack();
              }}
            >
              <Text style={commonStyles.primaryButtonText}>Prescribe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[commonStyles.secondaryButton, { flex: 1 }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={commonStyles.secondaryButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrescribeMedicationScreen;