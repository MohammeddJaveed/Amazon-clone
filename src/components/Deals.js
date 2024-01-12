import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../utils/images';

const Deals = () => {
  return (
    <View>
      <Image source={images.deal} style={{width: '100%', height: 500}} />
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({});
