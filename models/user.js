const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')
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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
)

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
    })

const User = model('user', userSchema)

module.exports = User