const path = require("path");
const app = require("express").Router();
// exporting html paths

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// set index.html as default page

app.get("*", (req,res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });




module.exports = app;