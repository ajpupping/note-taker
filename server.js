const express = require('express'); 
const path = require('path'); 
const api = require('./routes/notes'); 

const PORT = process.env.PORT || 3001;

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api); 

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.index(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) => 
    res.notes(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);

