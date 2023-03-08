const { Schema, model } = require('mongoose');
// const friendSchema = require('./Friend');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please use a valid email address']
        },
        thoughts: [thoughtSchema],
        friends: [userSchema]
    },
    {
        toJSON: {
            getters: true,
        }
    }
)

userSchema
    .virtual('friendCount')
    .get(function () {
        //what to put here
    })
    .set(function () {

    })

const User = model('user', userSchema)

module.exports = User