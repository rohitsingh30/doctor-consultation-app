import React from 'react';
import { View, Text, Switch } from 'react-native';
import { containerStyles, textStyles } from 'src/styles/commonStyles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <View style={containerStyles.container}>
      <Text style={textStyles.titleText}>Settings</Text>
      <View style={containerStyles.settingItem}>
        <Text style={textStyles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      {/* Add more settings options here */}
    </View>
  );
};

export default SettingsScreen;
