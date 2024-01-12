import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const SubHead = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.subcontainer}>
            <EvilIcons name="location" size={28} color={'black'} />
            <Text style={styles.text}>
              Deliver to Mohammed - Bengaluru 560094
            </Text>
            <AntDesign
              name="down"
              size={12}
              color={'black'}
              style={styles.arrowdown}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdeee9',
    height: 40,
    paddingHorizontal: 10,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    padding: 8,
    color: 'black',
    fontSize: 14,
  },
  arrowdown: {
    paddingTop: 8,
    marginLeft: -5,
  },
});
export default SubHead;
