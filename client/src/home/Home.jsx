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
      </div>
      <div className={style.body}>
        <div className={style.cajabody}>1</div>
        <div className={style.cajabody}>2</div>
        <div className={style.cajabody}>3</div>
        <div className={style.cajabody}>4</div>
        <div className={style.cajabody}>5</div>
        <div className={style.cajabody}>6</div>
        <div className={style.cajabody}>7</div>
        <div className={style.cajabody}>8</div>
      </div>
    </div>
  );
}
