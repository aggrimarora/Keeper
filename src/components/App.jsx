import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, updateNotes] = useState([]);

  function addNote(note) {
    updateNotes(prevValue => {
      return [...prevValue, note];
    });
  }

  function toBeDeleted(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((note,index) => {
        return id !== index;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={toBeDeleted}
          />
        );
      })}
      ;
      <Footer />
    </div>
  );
}

export default App;
