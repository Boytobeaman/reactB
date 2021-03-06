import React from "react"
import Logo from "../../component/logo/logo"
import {List, InputItem, WingBlank, WhiteSpace, Button} from "antd-mobile"

class Login extends React.Component{
	constructor(props){
		super(props);
		this.register=this.register.bind(this)
	}
	register(){
		this.props.history.push("/register")
	}

	render(){
		return (
			<div>
				<Logo></Logo>
				<h2>register page</h2>
				<WingBlank>
					<List>
						<InputItem>user</InputItem>
						<WhiteSpace />
						<InputItem>password</InputItem>
					</List>
					<Button type='primary'>LOGIN </Button>
					<WhiteSpace />
					<Button onClick={this.register} type='primary'>Register </Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login