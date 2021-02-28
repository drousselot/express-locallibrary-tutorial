var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchemas = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlenght: 100},
    }
);

GenreSchemas
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchemas);