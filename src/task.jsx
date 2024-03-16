import React, { useState } from "react";
import style from "./CTask.module.css";
import { useEffect } from "react";

function CTask({ Taskcreated, changeStatus, pendin, setpendin }) {
  //   let Taskcreated = ["Task1", "Task2", "Task3", "Task4"];

  const [isChecked, setChecked] = useState(false);
  function handleStyle() {
    setChecked(!isChecked);

    setpendin((prevpendin) => (isChecked ? prevpendin + 1 : prevpendin - 1));
  }
  useEffect(() => {
    changeStatus(pendin);
  }, [pendin]);

  return (
    <>
      <div className="input-group">
        <div
          className={`input-group-text  ${style["task"]}     ${
            isChecked ? style["checked"] : ""
          }   `}
        >
          <input
            className={`form-check-input mt-0 ${style["ch"]}`}
            type="checkbox"
            onClick={handleStyle}
          />
          <h6
            key={Taskcreated}
            className={` ${style["h"]}  ${
              isChecked ? "text-decoration-line-through" : ""
            }  `}
          >
            {Taskcreated}
          </h6>
        </div>
      </div>
    </>
  );
}
export default CTask;
