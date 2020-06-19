const appReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_SCREEN':
			return {
				...state,
				displayMode: action.value,
			};
	}
};

export default appReducer;
