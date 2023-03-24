const { ObjectId } = require('bson');
const { Schema, model, Types } = require('mongoose');

//is this how to do the reactionSchema?
// const reactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: function () {
//                 return new ObjectId()
//             }
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxlength: 280,
//         },
//         //username?
//         username: {
//             type: String,
//             required: true,
//             // ref: 'user'
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             //getter for date?
//         }
//     }
// )

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (createdAtVal) => dateFormat(createdAtVal),
        },
        //this isnt right? to grab username
        username: {
            type: String,
            required: true,
            // ref: 'user'
        },

        // reactions: [reactionSchema],
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
    }
)



// thoughtSchema
//     .virtual('reactionCount')
//     .get(function () {
//         return this.reactions.length
//         //is this correct?
//     }) 
// reactionSchema
//     .virtual('formatDate')
//     //something here?

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;