import React from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


class Delbutton extends React.Component{

	constructor (props){
		super(props);
		this.state = { 
			open: false
		 };
	}
	handleDelete = () =>{
		this.props.removeTask(this.props.task_id);
		this.setState({open:false});
	}
	handleClose = () => {
		this.setState({open:false});
    }
	handleOnClick = ()=>{
		this.setState({open: true });
	}
 	render() {
 		return (
		<div>
			<Button variant="contained" 
					startIcon=<DeleteIcon /> 
					onClick={this.handleOnClick}>
			DELETE</Button>

			<Dialog  
				open={this.state.open}
				onClose={this.handleClose}>
				
				<DialogTitle>
					{'Are you sure?'}
				</DialogTitle>
				
				<DialogActions>
						<Button onClick={this.handleDelete}>
							<DoneIcon />
						</Button>
				
					<Button onClick={this.handleClose}> 
						<CloseIcon />
					</Button>
				</DialogActions>
		</Dialog>
	</div>
	);
	}
}
export default Delbutton;
