/**
 * Contains a Post model.
 */

const _storage = Symbol('storage');

class Post {
    constructor(anStorage) {
        this[_storage] = anStorage;
    }

    create(aTitle) {
        var currentDate = new Date();

        this.title = aTitle;
        this.text = "";
        this.date = currentDate.getTime();
    }

    setTitle(aTitle) {
        this.title = aTitle;
    }

    setText(aText) {
        this.text = aText;
    }

    setDate(aDate) {
        this.date = aDate;
    }

    save() {
        var result = this[_storage].save(this);

        this.id = result.id;
    }

    load(anId) {
        var data = this[_storage].load(anId);

        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
        this.date = data.date;
    }
}

module.exports = Post;
