import MenuItem from "./MenuItem";
function Menu ()
{
	return(
<nav>
<ul>
<MenuItem text="HomePage" url="/" />
<MenuItem text="Curriculum" url="/cv" />
<MenuItem text="Contacto" url="/contacto" />
<MenuItem text="Juego" url="/game" />
<MenuItem text="Lobby" url="/lobby" />
</ul>
</nav>
	);
}

export default Menu;
