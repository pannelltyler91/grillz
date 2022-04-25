import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';
import {selectBottomTeeth,selectDesign,selectMetal,selectTopTeeth,setCustomer,checkout} from '../features/order'

export default function Order() {
  const price = useSelector((state) => state.pricing.total)
  const metalList = useSelector((state) => state.pricing.metals)
  const metal = useSelector((state) => state.order.metal)
  const design = useSelector((state) => state.order.design)
  const topCount = useSelector((state) => state.order.topCount)
  const bottomCount = useSelector((state) => state.order.bottomCount)
  const customerInfo = useSelector((state) => state.order.customerInfo)

  const dispatch = useDispatch();
  return (
    
    <View style={styles.container}>
      <View ><Text style={styles.header}>Homeboy</Text></View>
      <View style={styles.metals} name='metals'>

        {metalList.map((metal) => {
            return(
                <button key={metal} onTouchStart={() => {dispatch(selectMetal({metal:{metal}}))}}><Text>{metal}</Text></button>
            )
        })}

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
        <Text style={styles.titles}>Price:${price}</Text>
      </View>
      <View style={styles.textholder}>
        <Text style={styles.titles}>Name:<TextInput style={styles.inputs}/></Text>
        <Text style={styles.titles}>Phone:<TextInput style={styles.inputs}/></Text>
      </View>
      <button><Text>Checkout</Text></button>
    </View>
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

