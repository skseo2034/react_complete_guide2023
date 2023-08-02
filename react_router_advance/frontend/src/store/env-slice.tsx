import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_PORT = process.env.REACT_APP_PORT;
interface initialSateType {
	apiUrl: string;
	apiPort: string;
}

const envSlice = createSlice<initialSateType, SliceCaseReducers<any>, string>({
	name: 'env',
	initialState: { apiUrl: process.env.REACT_APP_API_URL as string, apiPort: process.env.REACT_APP_PORT as string },
	reducers: {},
});

export default envSlice;
