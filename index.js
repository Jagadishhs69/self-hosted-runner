const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello from Node.js');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
