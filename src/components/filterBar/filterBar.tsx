import React from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {Color} from '../../theme/color';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const handlePress = (category: string) => {
    onCategoryChange(category);
  };

  const renderItem = ({item}: {item: string}) => {
    const isActive = item === selectedCategory;
    return (
      <TouchableOpacity
        style={[styles.item, isActive && styles.activeItem]}
        onPress={() => handlePress(item)}>
        <Text style={[styles.text, isActive && styles.activeText]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
    />
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgray',
    margin: 6,
    padding: 10,
    paddingHorizontal: 27,
    borderRadius: 16,
  },
  activeItem: {
    backgroundColor: Color.primary,
  },
  text: {
    color: 'darkgray',
    fontSize: 16,
  },
  activeText: {
    color: 'white',
    fontWeight: '600',
  },
});
