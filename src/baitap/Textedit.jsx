import React, { useState, useRef } from "react";

function TextEdit() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setText(inputRef.current.value);
  };

  return (
    <>
      <h1>{text}</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Update Text</button>
    </>
  );
}

export default TextEdit;
