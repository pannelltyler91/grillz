import { createSlice } from "@reduxjs/toolkit";

export const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
      silver:[{row:'top', pieces:1,price:70},{row:'top', pieces:2,price:100},{row:'top', pieces:3,price:140},{row:'top', pieces:4,price:170},{row:'top', pieces:6, price:200},{row:'top', pieces:8,price:280},{row:'top', pieces:10,price:380},{row:'top', pieces:12,price:500},{row:'top', pieces:14,price:700}], 
      '8kt':
        [
            {row:'top', pieces:1,type:'yellow',price:90},{row:'top',pieces:2,type:'yellow',price:150},{row:'top',pieces:3,type:'yellow',price:190},{row:'top',pieces:4,type:'yellow',price:240},{row:'top',pieces:6,type:'yellow',price:280},{row:'top',pieces:8,type:'yellow',price:440},{row:'top',pieces:10,type:'yellow',price:580},{row:'top',pieces:12,type:'yellow',price:800},{row:'top',pieces:14,type:'yellow',price:1100},
            {row:'top', pieces:1,type:'white',price:110},{row:'top',pieces:2,type:'white',price:170},{row:'top',pieces:3,type:'white',price:210},{row:'top',pieces:4,type:'white',price:260},{row:'top',pieces:6,type:'white',price:320},{row:'top',pieces:8,type:'white',price:480},{row:'top',pieces:10,type:'white',price:620},{row:'top',pieces:12,type:'white',price:840},{row:'top',pieces:14,type:'white',price:1140},
            {row:'bottom', pieces:1,type:'yellow',price:80},{row:'bottom',pieces:2,type:'yellow',price:130},{row:'bottom',pieces:3,type:'yellow',price:150},{row:'bottom',pieces:4,type:'yellow',price:200},{row:'bottom',pieces:6,type:'yellow',price:240},{row:'bottom',pieces:8,type:'yellow',price:380},{row:'bottom',pieces:10,type:'yellow',price:480},{row:'bottom',pieces:12,type:'yellow',price:700},{row:'bottom',pieces:14,type:'yellow',price:900},
            {row:'bottom', pieces:1,type:'white',price:100},{row:'bottom',pieces:2,type:'white',price:150},{row:'bottom',pieces:3,type:'white',price:170},{row:'bottom',pieces:4,type:'white',price:220},{row:'bottom',pieces:6,type:'white',price:280},{row:'bottom',pieces:8,type:'white',price:420},{row:'bottom',pieces:10,type:'white',price:520},{row:'bottom',pieces:12,type:'white',price:740},{row:'bottom',pieces:14,type:'white',price:940}
        
        
        ],
      '10kt':
        [
            {row:'top', pieces:1,type:'yellow',price:130},{row:'top',pieces:2,type:'yellow',price:200},{row:'top',pieces:3,type:'yellow',price:270},{row:'top',pieces:4,type:'yellow',price:380},{row:'top',pieces:6,type:'yellow',price:460},{row:'top',pieces:8,type:'yellow',price:660},{row:'top',pieces:10,type:'yellow',price:860},{row:'top',pieces:12,type:'yellow',price:1200},{row:'top',pieces:14,type:'yellow',price:1600},
            {row:'top', pieces:1,type:'white',price:150},{row:'top',pieces:2,type:'white',price:220},{row:'top',pieces:3,type:'white',price:290},{row:'top',pieces:4,type:'white',price:400},{row:'top',pieces:6,type:'white',price:500},{row:'top',pieces:8,type:'white',price:700},{row:'top',pieces:10,type:'white',price:900},{row:'top',pieces:12,type:'white',price:1240},{row:'top',pieces:14,type:'white',price:1640},
            {row:'bottom', pieces:1,type:'yellow',price:110},{row:'bottom',pieces:2,type:'yellow',price:190},{row:'bottom',pieces:3,type:'yellow',price:220},{row:'bottom',pieces:4,type:'yellow',price:320},{row:'bottom',pieces:6,type:'yellow',price:420},{row:'bottom',pieces:8,type:'yellow',price:580},{row:'bottom',pieces:10,type:'yellow',price:760},{row:'bottom',pieces:12,type:'yellow',price:1000},{row:'bottom',pieces:14,type:'yellow',price:1300},
            {row:'bottom', pieces:1,type:'white',price:130},{row:'bottom',pieces:2,type:'white',price:210},{row:'bottom',pieces:3,type:'white',price:240},{row:'bottom',pieces:4,type:'white',price:340},{row:'bottom',pieces:6,type:'white',price:460},{row:'bottom',pieces:8,type:'white',price:620},{row:'bottom',pieces:10,type:'white',price:800},{row:'bottom',pieces:12,type:'white',price:1040},{row:'bottom',pieces:14,type:'white',price:1340}
        ],
      '14kt':
        [
            {row:'top', pieces:1,type:'yellow',price:200},{row:'top',pieces:2,type:'yellow',price:350},{row:'top',pieces:3,type:'yellow',price:500},{row:'top',pieces:4,type:'yellow',price:650},{row:'top',pieces:6,type:'yellow',price:850},{row:'top',pieces:8,type:'yellow',price:1200},{row:'top',pieces:10,type:'yellow',price:1600},{row:'top',pieces:12,type:'yellow',price:1800},{row:'top',pieces:14,type:'yellow',price:2400},
            {row:'top', pieces:1,type:'white',price:220},{row:'top',pieces:2,type:'white',price:370},{row:'top',pieces:3,type:'white',price:520},{row:'top',pieces:4,type:'white',price:670},{row:'top',pieces:6,type:'white',price:890},{row:'top',pieces:8,type:'white',price:1240},{row:'top',pieces:10,type:'white',price:1640},{row:'top',pieces:12,type:'white',price:1840},{row:'top',pieces:14,type:'white',price:2440},
            {row:'bottom', pieces:1,type:'yellow',price:170},{row:'bottom',pieces:2,type:'yellow',price:300},{row:'bottom',pieces:3,type:'yellow',price:450},{row:'bottom',pieces:4,type:'yellow',price:550},{row:'bottom',pieces:6,type:'yellow',price:750},{row:'bottom',pieces:8,type:'yellow',price:1000},{row:'bottom',pieces:10,type:'yellow',price:1400},{row:'bottom',pieces:12,type:'yellow',price:1600},{row:'bottom',pieces:14,type:'yellow',price:2000},
            {row:'bottom', pieces:1,type:'white',price:190},{row:'bottom',pieces:2,type:'white',price:320},{row:'bottom',pieces:3,type:'white',price:470},{row:'bottom',pieces:4,type:'white',price:570},{row:'bottom',pieces:6,type:'white',price:790},{row:'bottom',pieces:8,type:'white',price:1040},{row:'bottom',pieces:10,type:'white',price:1440},{row:'bottom',pieces:12,type:'white',price:1640},{row:'bottom',pieces:14,type:'white',price:2040}
        ],
      '18kt':
        [
            {row:'top', pieces:1,type:'yellow',price:300},{row:'top',pieces:2,type:'yellow',price:500},{row:'top',pieces:3,type:'yellow',price:700},{row:'top',pieces:4,type:'yellow',price:900},{row:'top',pieces:6,type:'yellow',price:1200},{row:'top',pieces:8,type:'yellow',price:1600},{row:'top',pieces:10,type:'yellow',price:2100},{row:'top',pieces:12,type:'yellow',price:2600},{row:'top',pieces:14,type:'yellow',price:3400},
            {row:'top', pieces:1,type:'white',price:320},{row:'top',pieces:2,type:'white',price:520},{row:'top',pieces:3,type:'white',price:720},{row:'top',pieces:4,type:'white',price:920},{row:'top',pieces:6,type:'white',price:1240},{row:'top',pieces:8,type:'white',price:1640},{row:'top',pieces:10,type:'white',price:2140},{row:'top',pieces:12,type:'white',price:2640},{row:'top',pieces:14,type:'white',price:3440},
            {row:'bottom', pieces:1,type:'yellow',price:270},{row:'bottom',pieces:2,type:'yellow',price:430},{row:'bottom',pieces:3,type:'yellow',price:600},{row:'bottom',pieces:4,type:'yellow',price:750},{row:'bottom',pieces:6,type:'yellow',price:950},{row:'bottom',pieces:8,type:'yellow',price:1400},{row:'bottom',pieces:10,type:'yellow',price:1900},{row:'bottom',pieces:12,type:'yellow',price:2400},{row:'bottom',pieces:14,type:'yellow',price:3000},
            {row:'bottom', pieces:1,type:'white',price:290},{row:'bottom',pieces:2,type:'white',price:450},{row:'bottom',pieces:3,type:'white',price:620},{row:'bottom',pieces:4,type:'white',price:770},{row:'bottom',pieces:6,type:'white',price:990},{row:'bottom',pieces:8,type:'white',price:1440},{row:'bottom',pieces:10,type:'white',price:1940},{row:'bottom',pieces:12,type:'white',price:2440},{row:'bottom',pieces:14,type:'white',price:3040}
        ],
      '22kt':
        [
            {row:'top', pieces:1,type:'yellow',price:450},{row:'top',pieces:2,type:'yellow',price:700},{row:'top',pieces:3,type:'yellow',price:1000},{row:'top',pieces:4,type:'yellow',price:1300},{row:'top',pieces:6,type:'yellow',price:2000},{row:'top',pieces:8,type:'yellow',price:2600},{row:'top',pieces:10,type:'yellow',price:3200},{row:'top',pieces:12,type:'yellow',price:3800},{row:'top',pieces:14,type:'yellow',price:4600},
            {row:'top', pieces:1,type:'white',price:470},{row:'top',pieces:2,type:'white',price:720},{row:'top',pieces:3,type:'white',price:1020},{row:'top',pieces:4,type:'white',price:1320},{row:'top',pieces:6,type:'white',price:2040},{row:'top',pieces:8,type:'white',price:2640},{row:'top',pieces:10,type:'white',price:3240},{row:'top',pieces:12,type:'white',price:3840},{row:'top',pieces:14,type:'white',price:4640},
            {row:'bottom', pieces:1,type:'yellow',price:400},{row:'bottom',pieces:2,type:'yellow',price:600},{row:'bottom',pieces:3,type:'yellow',price:900},{row:'bottom',pieces:4,type:'yellow',price:1200},{row:'bottom',pieces:6,type:'yellow',price:1800},{row:'bottom',pieces:8,type:'yellow',price:2400},{row:'bottom',pieces:10,type:'yellow',price:3000},{row:'bottom',pieces:12,type:'yellow',price:3600},{row:'bottom',pieces:14,type:'yellow',price:4400},
            {row:'bottom', pieces:1,type:'white',price:420},{row:'bottom',pieces:2,type:'white',price:620},{row:'bottom',pieces:3,type:'white',price:920},{row:'bottom',pieces:4,type:'white',price:1220},{row:'bottom',pieces:6,type:'white',price:1840},{row:'bottom',pieces:8,type:'white',price:2440},{row:'bottom',pieces:10,type:'white',price:3040},{row:'bottom',pieces:12,type:'white',price:3640},{row:'bottom',pieces:14,type:'white',price:4440}
        ],
        total:0,
        metals:['8kt','10kt','14kt','18kt','22kt','silver'],
        golds:['white','yellow'],
        designs:['diamond cut']
    },
  reducers: {
      calculatePrice: (state,action) =>{
        let order = action.payload
        console.log(order)
      }
  },
});
export const { calculatePrice } = pricingSlice.actions;
export default pricingSlice.reducer;