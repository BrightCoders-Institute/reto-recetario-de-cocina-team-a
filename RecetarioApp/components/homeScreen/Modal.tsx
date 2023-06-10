import { StyleSheet, Text, View, Modal,ImageBackground, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';

type modal={
  isVisible:boolean,
}

export default function Modal1( props:modal ): JSX.Element {
  const [active, isActive] = useState(props.isVisible);
  return (
    <View style={styles.centeredView}>
      <Modal

        animationType="slide"
        transparent={true}
        visible={props.isVisible}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style= {styles.containerImg}>
            <ImageBackground
             source={{uri: 'https://www.mexicoenmicocina.com/wp-content/uploads/2013/11/Enchiladas-rojas-2.jpg'}}
             resizeMode="cover"
             style= {styles.recipeImg}
            >
           <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => isActive(!active)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </ImageBackground>
            <View style={styles.containerIngredients}>
              <Text style={styles.textIngredients}>
                Ingredients
              </Text>
              <Text style={styles.textIngredients}>
                For 3 servings
              </Text>
            </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Recipe</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  modalView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  containerImg: {
    height: 370,
    width: '100%'
  },
  recipeImg: {
    width: '100%',
    height: '100%'
  },
  textIngredients: {
    color: 'white',
    fontSize: 18
  },
  containerIngredients:{
    paddingTop: 15,
    paddingLeft: 20
  }
})