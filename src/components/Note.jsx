import React from "react";
import logo from "./close.png"

function Note(props) {

    function deleteNote(){
        props.deleteNote(props.id);
    }

    return (
    <div className = "note">
        <div>
            <h3>23 June, 2019</h3>
            <img src={logo} width="15" height="15" className="remove" onClick={deleteNote} alt="Delete Node Button"/>
        </div>
        <div  className = "titleContainer">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </div>
    );
}

export default Note