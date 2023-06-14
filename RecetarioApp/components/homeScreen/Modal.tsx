import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //Importacion de Iconos
import IngredientsList from '../infoScreen/IngredientsList';


type modal = {
  isVisible: boolean;
  onClose: () => void;
  recipe: Recipe;
  type: string;
};

export default function Modal1(modal: modal): JSX.Element {
  const {isVisible, onClose, recipe, type} = modal;
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.containerImg}>
            <ImageBackground
              source={{uri: recipe.imagen}}
              resizeMode="cover"
              style={styles.recipeImg}/>
            <View style={styles.iconsContainer}>
              <Pressable onPress={onClose}>
                <Icon
                  name="close"
                  size={45}
                  style={styles.closeIcon}
                  color="#FFFFFF"
                />
              </Pressable>
              <Icon
                style={styles.shareIcon}
                name="export-variant"
                size={40}
                color="#FFFFFF"
              />
              <Icon
                style={styles.heartIcon}
                name="heart-outline"
                size={40}
                color="#FFFFFF"
              />
            </View>
            <Text style={styles.recetaType}>{type}</Text>
            <Text style={styles.recetaTitle}>{recipe.nombre}</Text>
          </View>
            <Text style={styles.servings}>
              Ingredients {'\n'}for {recipe.personas} servings
            </Text>
          <View style={styles.containerIngredients}>
            <IngredientsList ingredients={recipe.ingredientes}/>
          </View>
        </View>
      </View>
    </Modal>
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
    shadowColor: '#000',
    shadowRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  button: {
    borderRadius: 20,
    height: '10%',
    width: '10%',
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
    width: '100%',
  },
  recipeImg: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  servings: {
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 25,
  },
  containerIngredients: {
    flex:1,
    paddingTop: 15,
    paddingLeft: 20,
    width: '90%',
    height:'100%',
  },
  recetaType: {
    position: 'absolute',
    left: '5%',
    top: '80%',
    fontSize: 18,
    color: '#FFF',
  },
  recetaTitle: {
    position: 'absolute',
    left: '5%',
    top: '87%',
    fontSize: 25,
    color: '#FFF',
  },
  iconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 25,
  },
  closeIcon: {
    marginLeft: 20,
  },
  shareIcon: {
    marginLeft: 180,
  },
  heartIcon: {
    marginLeft: 30,
  },
});
