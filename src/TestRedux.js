import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


// import { createStore } from 'redux';
// import { addGun } from './index.redux';
// import { removeGUN } from './index.redux';


class TestRedux extends Component {
  constructor(props) {
   super(props);
  }

  
  render() {
    const store = this.props.store
    const num = store.getState()
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const delayAddGun = this.props.delayAddGun;
    return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       <h1>现在有机器{num}把</h1>
       <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
       <button onClick={()=>store.dispatch(removeGun())}>上交武器</button>
       <button onClick={()=>store.dispatch(delayAddGun())}>delay武器</button>
     </div>
    );
  }
}


export default TestRedux;
