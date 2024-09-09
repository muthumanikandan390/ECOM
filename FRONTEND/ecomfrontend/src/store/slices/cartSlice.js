import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  cartArr:[],
  count:0,
  quantity:0,
  minicartArr:[],
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

console.log('newItem',newItem)

state.cartArr.unshift(newItem)



const cartCount = state.cartArr.length

state.count = cartCount

  const existingItem = state.minicartArr.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity =  existingItem.quantity + 1;
  }

   else {
    state.minicartArr.unshift({ ...newItem, quantity: 1 });
  }


 } ,

clearCart(state , action){

const cartItem = action.payload

state.minicartArr = state.minicartArr.filter(obj => obj.id !== cartItem.id );

state.cartArr = state.cartArr.filter(obj => obj.id !== cartItem.id );

state.count = state.cartArr.length




console.log(cartItem.id)

},

} })

export const { toggleStatus , addItems , clearCart} = cartSlice.actions;
export default cartSlice.reducer;