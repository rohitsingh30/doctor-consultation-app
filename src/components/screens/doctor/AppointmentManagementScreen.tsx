// React and React Native imports
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { commonStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

const AppointmentManagementScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Appointments List */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Upcoming Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, sharedStyles.shadow]}
              onPress={() => {}}
              accessibilityRole="button"
              accessibilityLabel="View appointment with Sarah Johnson"
            >
              <View style={commonStyles.flexRow}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>Sarah Johnson</Text>
                  <Text style={textStyles.smallText}>Tomorrow, 2:30 PM - Follow-up</Text>
                </View>
                <Icon name="calendar" size={16} color={theme.colors.primary} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('AvailabilitySettings')}
            accessibilityRole="button"
            accessibilityLabel="Manage availability settings"
          >
            <Text style={commonStyles.primaryButtonText}>Manage Availability</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentManagementScreen;