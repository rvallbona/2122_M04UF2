import RemoveTask from './RemoveTask';

import ListItem from '@mui/material/ListItem';

function TaskItem (props)
{
	return(
		<ListItem>{props.task} <RemoveTask id_task={props.id_task} removeTask={props.removeTask}/></ListItem>
	);

}

export default TaskItem;
