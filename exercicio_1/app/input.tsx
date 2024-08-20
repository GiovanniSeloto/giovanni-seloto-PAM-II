import React from "react";
import {SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputExample = () =>{
    const [text, onChangeText] = React.useState('Useless Text');
    
    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Digite seu nome"
                keyboardType="default"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input:{

    }
})

export default TextInputExample;