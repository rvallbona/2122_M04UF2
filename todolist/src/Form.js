import React from 'react';

import Input from './Input';
import Submit from './Submit';

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			task: ""
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTask(this.state.task);
		
		this.state.task = "";
		this.setState({
			task: this.state.task
		});
	}

	handleChange = (event) => {
		this.setState({
			task: event.target.value
		});
	}
	render()
	{
		return (
			<form onSubmit={this.handleSubmit}>
			<Input value={this.state.task} handleChange={this.handleChange} />
			<Submit />
			</form>
		);
	}
}
export default Form;
