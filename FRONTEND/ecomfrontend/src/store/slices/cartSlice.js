import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  cardData:{
               id:-1 ,
               imagePath:'',
               description:'',
               price:0
             },
  cartArr:[],
  count:0,
  quantity:0,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{

  toggleStatus(state) {

    state.status = !state.status;

                      },

addItems(state , action) {

const newItem = action.payload

// state.cartArr.push(newItem)

state.cartArr.unshift(newItem)

const cartCount = state.cartArr.length

state.count = cartCount

 } ,

} })

export const { toggleStatus , addItems } = cartSlice.actions;
export default cartSlice.reducer;