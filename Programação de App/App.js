import { StatusBar } from 'expo-status-bar';
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  function fecharTeclado() {
    Keyboard.dismiss()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Perfil</Text>

      <View style={styles.main}>
        <TouchableOpacity activeOpacity={0.6} //torna clicável e ajusta a transparência do clique
        style={styles.btnAvatar}> 
          <Image
            source={{ uri: 'https://static.wikia.nocookie.net/duskwoodmystery/images/c/ca/FTX6P9vW_400x400.jpg/revision/latest/thumbnail/width/360/height/360?cb=20250720171506' }}
            style={styles.avatar}
          />
          <Text style={styles.txtAlterarFoto}>Alterar foto</Text>
        </TouchableOpacity>
        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Alterar senha</Text>
          <TextInput 
            style={styles.input}
            placeholder='Nome'
            placeholderTextColor='#7C7C8A'
          /> //caixa de input. Fecha nele mesmo, mesma coisa com o image
          <TextInput 
            style={[styles.input, styles.inputDisable]}
            defaultValue='maria@gmail.com'
            editable={false}
          /> //shift + alt + seta pra baixo copia e cola na linha de baixo
        </View>

        <View style={styles.inputsContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Nome'
            placeholderTextColor='#7C7C8A'
            secureTextEntry
            selectionColor='#00B37E'
          /> 
        </View>

        <TouchableOpacity>
          <Text>Atualizar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginVertical: 24, // cima/baixo
  },
  main: {
    alignItems: 'center',
    backgroundColor: '#121214',
    flex: 1, // ocupa todo espaço disponivel em tela
    width: '100%',
    paddingVertical: 24, // espaço interno cima/baixo
    paddingHorizontal: 40,
  },
  btnAvatar: {
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: 148,
    borderWidth: 2,
    borderColor: '#323238',
  },
  txtAlterarFoto: {
    color: '#00B37E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#3939C',
    height: 56,
    width: '100%',
    borderRadius: 8, // arredonda bordas
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16, // espaço interno na lateral esquerda
  },
  inputDisable: {
    backgroundColor: '#202024',
    color: '#666',
  },
  inputsContainer: {

  },
});
