import React, { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { isLogin, getRefreshToken } from '../utils/helper';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
	const { children } = props;
	let loggedIn = isLogin();

	if (!loggedIn) {
		return <Navigate to="/login"></Navigate>;
	}
	return children;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
