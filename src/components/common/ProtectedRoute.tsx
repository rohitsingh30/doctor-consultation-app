import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { containerStyles, textStyles} from '../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useContext(AuthContext);
  const theme = useTheme().theme;

  if (isLoading) {
    return (
      <View style={containerStyles(theme).centeredContent}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={containerStyles(theme).centeredContent}>
        <Text style={textStyles(theme).bodyText}>Please login to access this page</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;