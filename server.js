const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const items = []


app.post('/api/configurations', (req, res) => {
    // Обработка и сохранение данных
    items.push(req.body);
    //  код для сохранения данных
    res.status(200).json({ message: 'Конфигурация сохранена успешно' });
});


app.get('/api/configurations', (req, res) => {
    const newItems = items.map(item => {
        return {
            ...item,
            count: 1
        }
    })
    res.status(200).json(newItems);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});