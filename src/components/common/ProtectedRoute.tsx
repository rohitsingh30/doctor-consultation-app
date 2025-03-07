import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { commonStyles ,containerStyles} from '../../styles/commonStyles';
import { theme } from '../../styles/theme';
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={containerStyles.centeredContent}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={containerStyles.centeredContent}>
        <Text style={commonStyles.bodyText}>Please login to access this page</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;