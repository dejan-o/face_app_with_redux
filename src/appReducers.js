import * as constants from './appActionsConstants';

const initialAppState = {
    input:'',
    imageUrl:'',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id:'',
      name:'',
      email:'',
      entries:'',
      date: ''
    }
}

export const appReducer = (state = initialAppState, action={})=> {
    switch(action.type){
        case constants.LOAD_USER:
            return {...state, user: {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                entries: action.payload.entries,
                date: action.payload.date
            },
                isSignedIn: true
        }
        case constants.ROUTE_CHANGE:
            return {...state,route: action.payload}
        case constants.INPUT_URL_IMG_CHANGE:
            return {...state,input: action.payload}
        case constants.SAVE_BOX_POINTS:
            return {...state,box: action.payload}
        case constants.INPUT_URL_IMG_SUBMIT:
            return {...state,imageUrl: action.payload}
        case constants.RESET:
            return initialAppState
        default:
            return state
    }
}

