import Enterinput from "./input";
import Task from "./taskbutton";
import CTask from "./task";
import Del from "./delete";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // let Taskcreated = ["Task1", "Task2"];
  const [Tasks, setTasks] = useState([]);
  const [taskCreated, setTaskCreated] = useState("");
  const [Atc, setAtc] = useState(0);
  var job;
  function handleChange(event) {
    job = event.target.value;
    // console.log(job);
    setTaskCreated(job);
  }
  function addItem() {
    console.log("hello");

    //setTasks([Tasks, taskCreated]);
    setTasks((prevTasks) => [...prevTasks, taskCreated]);
    setAtc(Atc + 1);
    // console.log(Tasks);
    setTaskCreated("");
  }
  //Function for changing  the status of a task to completed and pending
  var [pendingg, setpending] = useState(Atc);
  var [complt, setcomp] = useState(0);
  var [pendin, setpendin] = useState(0);
  useEffect(() => {
    setpending(Atc);
  }, [Atc]);
  useEffect(
    () => {
      setcomp(Atc - pendingg);
    },
    [pendingg],
    [Atc]
  );
  function changeStatus(pendin) {
    console.log("atc and pendin", Atc, pendin);
    setpending(Atc + pendin);
  }
  // function for Clearing all the task
  function handleClear() {
    setTasks([]);
    setAtc(0);
  }
  return (
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class=" col-sm-6  ">
          <h1>TO DO APP</h1>
          <Enterinput
            handleChange={handleChange}
            addItem={addItem}
            taskCreated={taskCreated}
          ></Enterinput>
          <Task Atc={Atc} pendingg={pendingg} complt={complt} />
          <>
            {Tasks.map((item) => (
              <CTask
                Taskcreated={item}
                changeStatus={changeStatus}
                pendin={pendin}
                setpendin={setpendin}
              ></CTask>
            ))}
          </>
          <Del handleClear={handleClear} />
        </div>
      </div>
    </div>
  );
}

export default App;
