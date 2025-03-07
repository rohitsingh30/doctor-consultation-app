import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles, containerStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';
import { theme } from '../../../styles/theme'

interface ConsultationSettings {
  allowInstantConsultation: boolean;
  availableForConsultation: boolean;
  consultationDuration: number;
  breakTime: number;
  autoAcceptBookings: boolean;
}

const ConsultationSettingsScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [settings, setSettings] = useState<ConsultationSettings>({
    allowInstantConsultation: false,
    availableForConsultation: false,
    consultationDuration: 30,
    breakTime: 15,
    autoAcceptBookings: false
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      const savedSettings = await AsyncStorage.getItem('consultationSettings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      setError('Failed to load settings');
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async (newSettings: ConsultationSettings): Promise<void> => {
    try {
      setError(null);
      await AsyncStorage.setItem('consultationSettings', JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      setError('Failed to save settings');
      console.error('Error saving settings:', error);
    }
  };

  const toggleSetting = (key: keyof ConsultationSettings): void => {
    const newSettings = {
      ...settings,
      [key]: !settings[key]
    };
    saveSettings(newSettings);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={commonStyles.safeArea}>
        <Header title="Consultation Settings" />
        <View style={containerStyles.centeredContent}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={commonStyles.safeArea}>
        <Header title="Consultation Settings" />
        <View style={containerStyles.centeredContent}>
          <Text style={[commonStyles.bodyText, { marginBottom: theme.spacing.md }]}>{error}</Text>
          <TouchableOpacity 
            style={commonStyles.primaryButton}
            onPress={loadSettings}
          >
            <Text style={commonStyles.primaryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Consultation Settings" />
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: theme.spacing.md }}>
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: theme.spacing.md }]}>Consultation Preferences</Text>
            
            <View style={[commonStyles.listItem, { alignItems: 'center' }]}>
              <Text style={commonStyles.bodyText}>Allow Instant Consultation</Text>
              <Switch
                value={settings.allowInstantConsultation}
                onValueChange={() => toggleSetting('allowInstantConsultation')}
                trackColor={{ false: theme.colors.disabled, true: theme.colors.primary }}
              />
            </View>

            <View style={[commonStyles.listItem, { alignItems: 'center' }]}>
              <Text style={commonStyles.bodyText}>Available for Consultation</Text>
              <Switch
                value={settings.availableForConsultation}
                onValueChange={() => toggleSetting('availableForConsultation')}
                trackColor={{ false: theme.colors.disabled, true: theme.colors.primary }}
              />
            </View>

            <View style={[commonStyles.listItem, { alignItems: 'center' }]}>
              <Text style={commonStyles.bodyText}>Auto-accept Bookings</Text>
              <Switch
                value={settings.autoAcceptBookings}
                onValueChange={() => toggleSetting('autoAcceptBookings')}
                trackColor={{ false: theme.colors.disabled, true: theme.colors.primary }}
              />
            </View>
          </View>
          
          {/* Save Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, { marginTop: theme.spacing.lg }]}
          >
            <Text style={commonStyles.primaryButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsultationSettingsScreen;