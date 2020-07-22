import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
//import {} from './components/signIn/signInReducers';
import {setRegisterField} from './components/register/registerReducers';
import {setSignInField} from './components/signIn/signInReducers';
import {appReducer} from './appReducers';

const rootReducer = combineReducers({setRegisterField, setSignInField, appReducer});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));




ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
