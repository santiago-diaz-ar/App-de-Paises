import style from "./Home.module.css"
import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <div className={style.containerOne}>
      <div>
      <NavLink to={"/"}>Atras</NavLink>
      <div>NavBar</div>
      <div>Renderizacion de tarjetas</div>
      <div>Fondo</div>
      </div>
    </div>
  );
}
