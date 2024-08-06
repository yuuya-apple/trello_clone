import React from "react";
import { v4 as uuid } from "uuid";

export function AddTaskCardButton({ taskCardList, setTaskCardList }) {
  const handleOnClick = () => {
    setTaskCardList([...taskCardList, { id: uuid() }]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
}
