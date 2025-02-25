import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link> {/* Enlace a la página principal */}
        </li>
        <li>
          <Link to="/characters">Personajes</Link>
        </li>
        <li>
          <Link to="/game">Juego</Link>
        </li>
      </ul>
    </nav>
  );
}