import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, ImageBackground} from 'react-native';

const InfoRecipe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    {/* <RecipeItem /> */}
  );
};

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
});

export default InfoRecipe;