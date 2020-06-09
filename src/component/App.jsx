import React,{useState, useEffect} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import ComposeNote from "./ComposeNote";
import axios from "axios";




function App(){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:3000/notes")
    .then(res =>{
        console.log(res)
        setNotes(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
},[]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });

    }
    function deleteNote(id){
        setNotes(prevNotes =>{
           return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
        
    }
return( <div>
    <Heading />
    <ComposeNote onAdd={addNote}/>
    { notes.map((noteItem, index) => {
return (<Note 
key = {index}
id =  {index}
title={noteItem.title} 
content ={noteItem.content}
onDelete={deleteNote}

/>);
})}
        
   
    <Footer />
</div>

)};

export default App;
