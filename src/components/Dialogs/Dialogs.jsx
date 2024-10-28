import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <div className={style.dialog + " " + style.active}>Dimych</div>
        <div className={style.dialog}>Sasha</div>
        <div className={style.dialog}>Sveta</div>
        <div className={style.dialog}>Viktor</div>
        <div className={style.dialog}>Valera</div>
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
