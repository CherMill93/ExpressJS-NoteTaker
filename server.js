const express = require('express');
const fs = require("fs");

const PORT = process.env.PORT || 3001
const app = express();
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});