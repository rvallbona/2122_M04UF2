import Icon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import React from 'react';

class  TaskSubmit extends React.Component {
	constructor (props) {
		super(props);
		this.state ={

		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(event);
	}

	render() {
		return (
				<Button id="task_submit" variant="contained" size="large" color="inherit" onClick={this.handleSubmit}><Icon/></Button>
		);
	}
}
export default TaskSubmit;