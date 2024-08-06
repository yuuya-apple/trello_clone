import { React, useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reOrder = (taskCardList, statIndex, endIndex) => {
  if (endIndex === undefined) {
    return;
  }

  const remove = taskCardList.splice(statIndex, 1);
  taskCardList.splice(endIndex, 0, remove[0]);
};

export function TaskCards() {
  const [taskCardList, setTaskCardList] = useState([]);

  const handleDragEnd = (result) => {
    reOrder(taskCardList, result.source.index, result.destination?.index);
  };

  const taskCards = () =>
    taskCardList.map((taskCard, cardIndex) => (
      <TaskCard
        key={taskCard.id}
        cardId={taskCard.id}
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
        cardIndex={cardIndex}
      ></TaskCard>
    ));

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCards()}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            ></AddTaskCardButton>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
