const { Router } = require('express');
const Todos = require('../models/todos.models');

const router = Router();

router.get('/api/v1/todos', async (req, res) => {
    try{
        const todos = await Todos.findAll();
        res.json(todos);
    }catch (error) {
        res.status(400).json(error);
    };
});

router.post('/api/v1/todos', async (req, res) => {
    try{
        const newToDo = req.body;
        const result = await Todos.create(newToDo);
        res.status(201).json(result);
    }catch (error) {
        res.status(400).json(error);
    };
});

router.put('/api/v1/todos/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const data = req.body;
        await Todos.update(data, {
            where: { id },
        });
        res.status(204).send();
    }catch (error) {
        res.status(400).json(error);
    };
});

router.delete('/api/v1/todos/:id', async (req, res) => {
    try{
        const { id } = req.params;
        await Todos.destroy({
            where: { id },
        });
        res.status(204).send();
    }catch (error) {
        res.status(400).json(error);
    };
});

module.exports = router;