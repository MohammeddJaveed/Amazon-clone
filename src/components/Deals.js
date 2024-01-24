import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../utils/images';
// import CountDown from 'react-native-countdown-component';

const Deals = () => {
  return (
    <View>
      <Image source={images.deal} style={{width: '100%', height: 500}} />
      <ImageBackground style={styles.coverImage} source={images.republicday}>
        <View style={styles.textView}>
          <Text style={styles.imageText}>Starts early for Prime</Text>
          {/* <CountDown
            style={styles.timer}
            until={6000000 * 10 + 30}
            size={20}
            onFinish={() => alert('Finished')}
            digitStyle={{marginRight: -8}}
            digitTxtStyle={{color: 'black'}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{h: 'hrs', m: 'mins', s: 'Secs'}}
            timeLabelStyle={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: -10,
              marginRight: -8,
            }}
          /> */}
        </View>
      </ImageBackground>
      <View style={styles.divider} />
      <View style={{paddingTop: 5}}>
        <Text style={styles.descText}>
          Get Sale ready | Home Kitchen & {'\n'}outdoors
        </Text>
        <View style={styles.kitchenContainer}>
          <Image source={images.homek1} style={styles.image} />
          <Image source={images.homek2} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.bottomtext}>
            Minimum 30% off | {'\n'}Kitchen appliances
          </Text>
          <Text style={styles.bottomtext}>
            Minimum 50% off | {'\n'}Home decor & essentials
          </Text>
        </View>
        <View style={styles.kitchenContainer}>
          <Image source={images.homek3} style={styles.image} />
          <Image source={images.homek4} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.bottomtext}>
            Minimum 40% off | {'\n'}Furniture & mattresses
          </Text>
          <Text style={styles.bottomtext}>
            Minimum 50% off | {'\n'}Home improvements
          </Text>
        </View>
        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Text style={{color: '#008B8B', fontSize: 16}}>See all </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={{paddingTop: 5}}>
        <Text style={styles.descText}>Deals for you on top brands</Text>
        <View style={styles.kitchenContainer}>
          <Image source={images.jordan} style={styles.image} />
          <Image source={images.glasses} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
          <View style={styles.redContainer}>
            <Text style={{color: 'white', padding: 5, fontSize: 12}}>
              50% off
            </Text>
          </View>
          <View>
            <Text style={styles.texture1}>Deal of the day</Text>
          </View>
          <View style={styles.redContainer}>
            <Text style={{color: 'white', padding: 5, fontSize: 12}}>
              30% off
            </Text>
          </View>
          <View>
            <Text style={styles.texture2}>Deal of the day</Text>
          </View>

          {/* <Text style={styles.bottomtext}>
            Minimum 50% off | {'\n'}Home decor & essentials
          </Text> */}
        </View>

        <View style={styles.kitchenContainer}>
          <Image source={images.mobiledeal} style={styles.image} />
          <Image source={images.watch} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
          <View style={styles.redContainer}>
            <Text style={{color: 'white', padding: 5, fontSize: 12}}>
              79% off
            </Text>
          </View>
          <View>
            <Text style={styles.texture1}>Deal of the day</Text>
          </View>
          <View style={styles.redContainer}>
            <Text style={{color: 'white', padding: 5, fontSize: 12}}>
              85% off
            </Text>
          </View>
          <View>
            <Text style={styles.texture2}>Deal of the day</Text>
          </View>
        </View>

        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Text style={{color: '#008B8B', fontSize: 16}}>See all </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  coverImage: {
    marginTop: 5,
    height: 100,
  },
  redContainer: {
    marginTop: 5,
    width: 60,
    height: 25,
    borderRadius: 2,
    backgroundColor: '#BD2031',
  },
  texture1: {
    color: '#BD2031',
    marginRight: 30,
    fontSize: 14,
    fontWeight: '500',
    padding: 8,
  },
  texture2: {
    color: '#BD2031',
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  bottomtext: {
    color: 'black',
    fontSize: 14,
    marginRight: 75,
    paddingBottom: 10,
  },
  image: {
    height: 185,
    width: 185,
    borderRadius: 5,
    resizeMode: 'contain',

    // margin: 5,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: 'grey',
    marginTop: 15,
  },
  imageText: {
    color: 'black',
    padding: 20,
    fontWeight: 'bold',
  },
  timer: {
    // position: 'absolute',
    marginTop: -40,
    alignSelf: 'flex-start',
    padding: 10,
  },
  kitchenContainer: {
    flexDirection: 'row',
    // marginHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  descText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 15,
  },
  textcontainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: 15,
    marginLeft: 15,
  },
});
