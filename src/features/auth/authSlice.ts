import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface UserState {
    login: boolean;
    user: {
      name: string | undefined;
      age: Number | undefined;
      email: string | undefined;
    }
    
}

const initialState: UserState = {
    login: false,
    user: {
      name: undefined,
      age: undefined,
      email: undefined,
    }
   
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logUser: (state,  action: PayloadAction<UserState>) => {
      state.login = action.payload.login;
      state.user = action.payload.user;
      
    },
    logoutUser: (state) => {
      state.login = false;
      
    },
  },
});

export const { logUser, logoutUser} = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLogin = (state: RootState) => state.auth.login;
export const selectUser = (state: RootState) => state.auth.user;



export default authSlice.reducer;
