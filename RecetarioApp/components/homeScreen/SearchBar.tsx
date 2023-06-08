import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        placeholderTextColor='white'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#343435',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: 'white',
  },
});

export default SearchBar;
