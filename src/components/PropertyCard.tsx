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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';
import {PropertyCardProps} from '../types/property';

const DEFAULT_CURRENCY = 'UGX';

export const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  title,
  location,
  rating,
  price,
  currency = DEFAULT_CURRENCY,
  bedrooms,
  bathrooms,
  area,
  onRent,
  onShare,
  onLike,
  isFeatured = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(Math.round(index));
  };

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    onLike?.(newLikedState);
  };

  const renderIcon = (name: string, size: number, color: string) => (
    <MaterialIcon name={name} size={size} color={color} />
  );

  return (
    <View style={styles.container}>
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

        {isFeatured && (
          <View style={styles.featureTag}>
            <Text style={styles.featureText}>Featured</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.heartIcon}
          onPress={handleLike}
          activeOpacity={0.7}>
          {renderIcon(
            liked ? 'favorite' : 'favorite-border',
            wp(6),
            liked ? Colors.red : Colors.white,
          )}
        </TouchableOpacity>

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

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        
        <View style={styles.infoRow}>
          <View style={styles.locationContainer}>
            {renderIcon('location-on', wp(4), Colors.gray)}
            <Text style={styles.locationText} numberOfLines={1}>
              {location}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            {renderIcon('star', wp(4), Colors.yellow)}
            <Text style={styles.ratingText}>
              {rating.toFixed(1)}
              <Text style={styles.ratingMax}>/5</Text>
            </Text>
          </View>
        </View>

        <Text style={styles.priceText}>
          {currency} {price.toLocaleString()}
          <Text style={styles.priceUnit}>/mon</Text>
        </Text>

        <View style={styles.amenitiesRow}>
          <View style={styles.amenityItem}>
            {renderIcon('hotel', wp(4), Colors.gray)}
            <Text style={styles.amenityText}>{area}</Text>
          </View>
          <View style={styles.amenityItem}>
            {renderIcon('king-bed', wp(4), Colors.gray)}
            <Text style={styles.amenityText}>{bedrooms}</Text>
          </View>
          <View style={styles.amenityItem}>
            {renderIcon('bathtub', wp(4), Colors.gray)}
            <Text style={styles.amenityText}>{bathrooms}</Text>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.rentButton}
            onPress={onRent}
            activeOpacity={0.7}>
            <Text style={styles.rentButtonText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onShare}
            style={styles.shareButton}
            activeOpacity={0.7}>
            {renderIcon('share', wp(5), Colors.gray)}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    backgroundColor: Colors.background,
    borderRadius: wp(3),
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
    color: Colors.primary,
    fontWeight: '600',
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
  },
  inactiveDot: {
    backgroundColor: Colors.lightGray,
  },
  detailsContainer: {
    flex: 1,
    padding: wp(3),
  },
  title: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: Colors.black,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(0.5),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontSize: wp(2.5),
    color: Colors.gray,
    marginLeft: wp(1),
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: wp(3),
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: wp(1),
  },
  ratingMax: {
    color: Colors.gray,
    fontWeight: 'normal',
    fontSize: wp(2),
  },
  priceText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: hp(1.5),
  },
  priceUnit: {
    color: Colors.gray,
    fontSize: wp(2.5),
    fontWeight: 'normal',
  },
  amenitiesRow: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(3),
  },
  amenityText: {
    fontSize: wp(2.5),
    color: Colors.gray,
    marginLeft: wp(1),
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },
  rentButton: {
    backgroundColor: Colors.white,
    borderRadius: wp(50),
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(7),
  },
  rentButtonText: {
    color: Colors.primary,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  shareButton: {
    padding: wp(2),
  },
});

export default PropertyCard; 