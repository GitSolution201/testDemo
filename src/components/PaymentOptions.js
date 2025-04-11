import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');

  return (
    <View style={styles.paymentOptions}>
      {[
        {
          key: 'paypal',
          label: 'Paypal',
          icon: require('../assets/icons/paypal.png'),
        },
        {
          key: 'mastercard',
          label: 'Mastercard',
          icon: require('../assets/icons/mastercard.png'),
        },
        {
          key: 'visa',
          label: 'Visa',
          icon: require('../assets/icons/visa.jpg'),
        },
      ].map(option => (
        <TouchableOpacity
          key={option.key}
          style={[
            styles.paymentOption,
            selectedPayment === option.key && styles.selectedOption,
            option.key === 'visa' && {paddingLeft: wp(5)},
          ]}
          onPress={() => setSelectedPayment(option.key)}>
          <Image source={option?.icon} style={styles.optionIcon} />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentOptions;

const styles = StyleSheet.create({
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(2),
    gap: wp(2),
  },
  paymentOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    borderRadius: wp(5),
  },
  selectedOption: {
    borderWidth: 1.5,
    borderColor: '#007AFF',
  },
  optionIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  optionText: {
    marginLeft: wp(1.5),
    fontSize: wp(3),
    color: '#1D1D1F',
  },
});
