import React from "react";

export function TaskCardDeleteButton({
  cardId,
  taskCardList,
  setTaskCardList,
}) {
  const handleOnClick = () =>
    setTaskCardList(taskCardList.filter((taskCard) => taskCard.id != cardId));

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={handleOnClick}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
}
