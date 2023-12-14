const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    phNo: {
        type: Number,
        unique:true,
        default: 0,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    vaccines: [{
        type: mongoose.Types.ObjectId,
        ref: 'Vaccines',
        sparse: true,
    }]
});

module.exports = mongoose.model('Users', UserSchema);
