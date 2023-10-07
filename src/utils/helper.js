export const isLogin = () => {
	let userAccessToken = localStorage.getItem('accessToken');
	if (userAccessToken) return true;
	return false;
};

export const getRefreshToken = () => {
	return localStorage.getItem('refreshToken') || null;
};

export const getUserToken = () => {
	return localStorage.getItem('accessToken') || null;
};

export const getUserName = () => {
	return localStorage.getItem('username') || null;
};
