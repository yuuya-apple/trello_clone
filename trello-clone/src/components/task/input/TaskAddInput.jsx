import React from "react";
import { v4 as uuid } from "uuid";

export function TaskAddInput({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: uuid(),
      },
    ]);
    setInputText("");
  };

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="taskAddInput"
          placeholder="add a task"
          onChange={handleOnChange}
          value={inputText}
        />
      </form>
    </div>
  );
}
