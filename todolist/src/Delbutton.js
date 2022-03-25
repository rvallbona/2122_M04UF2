import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Delbutton (props)
{
	return(
		<Button startIcon={<DeleteIcon />} variant="outlined" onClick={function (event){
				props.removeTask(props.id_task);
			}
		}>BORRAR</Button>
	);
}
export default Delbutton;
