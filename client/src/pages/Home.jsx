import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import InputNote from "../components/InputNote";
import * as api from ".././api/api.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Home() {
  const [notesState, update] = useState([]);

  async function postNote(note) {
    try {
      await api.postNote({
        key: note.key,
        title: note.title,
        content: note.content
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getNotes() {
    try {
      const response = await api.fetchNotes();
      update(response.data);
      console.log(response.data);
    } catch (error) {}
  }

  async function deleteNote(key) {
    try {
      await api.deleteNote(key);
      update((prevNotes) => {
        return prevNotes.filter((currentNote) => {
          return key !== currentNote.key;
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  if (notesState.length === 0) {
    getNotes();
  }

  function createNotes(note) {
    return (
      <CSSTransition key={note.key} timeout={300} classNames="item">
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      </CSSTransition>
    );
  }

  function addNote(title, content) {
    var keyVal = notesState.length;
    var newNote = {
      key: keyVal,
      title: title,
      content: content
    };

    console.log(newNote);

    postNote(newNote);

    if (notesState.length !== 0) {
      update((prevNotes) => {
        return [newNote, ...prevNotes];
      });
    }
  }

  return (
    <div>
      <Header />
      <div className="grid">
        <InputNote add={addNote} />
        <TransitionGroup>{notesState.map(createNotes)}</TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
