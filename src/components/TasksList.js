import React, { useState } from "react";
import "../style.css";

const TasksList = (props) => {
    const [val, setVal] = useState("");
    const tasks = props.tasks;
    const toggle = props.toggle;
    const delTask = props.delTask;
    const setPriority = props.setPriority;
    return (
        <table>
            <thead>
                <tr>
                    <th>TASK NAME</th>
                    <th>STATUS</th>
                    <th>PRIORITY</th>
                    <th>SET PRIORITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task, index) => {
                        const onDel = () => {
                            delTask(index);
                        }
                        const onTaskClicked = () => {
                            toggle(index);
                        }
                        const handleChange = (e) => {
                            setVal(e.target.value);
                            setPriority(index, e.target.value);
                            setVal("");
                        }
                        return (
                            <tr key={index}>
                                <td onClick={onTaskClicked}>{task.name}</td>
                                <td>{task.isComplete ? "Completed" : "Pending"}</td>
                                <td>{task.priority}</td>
                                <td>
                                    <select id={index} value={val} onChange={handleChange}>
                                        <option value="--select--">--Select--</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                                <td><button onClick={onDel} className="btn btn-outline-danger">DELETE</button></td>
                            </tr>
                            /*<li key={index} onClick={onTaskClicked}>
                                {task.name}{task.isComplete ? "-Done-" : "-Pending-"}{task.priority}
                            </li>*/
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default TasksList;