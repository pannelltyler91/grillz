import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  selectBottomTeeth,
  selectDesign,
  selectKarat,
  selectTopTeeth,
  checkout,
  selectMetal,
} from "../features/order";

export default function Order() {
  const price = useSelector((state) => state.order.total);
  const karatList = useSelector((state) => state.pricing.karats);
  const topTeeth = useSelector((state) => state.pricing.topTeeth);
  const bottomTeeth = useSelector((state) => state.pricing.bottomTeeth);
  const designList = useSelector((state) => state.pricing.designs);
  const metalList = useSelector((state) => state.pricing.metals);
  const dispatch = useDispatch();
  const [phone,setPhone] = useState('');
  const [name,setName] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Homeboy</Text>
      </View>
      <View style={styles.metals} name="karats">
        {karatList.map((karat) => {
          return (
            <button
              key={karat}
              onTouchStart={() => {
                dispatch(selectKarat( {karat:{ karat } }));
              }}
            >
              <Text>{karat}</Text>
            </button>
          );
        })}
      </View>
      <View name="teeth">
        <View name="top" style={styles.rows}>
          {topTeeth.map((tooth) => {
            return (
              <button
                key={tooth}
                onTouchStart={() => {
                  dispatch(selectTopTeeth({tooth:{tooth}}))
                }}
                style={{ width: "25px", height: "25px" }}
              ></button>
            );
          })}
        </View>
        <View name="bottom" style={styles.rows}>
          {bottomTeeth.map((tooth) => {
            return (
              <button
                key={tooth}
                onTouchStart={() => {
                  dispatch(selectBottomTeeth({tooth:{tooth}}))
                }}
                style={{ width: "25px", height: "25px" }}
              ></button>
            );
          })}
        </View>
      </View>
      <View style={styles.textholder}>
          {metalList.map((metal) =>{
              return(
                  <button onTouchStart={() => dispatch(selectMetal({metal:{metal}}))} key={metal}>{metal}</button>
              )
          })}
      </View>
      <View style={styles.designs} name="designs">
            <View ><Text style={styles.titles}>Pick a Design</Text></View>
        {designList.map((design) => {
          return <button onTouchStart={() => {dispatch(selectDesign({design:{design}}))}} key={design}>{design}</button>;
        })}
      </View>
      <View style={styles.textholder}>
        <Text style={styles.titles}>Price:${price === 0? '' : price}</Text>
      </View>
      <View style={styles.textholder}>
        <Text style={styles.titles}>
          Name:
          <TextInput onChange={(e)=>{setName(e.target.value); console.log(name)}}  style={styles.inputs} />
        </Text>
        <Text style={styles.titles}>
          Phone:
          <TextInput onChange={(e)=>{setPhone(e.target.value); console.log(phone)}}  style={styles.inputs} />
        </Text>
      </View>
      <button>
        <Text>Checkout</Text>
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#415a77",
    alignItems: "center",
    justifyContent: "center",
  },
  rows: {
    display: "inline-block",
  },
  metals: {
    marginBottom: "20px",
    display: "inline-block",
  },
  header: {
    color: "#e0e1dd",
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  designs: {
    marginTop: "20px",
    display: "inline-block",
    border:'solid #e0e1dd 5px ',
    padding:'10px'
  },
  titles: {
    color: "#e0e1dd",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign:'center',
    marginTop:'10px',
    marginBottom:'10px'

  },
  textholder: {
    marginTop: "20px",
  },
  inputs: {
    border: "2px solid gray",
    backgroundColor: "white",
    borderRadius: "5%",
    margin: "2px",
  },
  checkoutButton: {
    marginTop: "20px",
  },
});
