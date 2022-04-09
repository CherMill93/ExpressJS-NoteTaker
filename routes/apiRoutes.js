const note_data = require("../db/db.json");
const { createNewNote, deleteNote } = require("../assets/js/index")
const app = require("express").Router();

// exporting api paths

app.get('/notes', (req,res) => {
   res.json(note_data);
});

app.post('/notes', (req,res) => {
    let create = createNewNote(req.body, note_id)
   res.json(create);
});

app.delete('/notes/id', function(req,res) {
   deleteNote(note_data, req.params.id);
   res.json(note_data)
})

module.exports = app;