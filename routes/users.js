const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

router.get('/users', async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({
            messagge: 'Errore interno del server'
        })
    }
})

//post su un database SEMPRE asincrona
router.post('/users/new', async (req, res) => {
    const user = new UsersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    })

    try {
        const newUser = await user.save();
        res.status(200).send({
            messege: 'Utente salvato con successo del database',
            payload: newUser //scopo indicativo MAI dati sensibili
        })
    } catch (error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }

})

router.patch('/users/:id', async (req, res) => {
    const { id } = req.params; //id destrutturato
    const userExist = await UsersModel.findById(id)

    if (!userExist) {
        return res.status(404).send({
            message: "Utente inesistente"
        })
    }
    try {
        const userId = id;
        const dataUpdated = req.body;
        const options = { new: true }

        const result = await UsersModel.findByIdAndUpdate(userId, dataUpdated, options)
        res.status(200).send({
            message: "Utente aggiornato con successo",
            payload: result
        })
    } catch (error) {
        res.status(500).send({
            message: "Errore interno del server"
        })
    }
})

router.delete('/users/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UsersModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({
                message: "Nessun utente con questo id"
            })
        }

        res.status(200).send({
            message: "Utente con id ${id} cancellato correttamente dal database"
        })
    } catch (error) {
        res.status(500).send({
            message: "Errore interno del server"
        })
    }
})


module.exports = router;