import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import Index2 from './index2';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name ="Index" component={Index}/>
          <Stack.Screen name ="Index2" component={Index2}/>
        </Stack.Navigator>
    );
  }