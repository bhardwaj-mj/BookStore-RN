import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import {addToCart} from '../redux/CartReducer';

const Books = props => {
  const [changeAddToCart, setChangeAddToCart] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
    setChangeAddToCart(false);
  };
  const handleSwitch = useCallback(() => {
    const delay = 1;
    let timer1 = setTimeout(() => setChangeAddToCart(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  useEffect(() => {
    handleSwitch();
  }, []);

  return (
    <View style={styles.cardHeader}>
      <Card contentStyle={styles.cardContainer}>
        <View style={styles.coverImg}>
          <Card.Cover source={{uri: props.imageUrl}} resizeMode="contain" />
        </View>
        <Card.Content>
          <Text variant="titleLarge" style={styles.bookTxt}>
            {props.bookName}
          </Text>
          <Text variant="bodyMedium" style={styles.authorTxt}>
            {props.author}
          </Text>
          <Text variant="bodyMedium" style={styles.priceTxt}>
            Rs {props.price}
          </Text>
        </Card.Content>
        <View style={styles.btncContainer}>
          {changeAddToCart ? (
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.bagBtn}
                onPress={() => {
                  handleAddToCart(props);
                }}>
                <Text style={styles.addBtnText}>Add To Cart</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.wishlistText}>Wishlist</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.addedbagBtn}>
                <Text style={styles.addBtnText}>Added</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  coverImg: {
    width: 140,
    margin: 10,
  },
  btnView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagBtn: {
    width: '70%',
    backgroundColor: Colors.mainBackground,
    margin: 5,
    borderRadius: 5,
  },
  addBtnText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
  addBtn: {
    width: '70%',
    backgroundColor: '#999',
    margin: 5,
    borderRadius: 5,
  },
  wishlistText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
  addedbagBtn: {
    width: '70%',
    backgroundColor: 'navy',
    margin: 5,
    borderRadius: 5,
  },
  cardHeader: {
    margin: 5,
  },
  bookTxt: {
    color: Colors.bookName,
  },
  authorTxt: {
    color: Colors.cardBackground,
  },
  priceTxt: {
    color: Colors.cardBackground,
  },
  cardContainer: {
    width: 180,
    height: 400,
  },
  btncContainer: {
    marginTop: 'auto',
    marginBottom: 15,
  },
});
export default Books;
