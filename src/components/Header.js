import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import * as Animate from 'react-native-animatable';
// import React from 'react';

const TopHead = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88e0d0', '#98e1d6', '#9ee4d4']}
        style={styles.container}>
        <View style={styles.inputcontainer}>
          <TouchableOpacity>
            <View style={styles.spacebtwn}>
              <Ionicons name="search" size={22} color="#1f1f1f" />
              <TextInput
                placeholder="Search Amazon.in"
                placeholderTextColor={'#848484'}
                style={styles.textstyle}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="scan1" size={22} color="#909594" />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity>
          <Feather name="mic" size={20} color="#000000" />
        </TouchableOpacity> */}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputcontainer: {
    borderColor: '#a1bcc0',
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '98%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 5,
  },
  spacebtwn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    padding: 8,
  },
});

export default TopHead;
