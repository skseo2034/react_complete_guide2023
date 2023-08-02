import { configureStore } from '@reduxjs/toolkit';
import envSlice from './env-slice';

const store = configureStore({
	reducer: { env: envSlice.reducer },
});

export default store;
