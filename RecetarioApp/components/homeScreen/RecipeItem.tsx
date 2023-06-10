import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Modal1 from './Modal';
type props = {
    title: string,
    width: number,
    imgW: number,
    padding:string,
    img:string,
};
export default function RecipeItem(props: props): JSX.Element {
    const [visible, setVisible] = useState(false);
    return (
        <Pressable
        onPress={() => {
            setVisible(!visible);
        }}>
            <Modal1 isVisible={visible}
                    />
            <View style={[styles.container, {width:props.width,paddingHorizontal:props.padding} ]}>
                <View style={styles.imgContainer}>
                    <Image
                        style={[styles.imgRecipe,{width:props.imgW}]}
                        source={{
                            uri: props.img,
                        }}
                    />
                </View>
                <Text style={styles.text}>{props.title}</Text>
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
