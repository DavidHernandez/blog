/**
 * Contains spec/post-view-spec
 * It tests the view for posts.
 */

describe("A post when it's loaded", function() {
    var request = require('http');

    it("will contain the post data when it exists", function(done) {
        request.get('http://localhost:3000/api/post/1', function(response) {
            expect(response.statusCode).toBe(200);

            var json = '';

            response.on('data', function (chunk) {
                json += chunk;
            });

            response.on('end', function() {
                var data = JSON.parse(json);

                expect(data.title).not.toBe(undefined);
                expect(data.id).not.toBe(undefined);
                expect(data.date).not.toBe(undefined);
                expect(data.text).not.toBe(undefined);

                done();
            });
        });
    });

    it("will show a not-found page when the post does not exists", function(done) {
        request.get('http://localhost:3000/api/post/2', function(response) {
            expect(response.statusCode).toBe(404);

            done();
        });
    });
});
