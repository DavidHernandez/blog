/**
 * Contains a PostRepository.
 */

var Post = require('./post.js');
var StorageStub = require('../spec/storage-stub.js');

const _storage = Symbol('storage');

class PostRepository {
    constructor(aStorage) {
        this[_storage] = aStorage;
    }

    loadById(anId) {
        var post = new Post(this[_storage]);

        post.load(anId);

        return post;
    }
}

module.exports = PostRepository;
