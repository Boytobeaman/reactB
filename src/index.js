import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import './index.css';
// import App from './App';

import reducers from './reducer';
import 'antd-mobile/dist/antd-mobile.css';

import Dashboard from './Dashboard';
import Auth from './Auth';
import "./config"

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	));

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/login' component={Auth}></Route>
					<Route path='/dashboard' component={Dashboard}></Route>
					<Redirect to="/dashboard"></Redirect>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);
