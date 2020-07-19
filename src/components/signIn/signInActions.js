import * as constants from './signinActionsConstants';

export const onEmailChange = (text)=>{
    return {
        type: constants.SIGNIN_EMAIL_CHANGE,
        payload: text
    }
  }

  export const onPasswordChange = (text)=>{
    return {
        type: constants.SIGNIN_PASSWORD_CHANGE,
        payload: text
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
            }).then(response => response.json()).then(data => {
              if(data.id){
                console.log(data);
                dispatch({type:'LOAD_USER', payload: data})
                dispatch({type:'ROUTE_CHANGE',payload:'home'});
              }
            })
            
          } 