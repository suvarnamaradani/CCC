const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    res.send(`Registration successful! Welcome, ${username}`);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
