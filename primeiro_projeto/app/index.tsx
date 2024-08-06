import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFq5cjtembkxcY09FsjpzpA2BQ83O5aBQ",
  authDomain: "meuprimeirofirebase-dbac5.firebaseapp.com",
  projectId: "meuprimeirofirebase-dbac5",
  storageBucket: "meuprimeirofirebase-dbac5.appspot.com",
  messagingSenderId: "94470952703",
  appId: "1:94470952703:web:98c26c0cd0ee9b6608deca"
};

firebase.initializeApp(firebaseConfig);

import { Text, View, FlatList } from "react-native";
import { useEffect, useState } from 'react';

export default function   app() {
  const [nomes, setNomes] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();

  }, []);
  return (
     <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
      data={nomes}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <View>
          <Text>{item.Nome}{item.sobrenome}</Text>
        </View>
      )}
      />
     </View>
  );
}
