import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import React from 'react';

class RemoveTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	
	openDialog = () => {
		this.setState({open: true });
	}

	closeDialog = () => {
		this.setState({open: false});
	}

	removeTask = () => {
		this.props.removeTask(this.props.task,this.props.order, this.props.task_id);
		this.closeDialog();
	}

	render (){
		return (
		<div>
		<Button startIcon={<DeleteForeverRoundedIcon />} onClick={this.openDialog}></Button>

		<Dialog open={this.state.open} onClose={this.closeDialog}>
			<DialogContent>
				<DialogContentText>
					¿ELIMINAR TAREA?
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
