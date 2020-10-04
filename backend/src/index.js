const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://goweek11:goweek11@cluster0.fudtp.mongodb.net/goweek11?retryWrites=true&w=majority',{
    useUnifiedTopology: true, useNewUrlParser: true
})

app.use((req, res, next) =>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));
/*app.get('/', (req, res)=>{
    return res.send('hello world');
});*/

server.listen(3000, ()=>{
    console.log('server started on port 3000');
});