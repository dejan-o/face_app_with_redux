import * as constants from './signinActionsConstants';


const initialState = {
    signInEmail:'',
    signInPassword:''
}


export const setSignInField = (state = initialState, action={})=> {
    switch(action.type){
        case constants.SIGNIN_EMAIL_CHANGE:
            return Object.assign({},state,{signInEmail: action.payload})
        case constants.SIGNIN_PASSWORD_CHANGE:
            return Object.assign({},state,{signInPassword: action.payload})
        case 'RESET':
            return initialState
        default:
            return state;
    }
}


