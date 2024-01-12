import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../utils/images';
import {categoriesinfo} from '../dats/categoriesInfo';

const checking = [
  {
    id: 1,
    title: 'ertyuhijok',
  },
  {
    id: 2,
    title: 'ertyuhijok',
  },
  {
    id: 3,
    title: 'ertyuhijok',
  },
];

const Category = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.Container}>
      {categoriesinfo.map(item => (
        <TouchableOpacity>
          <View style={styles.subcontainer}>
            <Image source={item.image} style={styles.images} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    padding: 10,
  },
  subcontainer: {
    alignItems: 'center',
  },
  images: {
    height: 50,
    width: 50,
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 14,
    color: '#2c4341',
  },
});
export default Category;
