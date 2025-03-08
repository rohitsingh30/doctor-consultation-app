import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { avatarStyles, buttonStyles, commonStyles, containerStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

type VideoConsultationScreenProps = {
  route?: {
    params: {
      patientId?: string;
      appointmentId?: string;
    };
  };
};

const VideoConsultationScreen = ({ route }: VideoConsultationScreenProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [consultationNotes, setConsultationNotes] = useState('');
  
  // Mock patient data - in a real app, this would come from an API based on patientId
  const patient = {
    id: '1',
    name: 'John Doe',
    age: 45,
    condition: 'High Risk - Severe chest pain, shortness of breath',
    vitals: {
      bloodPressure: '140/90',
      heartRate: '95 bpm',
      temperature: '99.1°F'
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In a real app, this would trigger the actual mute/unmute functionality
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // In a real app, this would trigger the actual video on/off functionality
  };

  const endConsultation = () => {
    // In a real app, this would end the video call and save consultation data
    navigation.navigate('ConsultationConfirm');
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Patient Information Card */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { backgroundColor: theme.colors.background }]}>
            <View style={commonStyles.flexRow}>
              <Icon name="user-circle" size={24} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
              <View>
                <Text style={commonStyles.titleText}>{patient.name}, {patient.age}</Text>
                <Text style={textStyles.smallText}>{patient.condition}</Text>
              </View>
            </View>
            
            <View style={[commonStyles.flexRow, { marginTop: theme.spacing.md, justifyContent: 'space-around' }]}>
              <View style={commonStyles.flexRow}>
                <Icon name="heartbeat" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                <Text style={textStyles.smallText}>{patient.vitals.heartRate}</Text>
              </View>
              <View style={commonStyles.flexRow}>
                <Icon name="tachometer-alt" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                <Text style={textStyles.smallText}>BP: {patient.vitals.bloodPressure}</Text>
              </View>
              <View style={commonStyles.flexRow}>
                <Icon name="thermometer-half" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                <Text style={textStyles.smallText}>{patient.vitals.temperature}</Text>
              </View>
            </View>
          </View>

          {/* Video Placeholder */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { height: 200, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }]}>
            {!isVideoOn && (
              <Icon name="video-slash" size={48} color="#fff" />
            )}
            {/* In a real app, this would be replaced with an actual video component */}
          </View>

          {/* Video Controls */}
          <View style={[commonStyles.flexRow, { justifyContent: 'space-around', marginVertical: theme.spacing.md }]}>
            <TouchableOpacity 
              style={[avatarStyles.image, isMuted && { backgroundColor: theme.colors.error }]}
              onPress={toggleMute}
              accessibilityRole="button"
              accessibilityLabel={isMuted ? "Unmute microphone" : "Mute microphone"}
            >
              <Icon name={isMuted ? "microphone-slash" : "microphone"} size={24} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[avatarStyles.image, !isVideoOn && { backgroundColor: theme.colors.error }]}
              onPress={toggleVideo}
              accessibilityRole="button"
              accessibilityLabel={isVideoOn ? "Turn off camera" : "Turn on camera"}
            >
              <Icon name={isVideoOn ? "video" : "video-slash"} size={24} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[avatarStyles.image, { backgroundColor: theme.colors.error }]}
              onPress={endConsultation}
              accessibilityRole="button"
              accessibilityLabel="End consultation"
            >
              <Icon name="phone-slash" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Consultation Notes */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Consultation Notes</Text>
            <TextInput
              style={[textStyles.textInput, { height: 120, textAlignVertical: 'top' }]}
              multiline
              placeholder="Add consultation notes here..."
              value={consultationNotes}
              onChangeText={setConsultationNotes}
              accessibilityLabel="Consultation notes input field"
            />
          </View>

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => {}}
            accessibilityRole="button"
            accessibilityLabel="Save notes"
          >
            <Text style={commonStyles.primaryButtonText}>Save Notes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[commonStyles.secondaryButton, sharedStyles.shadow, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.navigate('PatientHistory')}
            accessibilityRole="button"
            accessibilityLabel="View patient history"
          >
            <Text style={commonStyles.secondaryButtonText}>View Patient History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoConsultationScreen;