/**
 * Contains spec/post-spec
 * It tests the post model.
 */

describe("A post", function() {
    var Post = require('../app/post.js');
    var StorageStub = require('./storage-stub.js');

    var storage = new StorageStub();
    var post = new Post(storage);

    it("contains an id, a title, an empty text by default and the current date", function() {
        post.create('This is the title');
        post.save();

        expect(post.title).toBe('This is the title');
        expect(post.id).toBe(1);

        expect(post.date).not.toBe(undefined);
        expect(post.text).not.toBe(undefined);
    });

    it("can be loaded", function() {
        post.load(1);

        expect(post.title).not.toBe(undefined);
        expect(post.id).not.toBe(undefined);
        expect(post.date).not.toBe(undefined);
        expect(post.text).not.toBe(undefined);
    });
});
