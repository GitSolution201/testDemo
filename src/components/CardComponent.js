import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      {/* Chip and Pay Icons Row */}
      <View style={styles.topRow}>
        <Image
          source={require('../assets/icons/chip.png')}
          style={styles.chip}
        />
        <View style={styles.iconsRow}>
          <Icon
            name="wifi"
            size={hp('2%')}
            color="white"
            style={styles.wifiIcon}
          />
          <Image
            source={require('../assets/icons/apple-pay.png')}
            style={styles.applePayIcon}
          />
          <View style={styles.gPayWrapper}>
            <Image
              source={require('../assets/icons/google-pay.png')}
              style={styles.payIcon}
            />
          </View>
        </View>
      </View>

      {/* Card Number */}
      <Text style={styles.cardNumber}> **** **** **** 1234</Text>

      {/* Valid Thru */}
      <View style={styles.validRow}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.validText}>VALID</Text>
          <Text style={styles.validText2}>THRU</Text>
        </View>
        <Text style={styles.dateText}>01/22</Text>
      </View>

      {/* Name */}
      <Text style={styles.nameText}>Nionzima Enock</Text>

      {/* MasterCard Icon (Double circles) */}
      <View style={styles.masterIcon}>
        <View style={styles.circleLeft} />
        <View style={styles.circleRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('75%'),
    height: hp('20%'),
    borderRadius: wp('10%'),
    backgroundColor: '#000',
    padding: wp('5%'),
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    width: wp('10%'),
    height: hp('4%'),
    resizeMode: 'contain',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wifiIcon: {
    marginRight: wp('2%'),
  },
  payIcon: {
    width: wp('13%'),
    height: hp('3.7%'),
    resizeMode: 'contain',
  },
  applePayIcon: {
    width: wp('13%'),
    height: hp('4.7%'),
    resizeMode: 'contain',
  },
  gPayWrapper: {
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  cardNumber: {
    color: 'white',
    fontSize: wp('5.5%'),
    letterSpacing: 2,
  },
  validRow: {
    flexDirection: 'row',

  },
  validText: {
    color: '#fff',
    fontSize: wp('1.8%'),
    lineHeight: hp('1.2%'),
    marginRight: wp('2%'),
  },
  validText2: {
    color: '#fff',
    fontSize: wp('1.8%'),
    lineHeight: hp('1.2%'),
    marginRight: wp('2%'),
  },
  dateText: {
    color: 'white',
    fontSize: wp('4%'),
  },
  nameText: {
    color: 'white',
    fontSize: wp('4%'),
  },
  masterIcon: {
    position: 'absolute',
    bottom: hp('2%'),
    right: wp('5%'),
    flexDirection: 'row',
  },
  circleLeft: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: '#fff',
    opacity: 0.7,
    marginRight: -wp('2.5%'),
  },
  circleRight: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: '#fff',
    opacity: 0.4,
  },
});

export default CardComponent;
