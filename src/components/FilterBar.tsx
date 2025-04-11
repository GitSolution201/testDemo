import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

interface FilterBarProps {
  filters: string[];
  selectedFilter: string | null;
  onSelectFilter: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  selectedFilter,
  onSelectFilter,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedFilter,
              index === 0 && styles.firstFilter,
              index === filters.length - 1 && styles.lastFilter,
            ]}
            onPress={() => onSelectFilter(filter)}>
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.selectedFilterText,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: wp(4),
  },
  filterButton: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    backgroundColor: Colors.white,
    borderRadius: wp(5),
    marginRight: wp(2),
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  selectedFilter: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  firstFilter: {
    marginLeft: 0,
  },
  lastFilter: {
    marginRight: 0,
  },
  filterText: {
    fontSize: wp(3),
    color: Colors.gray,
    fontWeight: '500',
  },
  selectedFilterText: {
    color: Colors.white,
    fontWeight: '600',
  },
});

export default FilterBar; 