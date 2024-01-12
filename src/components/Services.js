import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../utils/images';
import {RecentSearchData} from '../dats/RecentsearchData';

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={styles.container}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <TouchableOpacity>
              <Image source={images.amazonPay} style={styles.imgStyle} />
              <Text style={styles.title}>Amazon pay</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <TouchableOpacity>
              <Image source={images.sendMoney} style={styles.imgStyle} />
              <Text style={styles.title}>Send Money</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <TouchableOpacity>
              <Image source={images.scanQr} style={styles.imgStyle} />
              <Text style={styles.title}>Scan QR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <TouchableOpacity>
              <Image source={images.payBills} style={styles.imgStyle} />
              <Text style={styles.title}>Pay Bills</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <View key={item.id} style={styles.outerContainer}>
          <TouchableOpacity>
            <Text style={styles.recentSearch}>{item.title}</Text>
            <Image source={item.image} style={styles.serviceImg} />
          </TouchableOpacity>
        </View>
      ))}
      {/* <View style={styles.outerContainer}>
        <TouchableOpacity>
          <Text style={styles.recentSearch}>drftgyhu</Text>
          <Image source={images.service7} style={styles.serviceImg} />
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    padding: 10,
  },
  serviceContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 10,
    marginTop: 2,
  },
  serviceImg: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  recentSearch: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
    textAlign: 'left',
  },
});
