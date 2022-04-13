import React from 'react';

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

class RemoveTask extends React.Component 
{
	constructor (props){
		super(props);

		this.state = {
			open: false
		}
	}

	componentWillMount(){
		fetch("http://172.16.178.242:3030/")
			.then(response => response.json())
			.then(data => this.setTasks(data));
	}
	openDialog = () => {
		this.state.open = true;
		this.setState({
			open: this.state.open
		});
	};

	closeDialog = () => {
		this.state.open = false;
		this.setState({
			open: this.state.open
		});
	};

	removeTask = () => {
		this.props.removeTask(this.props.id_task);
		this.closeDialog();
		fetch('http://172.16.178.242:3030/', {
			method: 'POST',
			body: '{"":""}'
		});
	};





	render (){
		return (
		<div>
		<Button startIcon={<DeleteIcon />} onClick={this.openDialog}>BORRAR</Button>

		<Dialog open={this.state.open} onClose={this.closeDialog}>
		<DialogTitle>Borrar tarea</DialogTitle>
		<DialogContent>
		<DialogContentText>
			¿Quieres borrar "NOMBRE TAREA"?
		</DialogContentText>
		</DialogContent>
		<DialogActions>
		<Button onClick={this.closeDialog}>No</Button>
		<Button startIcon={<DeleteIcon />} variant="contained" color="error" onClick={this.removeTask}>Sí</Button>
		</DialogActions>
		</Dialog>
		</div>

		);
	}

}

export default RemoveTask;
