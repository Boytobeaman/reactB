import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
// import App from './App';

import { counter } from './index.redux';
import TestRedux from './TestRedux';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(counter)

function render() {
	ReactDOM.render(<TestRedux store={store} />, document.getElementById('root'));
}
render()
store.subscribe(render)

registerServiceWorker();
