function Delbutton (props)
{
	return(
		<button onClick={event => {
				event.preventDefault();
				console.log("Hola");
			}
		}>DEL</button>
	);
}
export default Delbutton;
