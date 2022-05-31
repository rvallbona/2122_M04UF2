import React from 'react';

import TextField from '@mui/material/TextField';

class TaskInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.handleChange(event);
		
		this.setState({
			value: event.target.value
		});
		event.preventDefault();
	}

	render() {
		return (
		<TextField fullWidth label="Tarea" onChange={this.handleChange} value={this.state.value}/>
		);
	}
}

export default TaskInput;
