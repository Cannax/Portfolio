const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const logMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    
    fs.appendFile('messages.txt', logMessage, (err) => {
        if (err) {
            console.error('Error saving message:', err);
            return res.status(500).send('Server error');
        }
        res.send('Message received!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
