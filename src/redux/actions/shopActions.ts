import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import DataBase from '../../assets/database/entites.json';
import {Apartament} from '../../models';
import {apartamentTypes} from '../../types';

const TIME_DELAY = 3000;


interface CounterState {
    apartaments: Apartament[],
    error: string,
    loading: boolean,
    disabled: boolean,
  }

const initialState = {
  apartaments: [],
  error: '',
  loading: false,
  disabled: false,
} as CounterState;

const findApartaments =
  createAsyncThunk( 'shop/findApartaments',
      async (filter?: apartamentTypes.Filter): Promise<Apartament[]> => {
        const apartamentsData = DataBase.response;
        const apartaments =
          apartamentsData.map((item) => Apartament.getApartamentsByApi(item));
        return new Promise((res) => {
          setTimeout(() => {
            res(apartaments);
          }
          , TIME_DELAY);
        });
      });


const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    likeApartament(state, action) {
      state.apartaments = state.apartaments.map((item) => {
        if (item.id == action.payload) item.like = !item.like;
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findApartaments.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(findApartaments.fulfilled, (state, action) => {
      state.apartaments = action.payload;
      state.loading = false;
    });
    builder.addCase(findApartaments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Упс...что-то пошло не так';
    });
  },
});

export const shopReducer = shopSlice.reducer;
export const {likeApartament} = shopSlice.actions;
export {findApartaments};

