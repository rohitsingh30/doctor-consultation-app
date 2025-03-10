// Reference - doctor-consultation-app/appFlows/DoctorFlow-RecommendedTests.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-RecommendedTestsDark.html

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import { useTheme } from '../../../styles/ThemeProvider';
import { createRecommendedTestsStyles } from '../../../styles/screens/recommendedTestsStyles';
import BackButton from '../../common/BackButton';
import { Test, recommendedTests, testPatientData } from '../../../data/doctorData';
import { containerStyles, textStyles } from 'src/styles/commonStyles';

type RecommendedTestsScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'RecommendedTests'>;
type RecommendedTestsScreenRouteProp = RouteProp<AppStackParamList, 'RecommendedTests'>;

/**
 * RecommendedTestsScreen component for doctors to view and manage recommended tests
 * Allows viewing AI recommendations and managing test details
 */
const RecommendedTestsScreen: React.FC = () => {
  const navigation = useNavigation<RecommendedTestsScreenNavigationProp>();
  const route = useRoute<RecommendedTestsScreenRouteProp>();
  const { theme } = useTheme();
  const styles = createRecommendedTestsStyles(theme);
  
  // State management
  const [tests, setTests] = useState<Test[]>(recommendedTests);
  const [expandedTests, setExpandedTests] = useState<string[]>([]);
  const [editingTest, setEditingTest] = useState<{
    id: string;
    name: string;
    instructions: string;
  } | null>(null);

  /**
   * Toggle test expansion state
   */
  const toggleTestExpansion = (testId: string) => {
    setExpandedTests(prev => 
      prev.includes(testId) 
        ? prev.filter(id => id !== testId) 
        : [...prev, testId]
    );
  };

  /**
   * Check if a test is currently expanded
   */
  const isTestExpanded = (testId: string) => {
    return expandedTests.includes(testId);
  };

  /**
   * Add a new test to the list
   */
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

  /**
   * Start editing a test
   */
  const startEditingTest = (test: Test) => {
    setEditingTest({
      id: test.id,
      name: test.name,
      instructions: test.instructions
    });
  };

  /**
   * Save changes to a test
   */
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

  /**
   * Save all tests and navigate back
   */
  const saveTests = () => {
    // In a real app, this would send the tests to the backend
    alert('Tests saved successfully');
    navigation.goBack();
  };

  /**
   * Render AI recommended tests section
   */
  const renderAIRecommendedTests = (): JSX.Element => (
    <View style={styles.aiRecommendationContainer}>
      <View style={[containerStyles(theme).flexRow, { alignItems: 'center', marginBottom: theme.spacing.sm }]}>
        <Icon name="vial" size={20} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
        <Text style={styles.aiSectionTitle}>AI Recommended Tests</Text>
      </View>
      
      <View style={[containerStyles(theme).flexRow, containerStyles(theme).spaceBetween]}>
        <View style={styles.symptomContainer}>
          <Text style={styles.labelText}>Symptoms</Text>
          {testPatientData.symptoms.map((symptom, index) => (
            <Text key={index} style={styles.bodyText}>{symptom}</Text>
          ))}
        </View>
        
        <View style={styles.suggestedTestsContainer}>
          <Text style={styles.labelText}>Suggested Tests</Text>
          {testPatientData.suggestedTests.map((test, index) => (
            <Text key={index} style={styles.bodyText}>{test}</Text>
          ))}
        </View>
      </View>
    </View>
  );

  /**
   * Render test details header with add button
   */
  const renderTestDetailsHeader = (): JSX.Element => (
    <View style={styles.testDetailsTitleContainer}>
      <Text style={styles.sectionHeader}>Test Details</Text>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={addTest}
        accessibilityRole="button"
        accessibilityLabel="Add test"
      >
        <Icon name="plus" size={12} color={theme.colors.textInverted} />
      </TouchableOpacity>
    </View>
  );

  /**
   * Render test status indicator based on test properties
   */
  const renderTestStatus = (test: Test): JSX.Element => {
    if (test.addedBy === 'ai') {
      return (
        <View style={containerStyles(theme).flexRow}>
          <Text style={styles.aiAddedText}>AI Added</Text>
          <Icon name="info-circle" size={12} color={theme.colors.warning} />
        </View>
      );
    } else if (test.verified) {
      return <Text style={styles.doctorVerifiedText}>Verified by Doctor</Text>;
    } else {
      return <Text style={styles.doctorAddedText}>Added by Doctor</Text>;
    }
  };

  /**
   * Render expanded test details with form inputs
   */
  const renderExpandedTestDetails = (test: Test): JSX.Element => (
    <View style={styles.expandedDetailsContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Test Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter test name"
          value={editingTest?.id === test.id ? editingTest.name : test.name}
          onChangeText={(text) => editingTest?.id === test.id && setEditingTest({...editingTest, name: text})}
          onFocus={() => !editingTest && startEditingTest(test)}
          editable={!test.verified}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Things to Take Care</Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
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
          style={styles.saveChangesButton}
          onPress={saveTestChanges}
          accessibilityRole="button"
          accessibilityLabel="Save changes"
        >
          <Text style={styles.saveChangesText}>Save Changes</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  /**
   * Render a single test card with header and expandable content
   */
  const renderTestCard = (test: Test) => (
    <View key={test.id} style={styles.testCard}>
      <TouchableOpacity 
        style={styles.testHeader}
        onPress={() => toggleTestExpansion(test.id)}
        accessibilityRole="button"
        accessibilityLabel={`Toggle ${test.name} details`}
      >
        <View style={styles.testNameContainer}>
          <Icon name="vial" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
          <Text style={styles.testName}>{test.name || `Test ${test.id}`}</Text>
        </View>
        
        <View style={styles.testStatusContainer}>
          {renderTestStatus(test)}
          <Icon 
            name={isTestExpanded(test.id) ? "chevron-up" : "chevron-down"} 
            size={16} 
            color={theme.colors.text}
            style={styles.chevronIcon}
          />
        </View>
      </TouchableOpacity>
      
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>{test.instructions}</Text>
      </View>
      
      {isTestExpanded(test.id) && renderExpandedTestDetails(test)}
    </View>
  );

  /**
   * Render action buttons for saving or canceling
   */
  const renderActionButtons = () => (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={saveTests}
        accessibilityRole="button"
        accessibilityLabel="Save tests"
      >
        <Text style={styles.primaryButtonText}>Save Tests</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        accessibilityLabel="Cancel"
      >
        <Text style={styles.secondaryButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  /**
   * Render tests list section
   */
  const renderTestsList = () => (
    <View style={styles.testDetailsContainer}>
      {renderTestDetailsHeader()}
      {tests.map(test => renderTestCard(test))}
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        <BackButton />
        <View style={containerStyles(theme).contentContainer}>
          <Text style={textStyles(theme).titleText}>Recommended Tests</Text>
          
          {/* AI Recommended Tests */}
          {renderAIRecommendedTests()}
          
          {/* Test Details */}
          {renderTestsList()}
          
          {/* Action Buttons */}
          {renderActionButtons()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendedTestsScreen;