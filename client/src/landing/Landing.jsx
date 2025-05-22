import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={style.containerLanding}>
      <div className={style.cajaLanding}>App Paises</div>
      <div className={style.cajaLanding}>
        <NavLink to={"/home"}>Iniciar sesion</NavLink>
      </div>
    </div>
  );
}

export default Landing;
