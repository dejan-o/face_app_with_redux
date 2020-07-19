import React from 'react';


const Navigation = ({reset,name, onRouteChange,isSignedIn}) =>{
        if(isSignedIn){
        return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p className="f3 link dim black underline pa3 pointer">{name}</p>
        <p onClick={reset} className="f3 link dim black underline pa3 pointer">Sign out</p>
        </nav>
        );
        }
        else {
            return (
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
            <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
            </nav>


            );
        }
    
}


export default Navigation;