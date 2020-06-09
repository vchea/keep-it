import React from "react";
import axios from "axios";

function Note(props){
    function handleClick(){
        // axios.delete("https://localhost:3000/"+props.id).then(res =>{
        //     if(res.status ===200){
                props.onDelete(props.id);
        
       // });
        
    }
    return (<div className = "note"><h1>{props.title} </h1> 
    <p>{props.content}</p>
    <button  onClick={handleClick}> DELETE </button></div>
    )}

export default Note;