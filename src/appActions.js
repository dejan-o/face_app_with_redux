import * as constants from './appActionsConstants';

export const loadUser = (user)=>{
   return { 
    type: constants.LOAD_USER,
    payload: user
};
}

export const routeChange = (route)=> {
    return {
        type: constants.ROUTE_CHANGE,
        payload: route 
    }
}

export const inputChange = (url) => {
    return {
        type: constants.INPUT_URL_IMG_CHANGE,
        payload: url
    }
}

export const inputUrlSubmit = (url) => {
    return {
        type: constants.INPUT_URL_IMG_SUBMIT,
        payload: url
    }
}

export const displayFaceBox = (box) => {
    return {
        type: constants.SAVE_BOX_POINTS,
        payload: box 
    }
}

export const resetAppState = () => {
    return {
        type: constants.RESET
    }
}

//ASYNC action 

export const onImageSubmit = (inputUrl,userId,calculator) => (dispatch)=>{

        dispatch(inputUrlSubmit(inputUrl));  
        fetch('https://immense-cove-34629.herokuapp.com/imageurl',{
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body : JSON.stringify({
                input: inputUrl
              })
            })
          .then(response=>response.json())
          .then(response=>{
            if(response){
            fetch('https://immense-cove-34629.herokuapp.com/image',{
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body : JSON.stringify({
                id: userId
              })
            }).then(response => response.json()).then(data => {
             dispatch(loadUser(data))
            }).catch(console.log);
            }
    
           dispatch(displayFaceBox(calculator(response)))
        }).catch((e) => e.printStackTrace());
      };


