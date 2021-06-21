import React, { useState } from "react";

function InputNote(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  function addNote(event) {
    event.preventDefault();
    props.add(input.title, input.content);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="input-box">
      <textarea
        onKeyDown={handleKeyDown}
        className="title-input"
        placeholder="Tilte"
        name="title"
        onChange={handleChange}
        value={input.title}
      />
      <textarea
        onKeyDown={handleKeyDown}
        className="content-input"
        placeholder="Take a note..."
        name="content"
        onChange={handleChange}
        value={input.content}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default InputNote;
