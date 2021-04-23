import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from  "./components/Note"
import InputNote from "./components/InputNote"
import notes from "./notes"
import { TransitionGroup, CSSTransition } from "react-transition-group"


function App() {

    const [notesState, update] = useState(notes);

    function createNotes(note){
        return (
        <CSSTransition key={note.key} timeout={500} classNames="item" >
        <Note key={note.key} id={note.key} title= {note.title} content= {note.content} deleteNote={deleteNote}/>
        </CSSTransition>
        );
    }
    
    function deleteNote(id){
        update(prevNotes =>{
            return prevNotes.filter((currentNote) =>{
                return id !== currentNote.key;
            })
        })
    }

    function addNote(title,content){
        var keyVal = notesState.length;
        var newNote = {
            key: [keyVal],
            title: [title],
            content: [content]
        };

        update(prevNotes => {
            return [newNote,...prevNotes];
        });
    }

    return (
    <div>
        <Header />
            <div className="grid">
                <InputNote add={addNote} />
                <TransitionGroup>
                    {notesState.map(createNotes)}
                </TransitionGroup>
            </div>
        <Footer />
    </div>
    );
}

export default App;