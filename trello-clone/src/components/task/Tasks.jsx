import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reOrder = (taskList, statIndex, endIndex) => {
  console.log(endIndex);

  if (endIndex === undefined) {
    return;
  }

  const remove = taskList.splice(statIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

export function Tasks({ taskList, setTaskList }) {
  const handleDragEnd = (result) => {
    reOrder(taskList, result.source.index, result.destination?.index);
  };
  const tasks = () =>
    taskList.map((task, index) => (
      <div key={task.id}>
        <Task
          key={task.id}
          task={task}
          index={index}
          setTaskList={setTaskList}
          taskList={taskList}
        ></Task>
      </div>
    ));

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
