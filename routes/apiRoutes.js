const note_data = require("../db/note_data");
const { createNewNote, deleteNote } = require("../assets/js/index")
const app = require("express").Router();

// exporting api paths

app.get("/note", (req,res) => {
   res.json(note_data);
});

app.post("/note", (req,res) => {
    let create = createNewNote(req.body, note_id)
   res.json(create);
});

app.delete("note/id", function(req,res) {
   deleteNote(note_data, req.params.id);
   res.json(note_data)
})

module.exports = app;