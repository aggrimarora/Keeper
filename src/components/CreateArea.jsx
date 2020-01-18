import React, { useState } from "react";

function CreateArea(props) {
  var [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    var newValue = event.target.value;
    var inputName = event.target.name;
    setInputNote(prevValue => {
      return { ...prevValue, [inputName]: newValue };
    });
  }

  function isClicked(event) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button onClick={isClicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
