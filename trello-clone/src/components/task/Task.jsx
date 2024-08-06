import React from "react";
import { Draggable } from "react-beautiful-dnd";

export function Task({ task, taskList, setTaskList, index }) {
  const handleDelete = () => {
    setTaskList(taskList.filter((t) => t.id != task.id));
  };

  return (
    <Draggable index={index} draggableId={`task-${task.id}`}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button className="taskTrashButton" onClick={() => handleDelete()}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
}
