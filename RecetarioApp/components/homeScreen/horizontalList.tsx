import React from 'react'
import recetas from '../../data/Recetas.json';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import RecipeItem from './RecipeItem';

export default function HorizontalList(): JSX.Element {
  
  return (
    <View>
        <FlatList
        data={recetas.recetas}
        renderItem={(receta) => <RecipeItem title={receta.item.nombre} />}
        // keyExtractor={item => item.id}
      />
    </View>
  )
}

