import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

const VoucherScreen = () => {
  return (
    <View style={styles.container}>
      {/* Voucher Card */}
      <View style={styles.voucherCard}>
        <View style={{backgroundColor: Colors?.black, borderRadius: wp(3)}}>
          <Icon
            name="local-offer"
            size={wp(6)}
            color="white"
            style={{padding: hp(1.5)}}
          />
        </View>
        <View style={styles.voucherDetails}>
          <Text style={styles.voucherCode}>GBEBH30</Text>
          <Text style={styles.voucherDiscount}>New Year 40% Off</Text>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: wp(4),
  },
  voucherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f8ee',
    borderRadius: wp(4),
    padding: wp(3),
    marginTop: hp(1),
  },
  voucherDetails: {
    marginLeft: wp(3),
  },
  voucherCode: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#000',
  },
  voucherDiscount: {
    fontSize: wp(3),
    color: '#808080',
  },
  nextButton: {
    backgroundColor: '#1bbc9c',
    borderRadius: wp(3),
    padding: hp(1.7),
    alignItems: 'center',
    marginTop: hp(6),
    width: wp('75%'),
    alignSelf: 'center',
  },
  nextButtonText: {
    fontSize: wp(3.2),
    color: '#fff',
  },
});

export default VoucherScreen;
