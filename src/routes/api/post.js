var express = require('express');
var router = express.Router();
var app = module.exports = express();

var PostRepository = require('../../app/post-repository.js');

var StorageStub = require('../../spec/storage-stub.js');

router.get('/api/post/:post', function(req, res, next) {
    var storage = new StorageStub();

    var repository = new PostRepository(storage);
    var post = repository.loadById(req.params.post);

    if (post.title != undefined) {
        res.json(post);
    }
    else {
        res.status(404).send();
    }
});

module.exports = router;
