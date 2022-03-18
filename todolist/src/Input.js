import React from 'react';

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
		<label htmlFor="input">Tarea
		<input type="text" id="input" onChange={this.handleChange} value={this.state.value} />
		</label>
		);
	}
}
export default Input;
