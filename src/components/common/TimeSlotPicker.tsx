import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles, containerStyles,textStyles,buttonStyles } from '../../styles/commonStyles';

interface TimeSlotPickerProps {
  availableSlots: string[];
  onSelectTimeSlot: (slot: string) => void;
  selectedSlot?: string;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableSlots,
  onSelectTimeSlot,
  selectedSlot: initialSelectedSlot
}) => {
  const [selected, setSelected] = useState<string | undefined>(initialSelectedSlot);

  const handleSlotSelect = (slot: string) => {
    setSelected(slot);
    onSelectTimeSlot(slot);
  };

  return (
    <View style={containerStyles.slotPickerContainer}>
      <Text style={textStyles.slotPickerTitle}>Select Time Slot</Text>
      <View style={containerStyles.slotGrid}>
        {availableSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              buttonStyles.slotButton,
              selected === slot && buttonStyles.selectedSlotButton
            ]}
            onPress={() => handleSlotSelect(slot)}
          >
            <Text style={[
              textStyles.slotText,
              selected === slot && textStyles.selectedSlotText
            ]}>
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeSlotPicker;
