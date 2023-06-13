import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import IngredientItem, { Ingredient } from './IngredientItem';

type ingredientListProps = {
    ingredients: Ingredient[];
};
export default function IngredientsList({ingredients}: ingredientListProps): JSX.Element {
    const renderItem = ({ item }: { item: Ingredient }) => {
        return <IngredientItem ingredient={item} />
    }

    return (
        <View style={styles.containerIngredients}>
            <FlatList data={ingredients} renderItem={renderItem} style={styles.listIngredients} horizontal={false}/>
        </View>
    );
}

const styles= StyleSheet.create({
    containerIngredients: {
        height: 300,
    },
    listIngredients: {    }
})
