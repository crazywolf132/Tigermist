import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';

const AppContext = createContext(null);

export const initialState = {
	displayMode: 0, // 0 = Watch List, 1 = Search Mode
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
