const express = require('express');
const notes = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// GET route

notes.get('/', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});


// POST route

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) throw err;

        const notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
} else {
    res.json('Please add both a title and text to your note.');
}
});

// Delete route

notes.delete('/:id', (req, res) => {
    const noteId = req.params.id; // Get the ID of the note to delete

    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Error reading notes file.' });

        let notes = JSON.parse(data);

        notes = notes.filter(note => note.id !== noteId);

        fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'Error writing notes file.' });
            res.json({ message: `The note has been deleted.` });
        });
    });
});

module.exports = notes;