import React from "react";
import { StyleSheet, Button, View, Text, Alert, Dimensions } from "react-native";

// Obtém a largura da tela para a centralização
const BtnCadastro = () => {
    return(
        <View style={styles.BtnCadastro}>
            <Button
                title="cadastrar"
                color="#f194ff"
                onPress={()=> Alert.alert('Nome Cadastrado')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    BtnCadastro:{

    }
})

export default BtnCadastro;