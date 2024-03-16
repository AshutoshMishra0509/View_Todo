import { useState } from "react";

function Enterinput({ handleChange, addItem, taskCreated }) {
  return (
    <div className="ip">
      <input
        type="text"
        id="crt"
        value={taskCreated}
        onChange={handleChange}
        placeholder="Enter the task..."
        spellCheck="false"
      />
      <button onClick={addItem} id="bt">
        <i class="bi bi-plus "></i>
      </button>
    </div>
  );
}
export default Enterinput;
