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
            return Object.assign({},state,{user: {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                entries: action.payload.entries,
                date: action.payload.date
            },
                isSignedIn: true
        })
        case constants.ROUTE_CHANGE:
            return Object.assign({},state,{route: action.payload})
        case constants.INPUT_URL_IMG_CHANGE:
            return Object.assign({},state,{input: action.payload})
        case constants.SAVE_BOX_POINTS:
            return Object.assign({},state,{box: action.payload})
        case constants.INPUT_URL_IMG_SUBMIT:
            return Object.assign({},state,{imageUrl: action.payload})
        case constants.RESET:
            return initialAppState
        default:
            return state
    }
}

