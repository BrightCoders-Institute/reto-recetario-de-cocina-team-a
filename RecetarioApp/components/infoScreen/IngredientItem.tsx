import {Text, StyleSheet, View } from 'react-native';
import React from 'react';

type ingredientProps = {
    ingredient: Ingredient;
}

export type Ingredient = {
    nombre: string,
    cantidad: string
}
export default function IngredientItem({ ingredient }: ingredientProps): JSX.Element {
    return (
        <View style={styles.ingredientList}>
            <Text style={styles.textIngredients}>
                {ingredient.nombre}
            </Text>
            <Text style={styles.textIngredients}>
                {ingredient.cantidad}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    ingredientList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#525252',
    },
    textIngredients: {
        color: 'white',
        fontSize: 18,
        marginTop: 2,
        padding: 10,
    },
});
