/**
 * Contains spec/StorageStub
 */

class StorageStub {
    constructor() {
        // Does nothing.
    }

    save() {
        return {
            id: 1,
        }
    }

    load(id) {
        var currentDate = new Date();

        var posts = {
            1: {
                id: 1,
                title: "This is a title",
                date: currentDate.getDate(),
                text: "This is a text",
            }
        };

        var post = false;

        if (posts[id]) {
            post = posts[id];
        }

        return post;
    }
}

module.exports = StorageStub;
