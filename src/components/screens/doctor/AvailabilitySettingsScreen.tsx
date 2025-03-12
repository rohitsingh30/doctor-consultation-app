// Reference - doctor-consultation-app/appFlows/DoctorFlow-Dashboard.html
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-DashboardDark.html

// React and React Native imports
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Switch } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { AppStackParamList } from '../../../types/types';
import { buttonStyles, containerStyles, textStyles } from '../../../styles/commonStyles';
import { useTheme } from '../../../styles/ThemeProvider';
import { createAvailabilitySettingsStyles } from '../../../styles/screens/AvailabilitySettingsStyles';
import Header, { appHeaderWithBackButton } from '../../common/Header';

const AvailabilitySettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [isAvailable, setIsAvailable] = useState(true);
  const { theme } = useTheme();
  const styles = createAvailabilitySettingsStyles(theme);

  const weekDays = [
    { day: 'Monday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', available: false, hours: 'Not Available' },
    { day: 'Sunday', available: false, hours: 'Not Available' },
  ];

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>      
      <ScrollView style={containerStyles(theme).scrollView}>
        {appHeaderWithBackButton(navigation,theme,'Availability Settings')}
        <View style={containerStyles(theme).contentContainer}>
          {/* Overall Availability Toggle */}
          <View style={containerStyles(theme).sectionContainer}>
            <View style={containerStyles(theme).switchContainer}>
              <View>
                <Text style={textStyles(theme).switchLabel}>Available for Appointments</Text>
                <Text style={textStyles(theme).switchDescription}>Toggle to show/hide your availability</Text>
              </View>
              <Switch
                value={isAvailable}
                onValueChange={setIsAvailable}
                trackColor={{ false: theme.colors.disabled, true: theme.colors.primary }}
                accessibilityRole="switch"
                accessibilityLabel="Toggle availability"
                accessibilityState={{ checked: isAvailable }}
              />
            </View>
          </View>

          {/* Weekly Schedule */}
          <View style={[containerStyles(theme).sectionContainer]}>
            <Text style={textStyles(theme).headerText}>Weekly Schedule</Text>
            {weekDays.map((day) => (
              <TouchableOpacity 
                key={day.day}
                style={containerStyles(theme).listItem}
                onPress={() => {}}
                accessibilityRole="button"
                accessibilityLabel={`Edit schedule for ${day.day}`}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{ flex: 1 }}>
                    <Text style={textStyles(theme).dayText}>{day.day}</Text>
                    <Text style={textStyles(theme).timeSlot}>{day.hours}</Text>
                  </View>
                  <Icon name="pencil" size={16} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Save Button */}
          <TouchableOpacity 
            style={[buttonStyles(theme).saveButton]}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Save availability settings"
          >
            <Text style={buttonStyles(theme).saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvailabilitySettingsScreen;