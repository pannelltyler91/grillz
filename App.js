import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {store} from '../grillz/assets/src/store'
import { useSelector, useDispatch} from 'react-redux'
import {Provider} from 'react-redux'
import Order from '../grillz/assets/src/components/Order'
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';

export default function App() {
  
  return (
    <Provider store={store}>
      <Order/>
    </Provider>
  );
}

