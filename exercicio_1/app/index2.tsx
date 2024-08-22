import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView} from "react-native";

export default function Index2(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Deu certo
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 60,
        fontWeight: 800
    }
})

