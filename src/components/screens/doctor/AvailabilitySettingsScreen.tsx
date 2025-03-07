// React and React Native imports
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Switch } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const AvailabilitySettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [isAvailable, setIsAvailable] = useState(true);

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
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Availability Settings" />
      
      <ScrollView style={commonStyles.scrollView}>
        <View style={commonStyles.contentContainer}>
          {/* Overall Availability Toggle */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <View style={[commonStyles.flexRow, commonStyles.spaceBetween]}>
              <View>
                <Text style={commonStyles.titleText}>Available for Appointments</Text>
                <Text style={textStyles.smallText}>Toggle to show/hide your availability</Text>
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
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Weekly Schedule</Text>
            {weekDays.map((day) => (
              <TouchableOpacity 
                key={day.day}
                style={[commonStyles.listItem, sharedStyles.shadow]}
                onPress={() => {}}
                accessibilityRole="button"
                accessibilityLabel={`Edit schedule for ${day.day}`}
              >
                <View style={commonStyles.flexRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.bodyText}>{day.day}</Text>
                    <Text style={textStyles.smallText}>{day.hours}</Text>
                  </View>
                  <Icon name="pencil" size={16} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Save Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Save availability settings"
          >
            <Text style={commonStyles.primaryButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvailabilitySettingsScreen;