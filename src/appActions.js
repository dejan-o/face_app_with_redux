import * as constants from './appActionsConstants';

export const loadUser = (payload)=>{
   return { 
    type: constants.LOAD_USER,
    payload
};
}

export const routeChange = (payload)=> {
    return {
        type: constants.ROUTE_CHANGE,
        payload
    }
}

export const inputChange = (payload) => {
    return {
        type: constants.INPUT_URL_IMG_CHANGE,
        payload
    }
}

export const inputUrlSubmit = (payload) => {
    return {
        type: constants.INPUT_URL_IMG_SUBMIT,
        payload
    }
}

export const displayFaceBox = (payload) => {
    return {
        type: constants.SAVE_BOX_POINTS,
        payload
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
        }).catch((e) => console.log(e));
      };


