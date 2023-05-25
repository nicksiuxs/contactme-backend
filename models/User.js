const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    // 0 Admin / 1 User / 2 Provider
    type: {
        type: Number,
        require: true
    },
},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
);

UserSchema.virtual("Posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user",
    justOne: false
})

module.exports = model('User', UserSchema);