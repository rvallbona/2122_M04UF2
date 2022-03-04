function Content (props)
{
	return (
	<div>
	<h2>{props.title}</h2>
	<section>{props.children}</section>
	</div>
	);
}
export default Content;
