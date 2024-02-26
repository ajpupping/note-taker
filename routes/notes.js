const express = require('express');
const fs = require('fs');
const notes = express.Router();

notes.get('/', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

notes.post('/', (req, res) => {
    const newNote = req.body;

    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// add delete route here

module.exports = notes;