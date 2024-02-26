const express = require('express'); 
const path = require('path'); 
const app = express(); 
const api = require('./routes/notes'); 
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use('/api/notes', api); 

// GET route for notes page

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Catch all route, to handle any routes not handled above

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);