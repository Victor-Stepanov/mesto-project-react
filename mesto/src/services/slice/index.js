import { combineReducers } from 'redux';
import cardsSlice from './cardsSlice';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
	cardsData: cardsSlice,
	userData:userSlice

})