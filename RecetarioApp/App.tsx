import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //Importacion de Iconos
import SearchBar from './components/homeScreen/SearchBar';
import HorizontalList from './components/homeScreen/horizontalList';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
        <SearchBar placeholder='What do you want to eat?'/>
        <Text style={styles.texto}>TRENDING</Text>
        <HorizontalList height={180} width={100} size={100} padding='11%'/>
        <Text style={styles.texto}>RECENT</Text>
        <HorizontalList height={250} width={150} size={180} padding='13%'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize:20,
    color:'#AA1C65',
    marginTop: 15,
    marginBottom: 15,
  },
  screenContainer: {
    backgroundColor: '#333333',
    flex: 1,
  },
});

export default App;
