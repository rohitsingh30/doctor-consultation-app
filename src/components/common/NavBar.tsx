import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faCalendarCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { commonStyles, containerStyles,textStyles } from '../../styles/commonStyles';
import { theme } from '../../styles/theme';
type TabName = 'home' | 'search' | 'appointments' | 'profile';

interface NavBarProps {
  onTabChange?: (tab: TabName) => void;
  initialTab?: TabName;
}

const NavBar: React.FC<NavBarProps> = ({ onTabChange, initialTab = 'home' }) => {
  const [activeTab, setActiveTab] = useState<TabName>(initialTab);
  
  const handleTabPress = useCallback((tabName: TabName) => {
    setActiveTab(tabName);
    onTabChange?.(tabName);
  }, [onTabChange]);
  
  const renderTab = useCallback((tabName: TabName, icon: any, label: string) => (
    <TouchableOpacity 
      style={containerStyles.navTabItem} 
      onPress={() => handleTabPress(tabName)}
      activeOpacity={0.7}
      accessibilityRole="tab"
      accessibilityState={{ selected: activeTab === tabName }}
      accessibilityLabel={`${label} tab`}
    >
      <FontAwesomeIcon 
        icon={icon} 
        size={22} 
        color={activeTab === tabName ? theme.colors.primary : theme.colors.textTertiary} 
      />
      <Text style={[
        textStyles.navTabLabel,
        activeTab === tabName && textStyles.activeNavTabLabel
      ]}>{label}</Text>
    </TouchableOpacity>
  ), [activeTab, handleTabPress]);

  return (
    <View 
      style={containerStyles.navBarContainer}
      accessibilityRole="tablist"
      accessible={true}
    >
      {renderTab('home', faHome, 'Home')}
      {renderTab('search', faSearch, 'Search')}
      {renderTab('appointments', faCalendarCheck, 'Appointments')}
      {renderTab('profile', faUser, 'Profile')}
    </View>
  );
};

export default NavBar;
