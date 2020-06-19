/**
 * This is used to change the values of the context...
 *
 * If you do not use one of the provided cases... it will cause an error.
 * @param {STRING} state
 * @param {OBJECT} action
 */

const appReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_SCREEN':
			return {
				...state,
				displayMode: action.value,
			};
		default:
			throw new Error();
	}
};

export default appReducer;
