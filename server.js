const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('portfolio')); // Serve static files from the portfolio directory

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(Name: ${name}, Email: ${email}, Message: ${message});
    res.json({ status: 'success', message: 'Message received!' });
});

app.listen(PORT, () => {
