import React from 'react';
import { View, Text } from 'react-native';
import BackButton from './BackButton';
import { headerStyles } from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

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

export default Header;