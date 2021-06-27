const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Model',schema)