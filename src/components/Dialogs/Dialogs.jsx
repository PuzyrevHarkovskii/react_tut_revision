import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <div className={style.dialog + " " + style.active}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">Sasha</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Viktor</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Valera</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.dialog}>Hi</div>
        <div className={style.dialog}>How r u?</div>
        <div className={style.dialog}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
