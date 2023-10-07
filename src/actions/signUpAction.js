import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_UP_RESET = 'SIGN_UP_RESET';

export const signUp = (params) => {
	return {
		type: SIGN_UP,
		params,
	};
};

export const signUpSuccess = (response) => {
	return {
		type: SIGN_UP_SUCCESS,
		response,
	};
};

export const signUpFail = (response) => {
	return {
		type: SIGN_UP_FAIL,
		response,
	};
};

export const signUpReset = () => {
	return {
		type: SIGN_UP_RESET,
	};
};

export const signUpApi = (data) => {
	return (dispatch) => {
		dispatch(signUp());
		axios
			.post(`/sign-up`, data)
			.then((response) => {
				const signUpData = response.data;
				dispatch(signUpSuccess(signUpData));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(signUpFail(errorMsg));
			});
	};
};
