import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{

  toggleStatus(state) {

    state.status = !state.status;

},


} })

export const { toggleStatus } = cartSlice.actions;
export default cartSlice.reducer;