import { React, useState } from "react";

export function TaskCardTitle() {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleOnChange = (event) => {
    setInputCardTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClick(false);
  };

  const handleOnBlur = (event) => {
    event.preventDefault();
    setIsClick(false);
  };

  const title = isClick ? (
    <form onSubmit={handleSubmit}>
      <input
        className="taskCardTitleInput"
        autoFocus
        type="text"
        value={inputCardTitle}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        maxLength={10}
      />
    </form>
  ) : (
    <h3>{inputCardTitle}</h3>
  );

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {title}
    </div>
  );
}
