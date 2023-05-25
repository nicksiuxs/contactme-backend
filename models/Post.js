const { Schema, model } = require("mongoose");

const PostSchema = Schema({
    title: {
        type: String,
        require: true
    },
    specialization: {
        type: String,
        require: true
    },
    subspecialization: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    keywords: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

PostSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Post', PostSchema);