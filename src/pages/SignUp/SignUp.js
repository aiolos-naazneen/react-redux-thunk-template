import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signUp, signUpReset } from '../../actions/signUpAction';
// API Action

const SignUp = (props) => {
	const { signUp, signUpState, signUpReset } = props;

	useEffect(() => {
		if (signUpState.apiState === 'success') {
			props.history.push('/login');
		}
	}, [signUpState]);

	const handleSubmit = (e) => {
		e.preventDefault();
		signUp(e.target.elements.email.value, e.target.elements.password.value);
	};

	return <div>SignUp</div>;
};

const mapStateToProps = (state) => ({
	signUpState: state.signUp,
});

const mapDispatchToProps = (dispatch) => ({
	signUp: (params) => dispatch(() => signUp(params)),
	signUpReset: () => dispatch(signUpReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
