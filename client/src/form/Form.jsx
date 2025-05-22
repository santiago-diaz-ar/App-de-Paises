import style from "./Form.module.css";
import { NavLink } from "react-router-dom";

export default function Form() {
  return (
    <div className={style.containerForm}>
      <NavLink to={"/home"}>
        <div className={style.volverForm}>volver</div>
      </NavLink>
      <div className={style.tituloForm}>titulo</div>
      <div className={style.formulario}>
        <div className={style.cajasForm}>nombre: _________________________</div>
        <div className={style.cajasForm}>tipo: ______________________</div>
        <div className={style.cajasForm}>tiemp0: ___________________</div>
      </div>
      <div className={style.footerForm}>footer</div>
    </div>
  );
}
