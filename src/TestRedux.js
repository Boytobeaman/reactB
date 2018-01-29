import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun,removeGun,delayAddGun } from './index.redux';

import logo from './logo.svg';
import './App.css';


const actionCreators = {addGun,removeGun,delayAddGun}

@connect(
  state=>({num:state}),
  { addGun, removeGun, delayAddGun}
  )

class TestRedux extends Component {
 
  render() {
    return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       <h1>现在有机器{this.props.num}把</h1>
       <button onClick={this.props.addGun}>申请武器</button>
       <button onClick={this.props.removeGun}>上交武器</button>
       <button onClick={this.props.delayAddGun}>delay武器</button>
     </div>
    );
  }
}


export default TestRedux;
