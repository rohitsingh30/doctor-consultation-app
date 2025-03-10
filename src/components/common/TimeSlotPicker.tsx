import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { containerStyles,textStyles,buttonStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';


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
  const theme = useTheme().theme;

  const handleSlotSelect = (slot: string) => {
    setSelected(slot);
    onSelectTimeSlot(slot);
  };

  return (
    <View style={containerStyles(theme).slotPickerContainer}>
      <Text style={textStyles(theme).slotPickerTitle}>Select Time Slot</Text>
      <View style={containerStyles(theme).slotGrid}>
        {availableSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              buttonStyles(theme).slotButton,
              selected === slot && buttonStyles(theme).selectedSlotButton
            ]}
            onPress={() => handleSlotSelect(slot)}
          >
            <Text style={[
              textStyles(theme).slotText,
              selected === slot && textStyles(theme).selectedSlotText
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
