import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer';

const AppContext = createContext(null);

/**
 * This context is probably overkill for this project...
 *
 * It was originally going to have more, but after realising
 * the limitations of the API that was required... I simply
 * did not implement them.
 *
 * This could be replaced with a 'useState' inside the App.js file.
 */

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
