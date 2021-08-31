import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {shopReducer} from './actions/shopActions';

const rootReducer = combineReducers({
  shop: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>


const store = configureStore({
  reducer: rootReducer,
});

export default store;
