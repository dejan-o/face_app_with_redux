import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import Particles from 'react-particles-js';  
import {connect} from 'react-redux';
import * as actions from './appActions';

// BACKGROUIND ANIMATION OPTIONS  
const particlesOptions = {
	particles: {
		number: {
			value: 70,
			density: {
				enable: true,
				value_area: 800
			}
		},
		size: {
			value: 3
		},
		opacity: {
			value: 0.3
		} 
	} 
};
   
    
const mapStateToProps = (state)=> {
	return {
		input: state.appReducer.input,
		imageUrl: state.appReducer.imageUrl,
		box: state.appReducer.box,
		route: state.appReducer.route,
		isSignedIn: state.appReducer.isSignedIn,
		user: state.appReducer.user,
	};
};

   
const mapDispatchToProps = (dispatch)=> {
	return {
		loadUser: (user) => dispatch(actions.loadUser(user)),
		routeChange: (route) => dispatch(actions.routeChange(route)),
		inputChange: (url) => dispatch(actions.inputChange(url.target.value)),
		inputUrlSubmit: (url) => dispatch(actions.inputUrlSubmit(url)),
		displayFaceBox: (obj) => dispatch(actions.displayFaceBox(obj)),
		resetAppState: () => dispatch(actions.resetAppState()),
		onImageSubmit: (inputUrl, userId, calculatorFunction) => () => dispatch(actions.onImageSubmit(inputUrl, userId, calculatorFunction))
	};
};


class App extends Component {

	constructor(props){
		super(props);
	}

	render(){
		const {imageUrl, input, box, isSignedIn, route, user} = this.props;
      
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation  reset={this.props.resetAppState} name={user.name} isSignedIn={isSignedIn} onRouteChange={this.props.routeChange}/>
				{ route === 'home' ?
					<div>
						<Logo/>
						<Rank name={user.name} entries={user.entries}/>
						<ImageLinkForm  input={input} userId={user.id} onInputChange={this.props.inputChange} onButtonSubmit={this.props.onImageSubmit}/>
						<FaceRecognition box={box} imageUrl={imageUrl}/>
					</div>
					: 
					route === 'signin' ?
						<SignIn loadUser={this.props.loadUser} onRouteChange={this.props.routeChange}/>
						:
						<Register loadUser={this.props.loadUser} onRouteChange={this.props.routeChange}/>

				}
 
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
