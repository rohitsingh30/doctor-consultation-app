import React from 'react';
import { View, Text } from 'react-native';
import BackButton from './BackButton';
import { commonStyles, headerStyles } from '../../styles/commonStyles';

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
  return (
    <View 
      style={headerStyles.container}
      testID={testID}
      accessibilityRole="header"
      accessible={true}
    >
      <View style={commonStyles.flexRow}>
        {showBackButton && <BackButton />}
      </View>
      
      <Text 
        style={[
          headerStyles.title,
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
      
      <View style={headerStyles.headerRight}>
        {rightComponent}
      </View>
    </View>
  );
};

export default Header;