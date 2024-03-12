import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 auth_check_loading:false,
 user_auth:false,
 data:{}
}

export const user_auth_slice = createSlice({
  name: 'user_auth',
  initialState,
  reducers: {
    set_user_auth: (state,actions) => {
      const {payload} = actions;
      state.user_auth = payload.auth;
      state.auth_check_loading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_user_auth } = user_auth_slice.actions;

export default user_auth_slice.reducer;