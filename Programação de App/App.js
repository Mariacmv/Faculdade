import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';
import Button from './src/components/Button';
import { FlatList } from './react-native/types_generated/index';
import { useState } from './react';

export default function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('');

  function handleAddItem(){
    setList([...list, inputValue])
    setInputValue(''); //limpar o input 
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('./src/assets/logo.png')} />
      </View>

      <View style={styles.inputContainer}>
        <Input />
        <Button />
      </View>

      <View style={styles.itemsCount}>
        <View style={styles.itemCount}>
          <Text style={styles.createdText}>Criadas</Text>

          <View style={styles.badge}>
            <Text style={styles.itemsNumber}>0</Text>
          </View>
        </View>

        <View style={styles.itemCount}>
          <Text style={styles.concludedText}>Concluídas</Text>

          <View style={styles.badge}>
            <Text style={styles.itemsNumber}>0</Text>
          </View>
        </View>
      </View>

    <FlatList
      data={[1,2,'teste']}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => (
        <Item titulo={item} />
      )}
      style={{
        backgroundColor: 'white'
      }}
      contentContainerStyle={{
        padding: 16,
        gap: 8,
      }}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    backgroundColor: '#181818',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: -44,
  },
  itemsCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 20,
  },
  itemCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdText: {
    fontSize: 16,
    color: '#00cbce',
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  itemsNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  concludedText: {
    fontSize: 16,
    color: '#00a3ed',
    fontWeight: 'bold',
  },
});
