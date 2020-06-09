import React,{useState} from "react";
import axios from "axios";


function ComposeNote(props){

  const [note, setNote] = useState({
    title :"",
    content:""
  });

  function checkNote(note){
    
    if(note.title.length > 0 && note.title.length >0)
    return true;
    else {
      alert("Please Check the title and content again.");
      return false; 
    }
  }
  function handleChange(event){
    const {name, value} = event.target;

    setNote( prevNote => {
      return{
        ...prevNote,
        [name]: value
      }
    });
  }


  function submiteNote(event){
    checkNote(note);
    props.onAdd(note);
    event.preventDefault();
    // axios.post("https:://localhost:3000/notes/add", note)
    // .then(res=>console.log(res));
    setNote({ title :"",
    content:""});

  }
    return (
        <div>
          <form>
            <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
            <button onClick={submiteNote} > Add</button>
          </form>
        </div>
      );
}

export default ComposeNote;