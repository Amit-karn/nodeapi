const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Model',schema)