import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  // cardData:{
  //              id:-1 ,
  //              imagePath:'',
  //              description:'',
  //              price:0,
  //              quantity:0
  //            },
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
// state.cartArr.push(newItem)
// console.log("initial stuff",state.cardData.id === newItem.id)
// state.cardData.id === newItem.id ? console.log(true) : console.log(false)

state.cartArr.unshift(newItem)



// console.log(state.cartArr[0].id.includes(newItem) ? 'yes it exist ' : 'no it doesnt')

// console.log(state.cartArr.length > 0 && state.cartArr.id === newItem.id ? state.quantity + 1 : "do nothing")

const cartCount = state.cartArr.length

state.count = cartCount

// console.log(state.cartArr.map((item) => item.id).includes(newItem.id) ? true : false )

// const overalltry = state.minicartArr.map((item)=>item.length > 0 && item.id.includes(newItem.id) ? { ...item, "quantity":1} : state.minicartArr.unshift(newItem) )

// state.cartArr.unshift(newItem);

  const existingItem = state.minicartArr.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity =  existingItem.quantity + 1;
  }

   else {
    state.minicartArr.unshift({ ...newItem, quantity: 1 });
  }


// console.log(overalltry)
// state.minicartArr.unshift(newItem)

// const minicart = state.minicartArr

// console.log("minicart",minicart.map((item)=> item.id === minicart[0].id ))
// // console.log("minicart",minicart.map((item)=> item.id === minicart[0].id ? true : false))

// const newcart = minicart.map((item) => item.id);

// console.log("newcart", newcart.map((item) => {
//   return { ...item, "age": 22 };  // Explicit return inside curly braces
// }));
// minicart.map((item)=> item)

// minicart.map((item)=> item.id===)

//  state.minicart.map((item)=> item.id === minicart[0].id )


 } ,

clearCart(state , action){

  const cartItem = action.payload

// state.minicartArr.filter((item)=> item.id != cartItem.id )

// const existingCartItem = state.minicartArr.find(item => item.id);


state.minicartArr = state.minicartArr.filter(obj => obj.id !== cartItem.id );

//  console.log(state.minicartArr.length)
 console.log(cartItem.id)

},

} })

export const { toggleStatus , addItems , clearCart} = cartSlice.actions;
export default cartSlice.reducer;