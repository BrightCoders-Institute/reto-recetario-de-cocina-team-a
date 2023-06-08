/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RecipeItem from './components/homeScreen/RecipeItem';
import SearchBar from './components/homeScreen/SearchBar';
import HorizontalList from './components/homeScreen/horizontalList';



type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
        <SearchBar placeholder='What do you want to eat?'/> 
        <Text>TRENDING</Text>
        <HorizontalList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#333333',
    flex: 1
  }
});

export default App;
