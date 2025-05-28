import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={style.containerLanding}>
      <div className={style.cajaLanding}>
        <h2>Paises y Actividades</h2>
        <h4>
          En esta app podras localizar cualquier pais que necesites y sus
          actividades principales, tambien podras agregar una nueva Actividad a
          un pais si esta falta o se el Pais la implemento hace poco.
        </h4>
      </div>
      <div className={style.cajaLanding1}>
        <NavLink to={"/home"} className={style.navinicio}>
          Iniciar sesion
        </NavLink>
      </div>
    </div>
  );
}

export default Landing;
