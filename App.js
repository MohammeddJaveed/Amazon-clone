import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
// import Router from './src/navigation/Router';

const App = () => {
  return (
    <View style={{backgroundColor: '#FAF9F6', height: '100%'}}>
      <StatusBar backgroundColor={'#88e0d0'} barStyle={'dark-content'} />
      <HomeScreen />
      {/* <Router /> */}
    </View>
  );
};

export default App;
