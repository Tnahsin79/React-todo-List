import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import TasksList from "./components/TasksList";
import InputField from "./components/InputField";
import StatusBar from "./components/StatusBar";
import Filter from "./components/Filter";
//import "./style.css";

const App = () => {

    const [tasks, setTasks] = useState([
        { "name": "task 1", isComplete: false, priority: "high" },
        { "name": "task 2", isComplete: true, priority: "high" },
        { "name": "task 3", isComplete: false, priority: "low" },
        { "name": "task 4", isComplete: false, priority: "low" },
        { "name": "task 5", isComplete: true, priority: "medium" },
        { "name": "task 6", isComplete: false, priority: "medium" },
    ]);

    const toggle = (taskIndex) => {
        setTasks(tasks.map((task, index) => {
            if (taskIndex === index) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                };
            }
            return task;
        })
        );
    };

    const addTask = (newTask) => {
        setTasks([
            ...tasks,
            {
                name: newTask,
                isComplete: false,
                priority: "low"
            }
        ]);
    };

    const delTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        setTasks([
            ...tasks
        ]);
    };

    const setPriority = (taskIndex, value) => {
        setTasks(tasks.map((task, index) => {
            if (taskIndex === index) {
                return {
                    ...task,
                    isComplete: task.isComplete,
                    priority: value
                };
            }
            return task;
        })
        );
    };

    const filterByPriority = (val) => {
        setTasks(tasks.filter((task) => {
            return task.priority === val;
        })
        );
    }

    const filterByStatus = (val) => {
        setTasks(tasks.filter((task) => {
            return task.isComplete === val;
        })
        );
    }

    return (
        <Fragment>
            <Title text="TODO LIST APP" />
            <InputField addTask={addTask} />
            <br></br>
            <Filter filterByPriority={filterByPriority} filterByStatus={filterByStatus} />
            <TasksList tasks={tasks} toggle={toggle} delTask={delTask} setPriority={setPriority} />
            <StatusBar tasks={tasks} />
        </Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#app-root"));