/* eslint-disable react/react-in-jsx-scope */
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import SearchBar from './components/homeScreen/SearchBar';
import HorizontalList from './components/homeScreen/horizontalList';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
        <SearchBar placeholder="What do you want to eat?"/>
        <Text style={styles.texto}>TRENDING</Text>
        <HorizontalList height={180} width={100} size={100} type={'TRENDING'} padding="11%"/>
        <Text style={styles.texto}>RECENT</Text>
        <HorizontalList height={300} width={130} size={130} type={'RECENT'} padding="11%"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize:20,
    color:'#AA1C65',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  screenContainer: {
    backgroundColor: '#333333',
    flex: 1,
  },
});

export default App;
