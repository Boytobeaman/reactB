import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
// import App from './App';

import { counter,addGun,removeGun,delayAddGun } from './index.redux';
import TestRedux from './TestRedux';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f

	))

function render() {
	ReactDOM.render(<TestRedux store={store} addGun={addGun} removeGun={removeGun} delayAddGun={delayAddGun} />, document.getElementById('root'));
}
render()
store.subscribe(render)

registerServiceWorker();
