import * as constants from './registerActionsConstants'

export const onNameChange = (text)=>{
    return {
        type: constants.REGISTER_NAME_CHANGE,
        payload: text
    }
  }

  export const onEmailChange = (text)=>{
    return {
        type: constants.REGISTER_EMAIL_CHANGE,
        payload: text
    }
  }

  export const onPasswordChange = (text)=>{
    return {
        type: constants.REGISTER_PASSWORD_CHANGE,
        payload: text
    }
  }

  export const onRegisterSumbit = (name,email,password) => (dispatch) => {
        fetch('https://immense-cove-34629.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
              name: name,
              email: email,
              password: password
            })
          }).then(response => response.json()).then(user => {
              if(user.id){
              console.log(user);
              dispatch({type:'LOAD_USER', payload: user})
              dispatch({type:'ROUTE_CHANGE',payload:'home'});
            }
          })
  }