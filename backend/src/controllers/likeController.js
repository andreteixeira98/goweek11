const Tweet = require('../models/tweet');
//const { store } = require('./tweetController');

module.exports = {

    // dar like em um tweet
    async store(req, res){
        const tweet = await Tweet.findById(req.params.id);
        tweet.set({likes: tweet.likes + 1});

        await tweet.save();
        req.io.emit('like',tweet);

        return res.json(tweet);
    },
}