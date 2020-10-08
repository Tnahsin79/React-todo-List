import React from "react";
const StatusBar = (props) => {
    const tasks = props.tasks;
    let pending = 0, completed = 0, high = 0, medium = 0, low = 0;
    tasks.map((task) => {
        if (task.isComplete)
            completed++;
        else
            pending++;
        if (task.priority === "high") high++;
        if (task.priority === "medium") medium++;
        if (task.priority === "low") low++;
    })
    return (
        <div>
            <h5>Pending Tasks:         {pending}</h5>
            <h5>Completed Tasks:       {completed}</h5>
            <h5>High priority Tasks:  {high}</h5>
            <h5>Medium priority Tasks: {medium}</h5>
            <h5>Low priority Tasks:    {low}</h5>
        </div>
    );
}
export default StatusBar;