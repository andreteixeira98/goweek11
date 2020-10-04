const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/tweetController');

const likeController =  require('./controllers/likeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id',likeController.store);
/*routes.get('/', (req,res)=>{ 
    return res.send('hello world'); 
});*/

module.exports = routes;