const   Tweet = require('../models/tweet');

module.exports = {
    //listar tweet
    async index(req,res){
        const tweets = await  Tweet.find({}).sort("-createdAt");
        return res.json(tweets);
    },
    //criar tweets
    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet',tweet);
        
        return res.json(tweet);

    },
}
