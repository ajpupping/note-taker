const express = require('express');
const notes = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');


// GET route

notes.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../db/db.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error, notes could not be retrieved.');
        }
        res.json(JSON.parse(data));
    });
});


// POST route

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        return res.json('Please add both a title and text to your note.');
    } 
    
    const newNote = {
            id: uuidv4(),
            title,
            text, 
        };

    const filePath = path.join(__dirname, '../db/db.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;

        const notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile(filePath, JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                return res.status(500).json('Error, note could not be saved.');
            }
            res.json(newNote);
        });
    });
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