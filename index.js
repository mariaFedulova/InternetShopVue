const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const moment = require('moment');
const fs = require('fs');
const app = express();

app.listen('3000', () => {
    console.log('Server is running')
})

app.use(express.static('.'));
app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.get('/catalogData', (req, res) => {
    fs.readFile('./json/data.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.get('/cartData', (req, res) => {
    fs.readFile('./json/cart.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('./json/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            if (cartItem) {
                cartItem.count += 1;
            } else {
                item.count = 1;
                cart.push(item);
            }

            fs.writeFile('./json/cart.json', JSON.stringify(cart), (err) => {
                if (err)
                    res.send('{"result": 0}');
            });
        }
    });

    fs.readFile('./json/stats.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const stats = JSON.parse(data);
            const time = moment();
            const record = { item: req.body.title, action: 'added', time: time }

            stats.push(record);

            fs.writeFile('./json/stats.json', JSON.stringify(stats), (err) => {
                if (err)
                    res.send('{"result": 0}');
            });
        }
    })
});

app.delete('/deleteFromCart', (req, res) => {
    fs.readFile('./json/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            let cart = JSON.parse(data);
            const item = req.body;

            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            if (cartItem.count > 1)
                cartItem.count -= 1;
            else
                cart = cart.filter(cartItem => cartItem.id !== item.id);

            fs.writeFile('./json/cart.json', JSON.stringify(cart), (err) => {
                if (err) res.send('{"result": 1}');
                else res.send('{"result": 0}');
            });
        }
    });

    fs.readFile('./json/stats.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const stats = JSON.parse(data);
            const time = moment();
            const record = { item: req.body.title, action: 'deleted', time: time }

            stats.push(record);

            fs.writeFile('./json/stats.json', JSON.stringify(stats), (err) => {
                if (err)
                    res.send('{"result": 0}');
            });
        }
    })
})