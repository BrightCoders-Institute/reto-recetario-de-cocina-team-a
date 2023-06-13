import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Modal1 from './Modal';
type props = {
    width: number;
    imgW: number;
    padding:string;
    type:string;
    recipe: Recipe
};
export default function RecipeItem(props: props): JSX.Element {
    const [visible, setVisible] = useState(false);
    const onClose = ()=>{
        setVisible(false)
    }
    return (
        <Pressable
        onPress={() => {
            setVisible(!visible);
        }}>
            <Modal1 isVisible={visible} onClose={onClose} recipe={props.recipe} type={props.type}/>
            <View style={[styles.container, {width:props.width,paddingHorizontal:props.padding} ]}>
                <View style={styles.imgContainer}>
                    <Image
                        style={[styles.imgRecipe,{width:props.imgW}]}
                        source={{
                            uri: props.recipe.imagen,
                        }}
                    />
                </View>
                <Text style={styles.text}>{props.recipe.nombre}</Text>
        </View >
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 3,
        width: 120,
        height: 160,
        marginRight:10
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
