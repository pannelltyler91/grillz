import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: { metal:'empty', topCount:0,bottomCount:0, design:'empty',customer:{} },
  reducers: {
    selectMetal: (state, action) => {
      let choice = action.payload
      console.log(choice)
    },
    selectBottomTeeth: (state, action) => {
        let choice = action.payload
        console.log(choice)
    },  
    selectTopTeeth: (state, action) => {
        let choice = action.payload
        console.log(choice)
    },
    selectDesign: (state, action) => {
        let choice = action.payload
        console.log(choice)
    },
    setCustomer:(state,action) =>{
        let customerInfo = action.payload
        console.log(customerInfo)
    },
    checkout:(state,action) =>{
        let order = action.payload
        console.log(order)
    }
  },
});
export const { selectBottomTeeth,selectDesign,selectMetal,selectTopTeeth,setCustomer,checkout } = orderSlice.actions;
export default orderSlice.reducer;