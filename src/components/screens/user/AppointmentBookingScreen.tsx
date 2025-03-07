import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Local imports
import { RootStackParamList, UserStackParamList } from '../../../types/types';
import Header from '../../common/Header';
import { buttonStyles, commonStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';

type AppointmentBookingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AppointmentBooking'>;

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
] as const;

type TimeSlot = typeof timeSlots[number];

export const AppointmentBookingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackParamList>>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<TimeSlot | ''>('');

  const dates = useMemo(() => {
    const result = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      result.push(date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    }
    return result;
  }, []);

  const handleDateSelect = useCallback((date: string) => {
    setSelectedDate(date);
  }, []);

  const handleTimeSelect = useCallback((time: TimeSlot) => {
    setSelectedTime(time);
  }, []);

  const handleConfirm = useCallback(() => {
    if (selectedDate && selectedTime) {
      navigation.navigate('AppointmentConfirmation', {
        appointmentId: "1"
      });
    }
  }, [navigation, selectedDate, selectedTime]);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Book Appointment" showBackButton />
      <ScrollView style={commonStyles.scrollView}>
        <View style={commonStyles.contentContainer}>
          {/* Date Selection */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Select Date</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              style={{ marginTop: theme.spacing.sm }}
              accessibilityRole="radiogroup"
              accessibilityLabel="Available dates"
            >
              {dates.map((date, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    buttonStyles.suggestionButton,
                    sharedStyles.shadow,
                    selectedDate === date && commonStyles.primaryButton
                  ]}
                  onPress={() => handleDateSelect(date)}
                  accessibilityRole="radio"
                  accessibilityLabel={`Select date ${date}`}
                  accessibilityState={{ selected: selectedDate === date }}
                >
                  <Text style={[
                    textStyles.smallText,
                    selectedDate === date && commonStyles.primaryButtonText
                  ]}>{date}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Time Selection */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Select Time</Text>
            <View 
              style={commonStyles.actionsGrid}
              accessibilityRole="radiogroup"
              accessibilityLabel="Available time slots"
            >
              {timeSlots.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    commonStyles.actionCard,
                    sharedStyles.shadow,
                    selectedTime === time && commonStyles.primaryButton
                  ]}
                  onPress={() => handleTimeSelect(time)}
                  accessibilityRole="radio"
                  accessibilityLabel={`Select time ${time}`}
                  accessibilityState={{ selected: selectedTime === time }}
                >
                  <Text style={[
                    textStyles.actionText,
                    selectedTime === time && commonStyles.primaryButtonText
                  ]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Confirm Button */}
          <TouchableOpacity 
            style={[
              buttonStyles.primary,
              sharedStyles.shadow,
              (!selectedDate || !selectedTime) && buttonStyles.disabledButton
            ]}
            onPress={handleConfirm}
            disabled={!selectedDate || !selectedTime}
            accessibilityRole="button"
            accessibilityLabel="Confirm appointment"
            accessibilityState={{ 
              disabled: !selectedDate || !selectedTime,
              selected: false
            }}
            accessibilityHint="Double tap to confirm your appointment"
          >
            <Text style={commonStyles.primaryButtonText}>Confirm Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentBookingScreen;
function guid() {
  throw new Error('Function not implemented.');
}

