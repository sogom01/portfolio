const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/projects', (req, res) => {
    res.json([
        { id: 1, name: 'Project One', description: 'My first project' },
        { id: 2, name: 'Project Two', description: 'My second project' },
    ]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
