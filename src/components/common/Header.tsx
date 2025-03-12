import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
import { headerStyles } from '../../styles/commonStyles';
import { Theme, useTheme } from 'src/styles/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParam, User } from 'src/types/types';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  alignTitle?: 'left' | 'center' | 'right';
  rightComponent?: React.ReactNode;
  testID?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  alignTitle = 'center',
  rightComponent,
  testID = 'header'
}) => {
  const theme = useTheme().theme;
  return (
    <View 
      style={headerStyles(theme).container}
      testID={testID}
      accessibilityRole="header"
      accessible={true}
    >
      <View style={headerStyles(theme).flexRow}>
        {showBackButton && <BackButton />}
      </View>
      
      <Text 
        style={[
          headerStyles(theme).title,
          alignTitle === 'right' && { alignSelf: 'flex-end' },
          alignTitle === 'center' && { alignSelf: 'center' }
        ]}
        accessibilityRole="header"
        accessibilityLabel={title}
        accessible={true}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      
      <View style={headerStyles(theme).headerRight}>
        {rightComponent}
      </View>
    </View>
  );
};

export const appHeaderWithBackButton = (navigation: NativeStackNavigationProp<AppStackParam>,theme: Theme,text: string)=>{
  return (
  <View style={[headerStyles(theme).headerContainer, { paddingHorizontal: 12, paddingVertical: 8, width: '100%' }]}>
  <View style={[{ flexDirection: 'row', alignItems: 'center', flex: 1 }]}>
    <TouchableOpacity 
      onPress={() => navigation.goBack()}
      accessibilityRole="button"
      accessibilityLabel="Go back"
      style={{ padding: 6 }}
    >
      <Icon name="chevron-left" style={headerStyles(theme).headerBackButton} />
    </TouchableOpacity>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
      <Text style={[headerStyles(theme).headerText]} numberOfLines={1}>{text}</Text>
    </View>
  </View>
  </View>
  )
}

export const dashboardDoctorHeader = (navigation: NativeStackNavigationProp<AppStackParam>,theme: Theme, user: User | null, handleLogout: ()=>void,)=>{
  return (
    <View style={[headerStyles(theme).headerContainer, { paddingHorizontal: 12, paddingVertical: 8, width: '100%' }]}>
    <View style={[{ flexDirection: 'row', alignItems: 'center', flex: 1 }]}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('DoctorProfile', { doctorId: user?.id })}
        accessibilityRole="button"
        accessibilityLabel="Go to doctor profile"
        style={{ padding: 6 }}
      >
        <Icon name="user-md" style={headerStyles(theme).profileIcon} />
      </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
        <Text style={[headerStyles(theme).headerText, { marginRight: 8 }]} numberOfLines={1}>Dr. John Doe</Text>
        <View style={[headerStyles(theme).availabilityBadge]}>
          <Icon name="check-circle" style={headerStyles(theme).availabilityIcon} />
          <Text style={headerStyles(theme).availabilityText}>Available</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity 
      onPress={handleLogout}
      style={[headerStyles(theme).logoutButton, { padding: 6 }]}
      accessibilityRole="button"
      accessibilityLabel="Log out"
    >
      <Icon name="sign-out" style={{ marginRight: 6, color: theme.colors.primary }} />
      <Text style={headerStyles(theme).logoutButtonText}>Log Out</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Header;