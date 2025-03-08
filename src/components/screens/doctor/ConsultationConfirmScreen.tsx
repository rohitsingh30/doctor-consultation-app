import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { commonStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import { darkTheme } from '../../../styles/darkTheme';
import { useTheme } from '../../../context/ThemeContext';
import BackButton from '../../common/BackButton';

const ConsultationConfirmScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const { isDarkMode } = useTheme();
  
  // Select the appropriate theme based on dark mode setting
  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Confirmation Card */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { backgroundColor: currentTheme.colors.surface }]}>
            <View style={commonStyles.flexRow}>
              <Icon name="check-circle" size={24} color={currentTheme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
              <Text style={commonStyles.titleText}>Consultation Scheduled</Text>
            </View>
            <Text style={textStyles.smallText}>Video consultation has been scheduled successfully</Text>
            
            <View style={[commonStyles.flexRow, { marginTop: theme.spacing.md }]}>
              <TouchableOpacity 
                style={[commonStyles.secondaryButton, { flex: 1, marginRight: theme.spacing.xs }]}
                onPress={() => {}}
                accessibilityRole="button"
                accessibilityLabel="Add to Calendar"
              >
                <Text style={commonStyles.secondaryButtonText}>Add to Calendar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[commonStyles.outlineButton, { flex: 1, marginLeft: theme.spacing.xs }]}
                onPress={() => {}}
                accessibilityRole="button"
                accessibilityLabel="Share Details"
              >
                <Text style={textStyles.outlineButtonText}>Share Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Consultation Details */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { 
            backgroundColor: currentTheme.colors.surface,
            padding: 16,
            marginBottom: 16
          }]}>
            <Text style={commonStyles.titleText}>Consultation Details</Text>
            
            <View style={[commonStyles.listItem, { marginTop: theme.spacing.sm }]}>
              <View style={commonStyles.flexRow}>
                <Icon name="user-circle" size={24} color={currentTheme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <View>
                  <Text style={commonStyles.bodyText}>John Doe, 45</Text>
                  <Text style={textStyles.smallText}>Patient ID: JD123</Text>
                </View>
              </View>
            </View>

            <View style={[commonStyles.listItem, { 
              backgroundColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
              marginBottom: 8,
              padding: 0
            }]}>
              <View style={commonStyles.flexRow}>
                <Icon name="calendar" size={24} color={currentTheme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <View>
                  <Text style={commonStyles.bodyText}>Thursday, 25 Jan 2024</Text>
                  <Text style={textStyles.smallText}>10:30 AM - 11:00 AM</Text>
                </View>
              </View>
            </View>

            <View style={[commonStyles.listItem, { 
              backgroundColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
              marginBottom: 8,
              padding: 0
            }]}>
              <View style={commonStyles.flexRow}>
                <Icon name="video-camera" size={24} color={currentTheme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <View>
                  <Text style={commonStyles.bodyText}>Video Consultation</Text>
                  <Text style={textStyles.smallText}>Link will be sent 10 minutes before</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('DoctorDashboard')}
            accessibilityRole="button"
            accessibilityLabel="Return to Dashboard"
          >
            <Text style={commonStyles.primaryButtonText}>Return to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[commonStyles.secondaryButton, sharedStyles.shadow, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.navigate('PatientHistory')}
            accessibilityRole="button"
            accessibilityLabel="Patient History"
          >
            <Text style={commonStyles.secondaryButtonText}>Patient History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsultationConfirmScreen;