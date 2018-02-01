import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import TestRedux from './TestRedux';
import {logout} from './Auth.redux';

import {
	Route,
	Link,
	Redirect
} from 'react-router-dom';


function Erying() {
	return <h2>er ying</h2>
}
function Qibinglian() {
	return <h2>Qi bing lian</h2>
}

@connect(
	state=>state.auth,
	{logout}
	)
class Dashboard extends React.Component{
	render(){
		const match = this.props.match;
		console.log(match);
		const redirectToLogin = <Redirect to='/login'></Redirect>;
		const app = (
			<div>
				<Header></Header>
				{this.props.isAuth? <button onClick={this.props.logout}>Logout</button>: null}
				<h2>Dashboard page</h2>
				<ul>
					<li><Link to={`${match.url}`}>yiying</Link></li>
					<li><Link to={`${match.url}/erying`}>erying</Link></li>
					<li><Link to={`${match.url}/qibinglian`}>qibinglian</Link></li>
				</ul>
				<Route path={`${match.url}`} exact component={TestRedux}></Route>
				<Route path={`${match.url}/erying`} component={Erying}></Route>
				<Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
			</div>
		)
		return this.props.isAuth ? app:redirectToLogin



	}
}

export default Dashboard