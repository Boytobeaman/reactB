import React from "react"
import Logo from "../../component/logo/logo"
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from "antd-mobile"
class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type: "genius"
		}
	}
	register(){
		this.props.history.push("/register")
	}
	render(){
		const RadioItem = Radio.RadioItem;
		return(
			<div>
				<Logo></Logo>
				<List>
					<InputItem>name</InputItem>
					<InputItem>password</InputItem>
					<InputItem>confirm password</InputItem>
				</List>
				<WhiteSpace />
				<RadioItem checked={this.state.type=="genius"}>
					Gegius
				</RadioItem>
				<RadioItem checked={this.state.type=="boss"}>
					Boss
				</RadioItem>
				<Button type="primary">Register</Button>
			</div>
		)
		
	}
}

export default Register