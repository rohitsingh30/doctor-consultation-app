// Reference - doctor-consultation-app/appFlows/DoctorFlow-ConsultationConfirmPage.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-ConsultationConfirmPageDark.html

import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import { useTheme } from '../../../styles/ThemeProvider';
import { createConsultationConfirmStyles } from '../../../styles/screens/consultationConfirmStyles';
import BackButton from '../../common/BackButton';
import { buttonStyles, containerStyles } from 'src/styles/commonStyles';

const ConsultationConfirmScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { theme } = useTheme();
  const styles = createConsultationConfirmStyles(theme);

  const renderDetailItem = (icon: string, title: string, subtitle: string) => (
    <View style={styles.detailItem}>
      <Icon name={icon} size={24} style={styles.detailIcon} />
      <View>
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={styles.detailSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );

  const renderConfirmationHeader = () => (
    <View style={styles.sectionContainer}>
      <View style={containerStyles(theme).flexRow}>
        <Icon name="check-circle" size={24} style={styles.checkIcon} />
        <Text style={styles.confirmationTitle}>Consultation Scheduled</Text>
      </View>
      <Text style={styles.confirmationSubtitle}>Video consultation has been scheduled successfully</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[buttonStyles(theme).secondaryButton, styles.actionButton]}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Add consultation to calendar"
        >
          <Text style={buttonStyles(theme).secondaryButtonText}>Add to Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[buttonStyles(theme).outlineButton, styles.actionButton]}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Share consultation details"
        >
          <Text style={styles.outlineButtonText}>Share Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderConsultationDetails = () => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>Consultation Details</Text>
      
      {renderDetailItem('user-circle', 'John Doe, 45', 'Patient ID: JD123')}
      {renderDetailItem('calendar', 'Thursday, 25 Jan 2024', '10:30 AM - 11:00 AM')}
      {renderDetailItem('video-camera', 'Video Consultation', 'Link will be sent 10 minutes before')}
    </View>
  );

  const renderReturnButton = () => (
    <TouchableOpacity 
      style={[buttonStyles(theme).primaryButton, styles.mainActionButton]}
      onPress={() => navigation.navigate('DoctorDashboard')}
      accessibilityRole="button"
      accessibilityLabel="Return to dashboard"
    >
      <Text style={buttonStyles(theme).primaryButtonText}>Return to Dashboard</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        <BackButton />
        <View style={containerStyles(theme).contentContainer}>
          {renderConfirmationHeader()}
          {renderConsultationDetails()}
          {renderReturnButton()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsultationConfirmScreen;