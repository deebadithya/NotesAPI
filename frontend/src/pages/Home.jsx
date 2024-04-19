import api from "../api.js"
import {useState, useEffect } from "react";
import Note from "../components/Note.jsx"
import "../styles/Home.css"

function Home() {

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("")


    useEffect(() => {
        getNotes();
    }, []);
    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then( (data) => {setNotes(data); console.log(data) })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api.delete(`api/notes/delete/${id}/`).then((res) => {
        if (res.status === 204) alert("note deleted!")
        else alert("failed to delete the note.")
            getNotes();
    }).catch((err) => alert(err));
        }

    const createNote = (e) => {
        e.preventDefault();
        api.post("api/notes/", { content, title }).then((res) => {
            if (res.status === 201 )
                alert("Note created");
            else
                alert("failed to create a note.")
            getNotes();
        }).catch((err) => alert(err));


    }



    return (<div>
        <div>
            <h2>
                {notes.map((note) => <Note note={note} onDelete={deleteNote} key={note.id}/>)}
            </h2>
        </div>
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Title: </label>
            <br/>
            <input type="text"
                   id="title"
                   name="title"
                   onChange={(e) => setTitle(e.target.value)}
                   required
                   value={title}/>

            <label htmlFor="content">Content: </label>
            <br/>
            <textarea id="content"
                      name="content"
                      required
                      value={content}
                      onChange={(e) => setContent(e.target.value)}>

            </textarea>
<br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
}

export default Home;