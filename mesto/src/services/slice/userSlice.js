import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		profile: {},
		isLoading: false,
		hasError:false
	},
	reducers: {
		getRequest(state) {
			state.isLoading = true;
		 },
		requestSuccessed(state, action) {
			state.isLoading = false;
			state.profile = action.payload;
			state.hasError = false;
		},
		requestFailed(state) {
			state.hasError = true;
			state.isLoading = false;
		}
	}
})

export const { getRequest, requestSuccessed, requestFailed } = userSlice.actions;

export default userSlice.reducer;