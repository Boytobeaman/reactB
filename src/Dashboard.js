import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import TestRedux from './TestRedux';
import {logout} from './Auth.redux';

import {
	BrowserRouter,
	Route,
	Link,
	Redirect,
	Switch
} from 'react-router-dom';


function Erying() {
	return <h2>er ying</h2>
}
function Qibinglian() {
	return <h2>Qi bing lian</h2>
}
class Test extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		return <h2>testing</h2>
	}
}
@connect(
	state=>state.auth,
	{logout}
	)
class Dashboard extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const redirectToLogin = <Redirect to='/login'></Redirect>;
		const app = (
			<div>
				<Header></Header>
				{this.props.isAuth? <button onClick={this.props.logout}>Logout</button>: null}
				<h2>Dashboard page</h2>
				<ul>
					<li><Link to="/dashboard/">yiying</Link></li>
					<li><Link to="/dashboard/erying">erying</Link></li>
					<li><Link to="/dashboard/qibinglian">qibinglian</Link></li>
				</ul>
				<Route path="/dashboard/" exact component={TestRedux}></Route>
				<Route path="/dashboard/erying" component={Erying}></Route>
				<Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
			</div>
		)
		return this.props.isAuth ? app:redirectToLogin



	}
}

export default Dashboard