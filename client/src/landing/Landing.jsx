import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={style.containerOne}>
      <div className={style.titulo}>App Paises</div>
      <div className={style.container}>
        <NavLink to={"/home"}>Iniciar sesion</NavLink>
      </div>
    </div>
  );
}

export default Landing;
