import React from 'react';

import TextField from '@mui/material/TextField';

class TaskInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.handleChange(event);
		
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
		<TextField label="Tarea" onChange={this.handleChange} value={this.props.value}/>
		);
	}
}

export default TaskInput;
