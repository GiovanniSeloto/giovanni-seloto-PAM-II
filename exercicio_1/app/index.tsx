import React from "react";
import { Text, View, Alert, Button, TextInput, StyleSheet, 
  SafeAreaView, Dimensions } from "react-native";



export default function Index() {
  
  const [text, onChangeText] = React.useState('')

  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de nome</Text>
      </View>

      <View>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Digite seu nome"
            keyboardType="default"
            />
      </View >
      
        <View style={styles.container}>
        <Button
            title="cadastrar"
            color="#49708a"
            onPress={()=> Alert.alert('Nome Cadastrado')}
            />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    margin: 10,
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Arial', 
    fontSize: 30,
  },
  input:{
    height: 40, // Define a altura dentro do TextInput
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, // Adiciona padding horizontal dentro do TextInput
  },
})
