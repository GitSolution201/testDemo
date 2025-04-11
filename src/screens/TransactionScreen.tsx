import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropertyCard from '../components/PropertyCard';
import CardComponent from '../components/CardComponent';
import PaymentOptions from '../components/PaymentOptions';
import VoucherScreen from '../components/VoucherScreen';
import Header from '../components/Header';
import {Colors} from '../constants/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const Transactions = () => {
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentField, setCurrentField] = useState<
    'checkIn' | 'checkOut' | null
  >(null);

  const showDatePicker = (field: 'checkIn' | 'checkOut') => {
    setCurrentField(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    if (currentField === 'checkIn') {
      setCheckInDate(date);
    } else {
      setCheckOutDate(date);
    }
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />
        {/* Property Card */}
        <PropertyCard />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Period</Text>
          <View style={styles.dateRow}>
            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => showDatePicker('checkIn')}>
              <Text style={styles.dateLabel}>Check In:</Text>
              <View style={styles.dateBox}>
                <Icon name="calendar-today" size={wp(4)} color={Colors.gray} />
                <Text style={[
                  styles.dateText,
                  checkInDate && styles.selectedDateText
                ]}>
                  {checkInDate
                    ? moment(checkInDate).format('ddd, DD MMM YYYY')
                    : moment().format('ddd, DD MMM YYYY')}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => showDatePicker('checkOut')}>
              <Text style={styles.dateLabel}>Check Out:</Text>
              <View style={styles.dateBox}>
                <Icon name="calendar-today" size={wp(4)} color={Colors.gray} />
                <Text style={[
                  styles.dateText,
                  checkOutDate && styles.selectedDateText
                ]}>
                  {checkOutDate
                    ? moment(checkOutDate).format('ddd, DD MMM YYYY')
                    : 'Select Date'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
        />

        {/* Note for Owner */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note for Owner</Text>
          <View style={styles.noteContainer}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={wp(4.5)}
              color={Colors.gray}
            />
            <Text style={styles.noteText}>Write your note in here</Text>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <CardComponent />
          <PaymentOptions />

          {/* Voucher Section */}
          <View style={styles.voucherSection}>
            <Text style={styles.voucherText}>Have a voucher?</Text>
            <TouchableOpacity>
              <Text style={styles.voucherLink}>Click here</Text>
            </TouchableOpacity>
          </View>
          {/* Voucher Card */}
          <VoucherScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  section: {
    marginHorizontal: wp(4),
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: wp(3.5), // Equivalent to 16px on a 375px screen
    fontWeight: 'bold',
    color: Colors.black,
    marginVertical: hp(1),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flex: 1,
    marginRight: wp(2),
  },
  dateLabel: {
    fontSize: wp(3.2),
    color: Colors.gray,
    marginBottom: hp(0.5),
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: Colors.gray,
    borderRadius: wp(3),
    padding: wp(2.8),
  },
  dateText: {
    fontSize: wp(3),
    color: Colors.gray,
    marginLeft: wp(2),
  },
  selectedDateText: {
    color: Colors.black,
    fontWeight: '500',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: Colors.gray,
    borderRadius: wp(3),
    padding: wp(3),
  },
  noteText: {
    fontSize: wp(3),
    color: Colors.gray,
    marginLeft: wp(2),
    flex: 1,
  },

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

  voucherSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  voucherText: {
    fontSize: wp(3.7),
    fontWeight: 'bold',
    color: Colors.black,
  },
  voucherLink: {
    fontSize: wp(2.8),
    color: Colors.spanishGrey,
  },
});
