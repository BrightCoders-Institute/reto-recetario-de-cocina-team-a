import { StyleSheet, Text, View, Modal,ImageBackground, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';
import recetas from '../../data/Recetas.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //Importacion de Iconos

type modal={
  isVisible:boolean,
  onClose: () => void,
  id:number,
  type:string
}

export default function Modal1( modal:modal ): JSX.Element {
  const {isVisible, onClose, id, type} = modal;
  const recetaEncontrada = recetas.recetas.find((receta)=> receta.id === id);
  const [active, isActive] = useState(modal.isVisible);
  return (

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style= {styles.containerImg}>
            <ImageBackground
             source={{uri:recetaEncontrada?.imagen}}
             resizeMode="cover"
             style= {styles.recipeImg}
            >
            </ImageBackground>  
            <Pressable
              style={[styles.button]}
              onPress={onClose}>
              <Icon name="close" size={30} style={styles.textStyle} color="#fff" />
              
            </Pressable>
            
            <Text style={styles.recetaTitle}>
              {type }
              {'\n'}
              {recetaEncontrada?.nombre}
            </Text>
            <Text style={styles.servings}>
              Ingredients {'\n'}for {recetaEncontrada?.personas} servings
            </Text>
            <View style={styles.containerIngredients}>
              {
                recetaEncontrada?.ingredientes.map((ingrediente, index)=>(
                  <View style={styles.ingredientList}>
                    <Text key={index} style={styles.textIngredients}>
                      {ingrediente.nombre}
                    </Text>
                    <Text style={styles.textIngredients}>
                      {ingrediente.cantidad}
                    </Text>
                  </View>
                ))
              }
              <Text style={styles.textIngredients}>
                
              </Text>
            </View>
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  button: {
    position:'absolute',
    borderRadius: 20,
    height:'10%',
    width:'10%',
    left:'10%',
    top:'20%'
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
    height: '100%',
    opacity:.4
  },
  textIngredients: {
    color: 'white',
    fontSize: 18,
    marginTop: 2,
    padding: 10,
  },
  servings: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 25,
  },
  containerIngredients:{
    paddingTop: 15,
    paddingLeft: 20,
    width: '90%',
  },
  recetaTitle:{
    position:'absolute',
    left:'5%',
    top:'80%',
    fontSize:30,
    color:'#FFF',
    fontWeight:'bold' 
  },
  ingredientList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#525252',
  },
})