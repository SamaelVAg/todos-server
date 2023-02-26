const express = require('express');
const todosRoutes = require('./routes/todos.routes');
const db = require('./utils/database');
const initModels = require('./models/initModels');

const PORT = 8000;

initModels();

db.authenticate()
    .then(() => console.log('DB conenction succesfully'))
    .catch((error) => console.log(error));

db.sync()
    .then(() => console.log('Synced DB'))
    .catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get('/', (req, res) => {
    res.send('Server working');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});