import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import './App.sass';
import { Home, Search } from './screens';

function App() {
	const { appState, dispatch } = useContext(AppContext);
	const { displayMode } = appState;

	const getPage = () => {
		switch (displayMode) {
			case 1:
				return <Search />;
			case 0:
			default:
				return <Home />;
		}
	};

	return <>{getPage()}</>;
}

export default App;
