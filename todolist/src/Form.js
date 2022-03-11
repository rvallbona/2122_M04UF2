import React from 'react';

import Input from './Input';
import Submit from './Submit';
class Form extends React.Component{
	constructor(props){
		super(props);
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log("hola");
	}
	render()
	{
		return (
			<form onSubmit={this.handleSubmit}>
			<Input />
			<Submit />
			</form>
		);
	}
}
export default Form;
