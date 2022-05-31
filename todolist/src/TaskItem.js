import RemoveTask from './RemoveTask';

import {Grid, ListItem, ListItemText} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

function TaskItem (props)
{
	return(
		<ListItem>
		<Grid item xs={0}>
			<AssignmentIcon />
		</Grid>
		<Grid item xs={20}>
		{props.task}
		</Grid>
		<Grid item xs={0}>
		<RemoveTask task_id={props.task_id}
					task={props.task}
					order={props.order}
					removeTask={props.removeTask}/>
		</Grid>
		</ListItem>
	);

}

export default TaskItem;
