import React from 'react';
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import {Redirect,Route} from "react-router-dom"
@connect(
	state=>state.auth,
	{login}

	)
class Auth extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				{ this.props.isAuth? <Redirect to='/dashboard' />: null}
				<h2>Auth page,you don't have rights to login</h2>
				<button onClick={this.props.login}>login</button>
			</div>
		)
	}
}

export default Auth