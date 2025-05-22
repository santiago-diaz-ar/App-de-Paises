import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";

export default function Detail() {
  return (
    <div>
      <div>
        <NavLink to={"/home"}>volver</NavLink>
      </div>
      <div>titulo</div>
      <div className={style.containerDetail}>
        <div className={style.cajaDetail}> imagen</div>
        <div className={style.cajaDetail}>informacion</div>
        <div className={style.cajaDetail}> frase</div>
      </div>
      <div>footer</div>
    </div>
  );
}
