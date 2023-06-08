import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type props = {
    title: string
};
export default function RecipeItem(props: props): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.imgRecipe}
                    source={{
                        uri: 'https://www.mexicoenmicocina.com/wp-content/uploads/2013/11/Enchiladas-rojas-2.jpg',
                    }}
                />
            </View>

            <Text style={styles.text}>{props.title}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        width: 120,
        height: 160
    },
    imgContainer: {

    },
    imgRecipe: {
        width: '100%',
        height: 120,
        borderRadius: 5,
    },
    text: {
        marginTop: 1,
        color: 'white'
    }
});
