//jshint esversion:6

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require("cors");



const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/KeepNoteDB",{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const noteSchema={
    title: {type: String, required: true},
    content: {type: String, required: true}
};
const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req,res){
    Note.find(function(err, foundNote){
        if(!err){
            res.send(foundNote);}
            else res.send(err);
        
    });
})

app.post("/add", (function(req,res){

    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save(function(err){
        if(!err){
            res.send("Sucessfully add to new Note");
        }
        else res.send(err);
    });
}));
  app.delete("/:id",(function(req,res){
    Note.findByIdAndDelete (req.params.id), function(err){
            if(!err){
                res.send("Successfully deleted the corresponding note.");}
                else res.send(err);
    }}));

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
          
//         app.get('*', (req, res)=>{
//         res.sendFile(path.resolve(__dirname,'src','index.html'));
//         });
//         }

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Server started on port 3000");
  });