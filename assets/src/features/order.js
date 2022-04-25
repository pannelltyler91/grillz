import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {total:0, order:[] },
  reducers: {
    selectKarat: (state, action) => {
      let choice = action.payload
      console.log(state.order)

    },
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
    checkout:(state,action) =>{
        let order = action.payload
        console.log(order)
    },

  },
});
export const { selectBottomTeeth,selectDesign,selectKarat,selectTopTeeth,checkout,selectMetal } = orderSlice.actions;
export default orderSlice.reducer;