import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={style.containerOne}>
      <div className={style.Navbar}>
        <NavLink to={"/"} className={style.caja}>
          volver
        </NavLink>
        <div className={style.caja}>inicio</div>
        <div className={style.caja}>tipos</div>
        <div className={style.caja}>sobre nosotros</div>
        <NavLink to={"/form"}>
          <div className={style.caja}>crear actividad de pais</div>
        </NavLink>
      </div>
      <div className={style.body}>
        <NavLink to={"/detail"}>
          <div className={style.cajabody}>1</div>
        </NavLink>
        <NavLink to={"/detail"}>
          <div className={style.cajabody}>2</div>
        </NavLink>
        <NavLink to={"/detail"}>
          <div className={style.cajabody}>3</div>
        </NavLink>
        <NavLink to={"/detail"}>
          <div className={style.cajabody}>4</div>
        </NavLink>

        <div className={style.cajabody}>5</div>
        <div className={style.cajabody}>6</div>
        <div className={style.cajabody}>7</div>
        <div className={style.cajabody}>8</div>
      </div>
      <div className={style.about}>
        <div className={style.cajasAbout}>Direccion</div>
        <div className={style.cajasAbout}>contactos</div>
      </div>
    </div>
  );
}
