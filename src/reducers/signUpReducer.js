import {
	SIGN_UP,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL,
	SIGN_UP_RESET,
} from '../actions/signUpAction';

const initialState = {
	apiState: '',
	message: '',
	data: null,
	error: '',
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				apiState: 'loading',
			};
		case SIGN_UP_SUCCESS:
			return {
				...state,
				apiState: 'success',
				data: action.response.data,
				message: action.response.message
					? action.response.message
					: 'success',
			};
		case SIGN_UP_FAIL:
			return {
				...state,
				apiState: 'error',
				error: action.response.errors,
				message: action.response.message
					? action.response.message
					: 'error',
			};
		case SIGN_UP_RESET:
			return initialState;
		default:
			return state;
	}
};

export default signUpReducer;
