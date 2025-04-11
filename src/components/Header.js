import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton}>
        <AntDesign name="left" size={wp(3)} color="#fff" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaction</Text>
      </View>

      <TouchableOpacity style={styles.menuButton}>
        <Icon name="more-vert" size={wp(6)} color={Colors.gray} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    marginTop: wp(4),
    backgroundColor: Colors.white,
  },

  backButton: {
    backgroundColor: Colors.blue,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  header: {
    flex: 1,
    marginHorizontal: wp(4),
    backgroundColor: Colors.white,
    borderRadius: wp(8),
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(5),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: wp(4),
    color: Colors.black,
  },
  menuButton: {
    width: wp(6),
  },
});
