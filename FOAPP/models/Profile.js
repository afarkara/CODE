const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    role: {
        type: String
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)