const mongoose = require('mongoose')
const  Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    spring: [{
        freeheight: {
            type: Number
        },
        ladenheight: {
            type: Number
        },
        clampheight: {
            type: Number
        },
        rate: {
            type: Number
        },
        designhoad: {
            type: Number
        },
        deflection: {
            type: Number
        },
        travelmtom: {
            type: Number
        },
        travelJounce: {
            type: Number
        },
        travelrebound: {
            type: Number
        }
    }],

    vehicle: [{
        series:{
            type: String
        },
        firstaxledesignpnine:{
            type: Number
        },
        secondaxledesignpnine:{
            type: Number
        },
        thirdaxledesignpnine:{
            type: Number
        },
        fourthaxledesignpnine:{
            type: Number
        },
        firstaxleunsprungmass:{
            type: Number
        },
        secondaxleunsprungmass:{
            type: Number
        },
        rearaxleunsprungmass:{
            type: Number
        }
    }],

    name: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [ 
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema)