// const { Schema, model, Types } = require('mongoose');
// const thoughtSchema = require('./Thought')

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
//         username: {
//             type: String,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//         }
//     }
// )

// thoughtSchema
//     .virtual('reactionCount')
//     .get(function () {
//         return this.reactions.length
//     }) 

// const Reaction = model('Reaction', reactionSchema)


// module.exports = Reaction