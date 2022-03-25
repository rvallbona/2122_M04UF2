import React from 'react';
import TextField from '@mui/material/TextField';
class  Input extends React.Component{
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
		return(
		<TextField id="standard-basic" label="tarea"  onChange={this.handleChange} value={this.state.value} />
		);
	}
}
export default Input;
