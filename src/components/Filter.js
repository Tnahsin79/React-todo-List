import React from "react";
const Filter = (props) => {
    const filterByPriority = props.filterByPriority;
    const filterByStatus = props.filterByStatus;
    const onStatusChange=(e)=>{
        if(e.target.value==="Completed")
        filterByStatus(true);
        else
        filterByStatus(false);
    }
    const onPriorityChange=(e)=>{
        filterByPriority(e.target.value);
    }
    return (
        <div>
            <select onChange={onStatusChange}>
                <option value="--Filter by Status--">--Filter by Status--</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
            <br></br>
            <br></br>
            <select onChange={onPriorityChange}>
                <option value="--Filter by Priority--">--Filter by Priority--</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    );
};
export default Filter;