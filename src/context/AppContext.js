import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';

const AppContext = createContext(null);

export const initialState = {
	movies: [],
	watchList: [],
	likes: [],
	dislikes: [],
	isLoading: false,
	isLoaded: true,
	isSearchMode: false,
	isWatchListMode: false,
};

const AppProvider = (props) => {
	const [appState, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider value={{ appState, dispatch }}>
			{props.children}
		</AppContext.Provider>
	);
};

export { AppContext as default, AppProvider };
