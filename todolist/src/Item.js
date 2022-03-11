import Delbutton from './Delbutton';
function Item (props)
{
	return(
		<li>{props.task}<Delbutton /></li>
	);
}
export default Item;
