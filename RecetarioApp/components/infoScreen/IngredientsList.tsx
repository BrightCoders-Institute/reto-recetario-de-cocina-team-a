import { FlatList, StyleSheet} from 'react-native';
import React from 'react';
import IngredientItem, { Ingredient } from './IngredientItem';

type ingredientListProps = {
    ingredients: Ingredient[];
};
export default function IngredientsList({ingredients}: ingredientListProps): JSX.Element {
    const renderItem = ({ item }: { item: Ingredient }) => {
        return <IngredientItem ingredient={item} />;
    };

    return (
        <FlatList
        data={ingredients}
        renderItem={renderItem}
        style={styles.listIngredients}
        />
    );
}

const styles = StyleSheet.create({
    containerIngredients: {
        flex:1,
    },
    listIngredients: {
        flex:1,
    },
});
