import { useState } from "react";
import React from "react";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const submit = () => {
        if (inputValue) {
            props.addTask(inputValue);
        }
        setInputValue("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="add new task"
                onChange={onInputChange}
            />
            <button onClick={submit} className="btn btn-outline-primary">ADD</button>
        </div>
    );
};

export default InputField;