import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={30} color="#fff" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
      <Icon  name="microphone" size={30} color="#fff"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'90%',
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 5,
    margin:20,
    backgroundColor: '#45474D',
  },
  input: {
    height: 40,
    fontSize: 18,
    color: 'white',
    marginTop:5,
    marginLeft:3,
    marginRight:90,
  },
});

export default SearchBar;
