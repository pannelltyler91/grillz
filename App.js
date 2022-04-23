import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default function App() {
  const _handlePress = () => {
    console.log('clicked again')
  }
  return (
    <View style={styles.container}>
      <View ><Text style={styles.header}>Homeboy</Text></View>
      <View style={styles.metals} name='metals'>
        <button><Text>Silver</Text></button>
        <button><Text>8k Yellow Gold</Text></button>
        <button><Text>10k Yellow Gold</Text></button>
        <button><Text>14k Yellow Gold</Text></button>
        <button><Text>White Gold</Text></button>
      </View>
      <View name='teeth'>
        <View name='top' style={styles.rows}>
          <TouchableHighlight onPress={_handlePress} >
            <Button
            title='X'></Button>
          </TouchableHighlight>
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
        <Text style={styles.titles}>Name:</Text>
        <Text style={styles.titles}>Phone:</Text>
      </View>
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
  }

});
