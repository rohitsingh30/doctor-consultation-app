import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchPaymentHistory,PaymentHistoryItem } from '../../../services/api';
import { commonStyles, containerStyles, textStyles, theme } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const PaymentHistoryScreen = () => {
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPaymentHistory = async () => {
      try {
        const data = await fetchPaymentHistory();
        setPaymentHistory(data);
      } catch (err) {
        console.log(err);
        setError('Failed to load payment history');
      } finally {
        setLoading(false);
      }
    };

    loadPaymentHistory();
  }, []);

  if (loading) {
    return (
      <View style={containerStyles.centeredContent}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={containerStyles.centeredContent}>
        <Text style={textStyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <Header title="Payment History" />
      <FlatList
        data={paymentHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={commonStyles.listItem}>
            <Text style={commonStyles.bodyText}>Date: {item.date}</Text>
            <Text style={commonStyles.bodyText}>Amount: ${item.amount}</Text>
            <Text style={commonStyles.bodyText}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PaymentHistoryScreen;
