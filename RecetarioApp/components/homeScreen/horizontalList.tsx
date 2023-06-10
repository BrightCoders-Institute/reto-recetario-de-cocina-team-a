import React from 'react';
import recetas from '../../data/Recetas.json';
import { View, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

type horizontalList= {
  size: number
  height: number,
  width: number,
  padding:string,
}

export default function HorizontalList(props:horizontalList): JSX.Element {
  return (
    <View style={{ height: props.height}}>
        <FlatList
        data={recetas.recetas}
        horizontal
        renderItem={(receta) => <RecipeItem
                                  padding={props.padding}
                                  imgW={props.size}
                                  width={props.width}
                                  title={receta.item.nombre}
                                  img={receta.item.imagen} />}
        // keyExtractor={item => item.id}
      />
    </View>
  );
}

