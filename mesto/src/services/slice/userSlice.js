import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		profile: [],
		isLoading: false,
		hasError:false
	}
})

export default userSlice.reducer;