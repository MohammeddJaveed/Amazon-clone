import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Header} from 'react-native/Libraries/NewAppScreen';
import TopHead from '../components/Header';
import SubHead from '../components/SubHead';
import Category from '../components/Category';
import DiscountBanner from '../components/DiscountBanner';
import Services from '../components/Services';
import Deals from '../components/Deals';

const HomeScreen = () => {
  return (
    <ScrollView style={{marginBottom: 40}}>
      <TopHead />
      <SubHead />
      <Category />
      <DiscountBanner />
      <Services />
      <Deals />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
