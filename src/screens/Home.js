import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import DropDown from '../components/DropDown';
import TopBar from '../components/TopBar';
import Colors from '../constants/Colors';
import CardBox from '../components/CardBox';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <View>
        <TopBar navigation={navigation} />
      </View>
      <View style={styles.dropdown}>
        <View>
          <Text style={styles.bookTxt}>Books(128 items)</Text>
        </View>
        <View>
          <DropDown />
        </View>
      </View>
      <View>
        <CardBox />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookTxt: {
    color: Colors.cardBackground,
    fontSize: 13,
    fontWeight: '500',
  },
  dropdown: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
});
export default Home;
