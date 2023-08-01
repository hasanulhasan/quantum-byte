const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  processor: [],
  monitor: [],
  motherboard: [],
  ram: [],
  ssd: [],
  psu: []
}

const productChoiceSlice = createSlice({
  name: 'productChoice',
  initialState,
  reducers: {
    addProduct: (state, action)=> {

      if(action.payload.category === 'Processor'){
        state.processor = action.payload
      }
      else if(action.payload.category === 'Monitor'){
        state.monitor = action.payload
      }
      else if(action.payload.category === 'Motherboard'){
        state.motherboard = action.payload
      }
      else if(action.payload.category === 'RAM'){
        state.ram = action.payload
      }
      else if(action.payload.category === 'SSD'){
        state.ssd = action.payload
      }
      else{
        state.psu = action.payload
      }
    }
  }
})

export default productChoiceSlice.reducer;
export const {addProduct} = productChoiceSlice.actions