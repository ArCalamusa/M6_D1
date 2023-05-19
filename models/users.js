const mongoose = require('mongoose')

//creazione schema per buona pratica con la maiuscola
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        default: 'user'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
        default: 'user'
    },
    age: {
        type: Number,
        required: false,
        default: 0
    },
}, {
    timestamps: true, //ogni volta che un utente viene salvato avrà data di creazione e modifica
    strict: true //accetterà solo un utente con lo schema definito non altro
})

module.exports = mongoose.model('UsersModel', UserSchema, 'users')
//esportazione chiede 3 parametri: nome modello, lo schema e la collection ovvero la tabella in cui dev'essere salvato su mongoDB
