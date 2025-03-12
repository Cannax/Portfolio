const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post('/contact', (req, res) => {
    console.log('New message:', req.body);
    res.sendStatus(200);
});
app.listen(3000, () => console.log('Server running on port 3000'));
