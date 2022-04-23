import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';

export default function App() {
  const [metal,setMetal] = useState('')
  const [topCount,setTopCount] = useState(0)
  const [bottomCount,setBottomCount] = useState(0)
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <View ><Text style={styles.header}>Homeboy</Text></View>
      <View style={styles.metals} name='metals'>
        <button><Text>Silver</Text></button>
        <button><Text>8k Yellow Gold</Text></button>
        <button><Text>10k Yellow Gold</Text></button>
        <button><Text>14k Yellow Gold</Text></button>
        <button><Text>18k Yellow Gold</Text></button>
        <button><Text>22k Yellow Gold</Text></button>
        <button><Text>White Gold</Text></button>
      </View>
      <View name='teeth'>
        <View name='top' style={styles.rows}>
          
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
        </View>
        <View name='bottom' style={styles.rows}>
          <button onTouchStart={() => {console.log('tooth clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
          <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
        </View>
      </View>
      <View style={styles.designs} name='designs'>
        <button>Open Face</button>
        <button>Diamond Cut</button>
        <button>Diamond Dust</button>
      </View>
      <View style={styles.textholder}>
        <Text style={styles.titles}>Price:$</Text>
      </View>
      <View style={styles.textholder}>
        <Text style={styles.titles}>Name:<TextInput style={styles.inputs}/></Text>
        <Text style={styles.titles}>Phone:<TextInput style={styles.inputs}/></Text>
      </View>
      <button><Text>Checkout</Text></button>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#415a77',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rows:{
    display:'inline-block',
  },
  metals:{
    marginBottom:'20px',
    display:'inline-block',

  },
  header:{
    color:'#e0e1dd',
    fontSize:'50px',
    fontWeight:'bold',
    marginBottom:'20px',
  },
  designs:{
    marginTop:'20px',
    display:'inline-block',
  },
  titles:{
    color:'#e0e1dd',
    fontSize:'15px',
    fontWeight:'bold',

  },
  textholder:{
    marginTop:'20px',
  },
  inputs:{
    border:'2px solid gray',
    backgroundColor:'white',
    borderRadius:'5%',
    margin:'2px'
  },
  checkoutButton:{
    marginTop:'20px'
  }

});
