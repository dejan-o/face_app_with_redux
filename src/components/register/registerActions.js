import * as constants from './registerActionsConstants';

export const onNameChange = (payload)=>{
	return {
		type: constants.REGISTER_NAME_CHANGE,
		payload
	};
};

export const onEmailChange = (payload)=>{
	return {
		type: constants.REGISTER_EMAIL_CHANGE,
		payload
	};
};

export const onPasswordChange = (payload)=>{
	return {
		type: constants.REGISTER_PASSWORD_CHANGE,
		payload
	};
};

export const onRegisterSumbit = (name, email, password) => (dispatch) => {
	fetch('https://immense-cove-34629.herokuapp.com/register', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: name,
			email: email,
			password: password
		})
	}).then(response => response.json()).then(payload => {
		if(payload.id){
			dispatch({type: 'LOAD_USER', payload});
			dispatch({type: 'ROUTE_CHANGE', payload: 'home'});
		}
	});
};