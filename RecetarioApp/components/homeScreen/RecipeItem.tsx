import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type props = {
    title: string,
    width: number,
    imgW: number,
    padding:string,
};
export default function RecipeItem(props: props): JSX.Element {
    return (
        <View style={[styles.container, {width:props.width,paddingHorizontal:props.padding} ]}>
            <View style={styles.imgContainer}>
                <Image
                    style={[styles.imgRecipe,{width:props.imgW}]}
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
        flexDirection: 'column',
        borderRadius: 3,
        width: 120,
        height: 160,
        
    },
    imgContainer: {
   
    },
    imgRecipe: {
        height: 110,
        borderRadius: 5,

    },
    text: {
        marginTop: 1,
        color: 'white',
    },
});
