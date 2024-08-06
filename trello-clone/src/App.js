import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

function App() {
  const [items, setItems] = useState(["item0", "item1", "item2"]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <div>
      <Header></Header>
      <TaskCards></TaskCards>
    </div>
  );
}

export default App;
