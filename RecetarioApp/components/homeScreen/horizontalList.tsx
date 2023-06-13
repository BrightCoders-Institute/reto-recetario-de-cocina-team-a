import React from 'react';
import recetas from '../../data/Recetas.json';
import { View, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

type horizontalList = {
  size: number
  height: number,
  width: number,
  padding: string,
  type: string,
}

export default function HorizontalList(props: horizontalList): JSX.Element {
  return (
    <View style={{ height: props.height }}>
      <FlatList
        data={recetas.recetas}
        horizontal
        renderItem={(receta) => <RecipeItem
          type={props.type}
          padding={props.padding}
          imgW={props.size}
          width={props.width}
          recipe={receta.item} />}
      />
    </View>
  );
}

