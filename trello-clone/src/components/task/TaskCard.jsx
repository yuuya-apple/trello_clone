import { React, useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { Draggable } from "react-beautiful-dnd";

export function TaskCard({ cardId, taskCardList, setTaskCardList, cardIndex }) {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={`taskCard-${cardId}`} index={cardIndex}>
      {(provided) => (
        <div
          className="taskCard"
          key={cardId}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="taskCardHeader" {...provided.dragHandleProps}>
            <TaskCardTitle></TaskCardTitle>
            <TaskCardDeleteButton
              cardId={cardId}
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            ></TaskCardDeleteButton>
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          ></TaskAddInput>
          <Tasks setTaskList={setTaskList} taskList={taskList}></Tasks>
        </div>
      )}
    </Draggable>
  );
}
