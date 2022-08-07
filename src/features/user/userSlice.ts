import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Login, User, UserState } from './types';
import { login as loginAPI, registration } from './userAPI';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loginAsync = createAsyncThunk(
  'user/fetchLogin',
  async ({ email, password }: Login) => {
    const response = await loginAPI({ email, password });

    if (!response.data.length) {
      throw new Error();
    }

    return response.data[0];
  }
);

export const registrationAsync = createAsyncThunk(
  'user/fetchRegistration',
  async ({ email, name, password }: User) => {
    const response = await registration({ email, name, password });
    console.log('reg', response);

    if (!Object.keys(response.data).length) {
      throw new Error();
    }

    return response.data;
  }
);

const initialState: UserState = {
  name: '',
  isAuth: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.name = '';
      state.isAuth = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(registrationAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(registrationAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { login, logout } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectIsLoading = (state: RootState) => state.user.isLoading;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default userSlice.reducer;
