import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({input,userId,onInputChange, onButtonSubmit}) =>{
    
    const calculateFaceLocation = (data)=>{
        console.log(data);
        const clarifaiFace = data.outputs?.[0]?.data?.regions?.[0]?.region_info?.bounding_box;
        if(!clarifaiFace)
          return {};


        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        
        const height = Number(image.height);
        return {
          leftCol:clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        } 
      }



    
    return (
     
       <div>
           <p className="f3">
                {'This magic brain will detect faces in your pictures. Try it!'}
           </p>
           <div className="center">
                <div className="form center br3 pa4 shadow-5">
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue" onClick={onButtonSubmit(input,userId,calculateFaceLocation)}>detect</button>
                </div>
            </div>
       </div>
    );
}


export default ImageLinkForm;

