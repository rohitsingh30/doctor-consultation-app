import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

type RecommendedTestsScreenNavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'RecommendedTests'>;
type RecommendedTestsScreenRouteProp = RouteProp<DoctorStackParamList, 'RecommendedTests'>;

type Test = {
  id: string;
  name: string;
  instructions: string;
  addedBy: 'doctor' | 'ai';
  verified: boolean;
};

const RecommendedTestsScreen = () => {
  const navigation = useNavigation<RecommendedTestsScreenNavigationProp>();
  const route = useRoute<RecommendedTestsScreenRouteProp>();
  
  // Mock patient data - in a real app, this would come from route params or API
  const patientData = {
    name: 'John Doe',
    symptoms: ['Chest pain', 'Shortness of breath'],
    suggestedTests: ['Blood Pressure Monitoring', 'Neurological Examination']
  };

  // State for tests
  const [tests, setTests] = useState<Test[]>([
    {
      id: '1',
      name: 'Blood Pressure Monitoring',
      instructions: 'Avoid caffeine and exercise 30 minutes before the test. Sit quietly for 5 minutes before the test.',
      addedBy: 'doctor',
      verified: true
    },
    {
      id: '2',
      name: 'Neurological Examination',
      instructions: 'Wear comfortable clothing. Inform the doctor of any medications you are taking.',
      addedBy: 'ai',
      verified: false
    },
    {
      id: '3',
      name: '',
      instructions: 'Add any special instructions or warnings',
      addedBy: 'doctor',
      verified: false
    }
  ]);

  // State for expanded test details
  const [expandedTests, setExpandedTests] = useState<string[]>([]);

  // State for editing test
  const [editingTest, setEditingTest] = useState<{
    id: string;
    name: string;
    instructions: string;
  } | null>(null);

  // Toggle test expansion
  const toggleTestExpansion = (testId: string) => {
    setExpandedTests(prev => 
      prev.includes(testId) 
        ? prev.filter(id => id !== testId) 
        : [...prev, testId]
    );
  };

  // Check if test is expanded
  const isTestExpanded = (testId: string) => {
    return expandedTests.includes(testId);
  };

  // Add new test
  const addTest = () => {
    const newTest: Test = {
      id: `${tests.length + 1}`,
      name: '',
      instructions: '',
      addedBy: 'doctor',
      verified: false
    };
    
    setTests([...tests, newTest]);
    setExpandedTests([...expandedTests, newTest.id]);
    setEditingTest({
      id: newTest.id,
      name: newTest.name,
      instructions: newTest.instructions
    });
  };

  // Start editing test
  const startEditingTest = (test: Test) => {
    setEditingTest({
      id: test.id,
      name: test.name,
      instructions: test.instructions
    });
  };

  // Save test changes
  const saveTestChanges = () => {
    if (!editingTest) return;
    
    setTests(tests.map(test => 
      test.id === editingTest.id 
        ? {
            ...test,
            name: editingTest.name,
            instructions: editingTest.instructions,
            verified: test.addedBy === 'doctor' ? true : test.verified
          } 
        : test
    ));
    
    setEditingTest(null);
  };

  // Save all tests
  const saveTests = () => {
    // In a real app, this would send the tests to the backend
    alert('Tests saved successfully');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          <Text style={commonStyles.titleText}>Recommended Tests</Text>
          
          {/* AI Recommended Tests */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { backgroundColor: theme.colors.background, marginBottom: theme.spacing.md }]}>
            <View style={[commonStyles.flexRow, { alignItems: 'center', marginBottom: theme.spacing.sm }]}>
              <Icon name="vial" size={20} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
              <Text style={[textStyles.sectionTitle]}>AI Recommended Tests</Text>
            </View>
            
            <View style={[commonStyles.flexRow, commonStyles.spaceBetween]}>
              <View style={{ flex: 1 }}>
                <Text style={[textStyles.labelText, { marginBottom: theme.spacing.xs }]}>Symptoms</Text>
                {patientData.symptoms.map((symptom, index) => (
                  <Text key={index} style={commonStyles.bodyText}>{symptom}</Text>
                ))}
              </View>
              
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={[textStyles.labelText, { marginBottom: theme.spacing.xs }]}>Suggested Tests</Text>
                {patientData.suggestedTests.map((test, index) => (
                  <Text key={index} style={commonStyles.bodyText}>{test}</Text>
                ))}
              </View>
            </View>
          </View>
          
          {/* Test Details */}
          <View style={{ marginBottom: theme.spacing.md }}>
            <View style={[commonStyles.flexRow, { alignItems: 'center', marginBottom: theme.spacing.md }]}>
              <Text style={[textStyles.sectionTitle]}>Test Details</Text>
              <TouchableOpacity 
                style={[{ 
                  backgroundColor: theme.colors.primary, 
                  borderRadius: 15, 
                  width: 24, 
                  height: 24, 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginLeft: theme.spacing.sm
                }]}
                onPress={addTest}
                accessibilityRole="button"
                accessibilityLabel="Add test"
              >
                <Icon name="plus" size={12} color={theme.colors.textInverted} />
              </TouchableOpacity>
            </View>
            
            {/* Tests List */}
            {tests.map((test) => (
              <View key={test.id} style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
                <TouchableOpacity 
                  style={[commonStyles.flexRow, commonStyles.spaceBetween]}
                  onPress={() => toggleTestExpansion(test.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Toggle ${test.name} details`}
                >
                  <View style={commonStyles.flexRow}>
                    <Icon name="vial" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                    <Text style={commonStyles.bodyText}>{test.name || `Test ${test.id}`}</Text>
                  </View>
                  
                  <View style={commonStyles.flexRow}>
                    {test.addedBy === 'ai' ? (
                      <View style={commonStyles.flexRow}>
                        <Text style={{ color: theme.colors.warning, fontSize: 12, marginRight: theme.spacing.xs }}>AI Added</Text>
                        <Icon name="info-circle" size={12} color={theme.colors.warning} />
                      </View>
                    ) : test.verified ? (
                      <Text style={{ color: theme.colors.success, fontSize: 12 }}>Verified by Doctor</Text>
                    ) : (
                      <Text style={{ color: theme.colors.success, fontSize: 12 }}>Added by Doctor</Text>
                    )}
                    
                    <Icon 
                      name={isTestExpanded(test.id) ? "chevron-up" : "chevron-down"} 
                      size={16} 
                      color={theme.colors.text}
                      style={{ marginLeft: theme.spacing.sm }}
                    />
                  </View>
                </TouchableOpacity>
                
                {/* Test Instructions Summary */}
                <View style={{ marginTop: theme.spacing.sm, marginBottom: theme.spacing.sm }}>
                  <Text style={[textStyles.smallText, { fontWeight: 'bold' }]}>{test.instructions}</Text>
                </View>
                
                {/* Expanded Test Details */}
                {isTestExpanded(test.id) && (
                  <View style={{ marginTop: theme.spacing.sm }}>
                    <View style={{ marginBottom: theme.spacing.md }}>
                      <Text style={textStyles.labelText}>Test Name</Text>
                      <TextInput
                        style={textStyles.textInput}
                        placeholder="Enter test name"
                        value={editingTest?.id === test.id ? editingTest.name : test.name}
                        onChangeText={(text) => editingTest?.id === test.id && setEditingTest({...editingTest, name: text})}
                        onFocus={() => !editingTest && startEditingTest(test)}
                        editable={!test.verified}
                      />
                    </View>
                    
                    <View style={{ marginBottom: theme.spacing.md }}>
                      <Text style={textStyles.labelText}>Things to Take Care</Text>
                      <TextInput
                        style={[textStyles.textInput, { height: 80, textAlignVertical: 'top' }]}
                        placeholder="Add any special instructions or warnings"
                        multiline
                        value={editingTest?.id === test.id ? editingTest.instructions : test.instructions}
                        onChangeText={(text) => editingTest?.id === test.id && setEditingTest({...editingTest, instructions: text})}
                        onFocus={() => !editingTest && startEditingTest(test)}
                        editable={!test.verified}
                      />
                    </View>
                    
                    {!test.verified && (
                      <TouchableOpacity 
                        style={[commonStyles.primaryButton, { marginBottom: theme.spacing.md }]}
                        onPress={saveTestChanges}
                        accessibilityRole="button"
                        accessibilityLabel="Save changes"
                      >
                        <Text style={commonStyles.primaryButtonText}>Save Changes</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              </View>
            ))}
            
            {/* Action Buttons */}
            <View style={[commonStyles.flexRow, { marginBottom: theme.spacing.md }]}>
              <TouchableOpacity 
                style={[commonStyles.primaryButton, { flex: 1, marginRight: theme.spacing.sm }]}
                onPress={saveTests}
                accessibilityRole="button"
                accessibilityLabel="Save tests"
              >
                <Text style={commonStyles.primaryButtonText}>Save Tests</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[commonStyles.secondaryButton, { flex: 1 }]}
                onPress={() => navigation.goBack()}
                accessibilityRole="button"
                accessibilityLabel="Cancel"
              >
                <Text style={commonStyles.secondaryButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendedTestsScreen;