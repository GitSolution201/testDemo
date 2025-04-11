import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

const PropertyCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const images = [
    require('../assets/images/hotel1.jpg'),
    require('../assets/images/hotel2.jpg'),
    require('../assets/images/hotel3.jpg'),
    require('../assets/images/hotel4.jpg'),
    require('../assets/images/hotel5.jpg'),
  ];

  const handleScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(Math.round(index));
  };

  return (
    <View style={styles.propertyCard}>
      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.propertyImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        {/* Feature Tag */}
        <View style={styles.featureTag}>
          <Text style={styles.featureText}>Featured</Text>
        </View>

        {/* Heart Icon */}
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => setLiked(!liked)}>
          <Icon
            name={liked ? 'favorite' : 'favorite-border'}
            size={wp(6)}
            color={liked ? 'red' : Colors.white}
          />
        </TouchableOpacity>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.propertyDetails}>
        <Text style={styles.propertyTitle}>Busabala Apartment</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.locationRow}>
            <Icon name="location-on" size={wp(4)} color={Colors.gray} />
            <Text style={styles.locationText}>Kampala, Uganda</Text>
          </View>
          <View style={styles.ratingRow}>
            <Icon name="star" size={wp(4)} color={Colors.yellow} />
            <Text style={styles.ratingText}>
              4.6{' '}
              <Text style={styles.ratingCount}>
                <Text style={{fontSize: wp(2)}}> /5</Text>
              </Text>
            </Text>
          </View>
        </View>
        <Text style={styles.priceText}>
          UGX 1,500,000
          <Text style={styles.priceSubtext}>/mon</Text>
        </Text>
        <View style={styles.iconsRow}>
          <View style={styles.iconItem}>
            <Icon name="hotel" size={wp(4)} color={Colors.gray} />
            <Text style={styles.iconText}>1</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="king-bed" size={wp(4)} color={Colors.gray} />
            <Text style={styles.iconText}>2</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="bathtub" size={wp(4)} color={Colors.gray} />
            <Text style={styles.iconText}>1</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share" size={wp(5)} color={Colors.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  propertyCard: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    paddingHorizontal: wp(2),
    marginVertical: hp(2),
    backgroundColor: '#f7f5f4',
    borderRadius: wp(3),
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: hp(0.2)},
        shadowOpacity: 0.1,
        shadowRadius: wp(1),
      },
      android: {
        elevation: 4,
      },
    }),
  },
  carouselContainer: {
    width: wp(45),
    height: wp(45),
    marginVertical: wp(2),
    borderRadius: wp(3),
    overflow: 'hidden',
    position: 'relative',
  },
  propertyImage: {
    width: wp(45),
    height: wp(45),
  },
  featureTag: {
    position: 'absolute',
    top: wp(3),
    left: wp(3),
    backgroundColor: Colors.white,
    paddingHorizontal: wp(2.5),
    paddingVertical: wp(1.2),
    borderRadius: wp(10),
  },
  featureText: {
    fontSize: wp(2.2),
    color: Colors.blue,
  },
  heartIcon: {
    position: 'absolute',
    top: wp(2),
    right: wp(2),
    padding: wp(1.5),
  },
  dotsContainer: {
    position: 'absolute',
    bottom: wp(2),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: wp(1.5),
    height: wp(1.5),
    borderRadius: wp(0.75),
    marginHorizontal: wp(0.5),
  },
  activeDot: {
    backgroundColor: Colors.white,
    width: wp(1.5),
  },
  inactiveDot: {
    backgroundColor: Colors.lightGray,
  },
  propertyDetails: {
    flex: 1,
    paddingVertical: wp(4),
    paddingHorizontal: wp(3),
  },
  propertyTitle: {
    fontSize: wp(3),
    color: Colors.black,
    fontWeight: '600'
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  locationText: {
    fontSize: wp(2.5),
    color: Colors.gray,
    marginLeft: wp(1),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  ratingText: {
    fontSize: wp(2.5),
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: wp(1),
  },
  ratingCount: {
    color: Colors.gray,
    fontWeight: 'normal',
  },
  priceText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: hp(1.5),
  },
  priceSubtext: {
    color: Colors.gray,
    fontSize: wp(2.5),
    fontWeight: 'normal',
  },
  iconsRow: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(3),
  },
  iconText: {
    fontSize: wp(2.5),
    color: Colors.gray,
    marginLeft: wp(1),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: wp(3),
  },
  rentButton: {
    backgroundColor: Colors.white,
    borderRadius: wp(50),
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: Colors?.blue,
  },
  rentButtonText: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(10),
    color: Colors.blue,
    fontSize: wp(3),
  },
});
