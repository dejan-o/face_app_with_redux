import * as constants from './registerActionsConstants'


const initialState = {
    registerName:'',
    registerEmail:'',
    registerPassword:''
}


export const setRegisterField = (state = initialState, action={})=> {
    switch(action.type){
        case constants.REGISTER_NAME_CHANGE:
            return Object.assign({},state,{registerName: action.payload})
        case constants.REGISTER_EMAIL_CHANGE:
            return Object.assign({},state,{registerEmail: action.payload})
        case constants.REGISTER_PASSWORD_CHANGE:
            return Object.assign({},state,{registerPassword: action.payload})
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}


