import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
	name: 'cards',
	initialState: {
		cards: [],
		isLoading: false,
		hasError:false
	},
	reducers: {
		getRequest(state) {
			state.isLoading = true;
		 },
		requestSuccessed(state, action) {
			state.isLoading = false;
			state.cards = action.payload;
			state.hasError = false;
		},
		requestFailed(state) {
			state.hasError = true;
			state.isLoading = false;
		}
		
	}
})

export const { getRequest, requestSuccessed, requestFailed } = cardsSlice.actions;
export default cardsSlice.reducer;