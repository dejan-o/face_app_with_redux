import * as constants from './signinActionsConstants';

export const onEmailChange = (payload)=>{
    return {
        type: constants.SIGNIN_EMAIL_CHANGE,
        payload
    }
  }

  export const onPasswordChange = (payload)=>{
    return {
        type: constants.SIGNIN_PASSWORD_CHANGE,
        payload
    }
  }

  export const onSubmitSignIn = (email,password) => (dispatch) => {
        fetch('https://immense-cove-34629.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                email: email,
                password: password
              })
            }).then(response => response.json()).then(payload => {
              if(payload.id){
                console.log(payload);
                dispatch({type:'LOAD_USER', payload})
                dispatch({type:'ROUTE_CHANGE', payload:'home'});
              }
            })
            
          } 