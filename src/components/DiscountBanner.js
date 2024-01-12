import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {images} from '../utils/images';
import {categoriesinfo} from '../dats/categoriesInfo';

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // Sample data for the carousel
  const carouselData = [
    {title: 'Item 3', image: images.slider1},
    {title: 'Item 1', image: images.slider5},
    {title: 'Item 2', image: images.slider7},
    {title: 'Item 4', image: images.slider2},
    {title: 'Item 5', image: images.slider3},
    {title: 'Item 6', image: images.slider4},
    {title: 'Item 7', image: images.slider6},
    {title: 'Item 8', image: images.slider8},
    // Add more items as needed
  ];

  // Render item function for the carousel
  const renderItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselText}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={500}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
        lockScrollWhileSnapping={true}
        enableMomentum={false}
        decelerationRate={500}
        loop={true}
      />
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{position: 'absolute', bottom: 0, left: '15%'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="#006A4E"
        inactiveDotColor="white"
        animatedTension={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    paddingRight: 40,
    paddingLeft: 20,
  },
  carouselImage: {
    width: '100%',
    height: 270,
    // paddingHorizontal: -,
    resizeMode: 'stretch',
    marginLeft: -30,
    // flex: 1,
  },
  carouselText: {},
});
export default MyCarousel;
