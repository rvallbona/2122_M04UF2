import ListItem from '@mui/material/ListItem';
import Delbutton from './Delbutton';
function Item (props)
{
	return(
		<ListItem>{props.task} <Delbutton id_task={props.id_task}removeTask={props.removeTask} /></ListItem>
	);
}
export default Item;
