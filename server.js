const express = require('express')
const mongoose = require('mongoose')
const PORT = 5050; //porta locale

const usersRoute = require('./routes/users')
//per avere accesso ai metodi express
const postsRoute = require('./routes/posts')


const app = express();

//middleware
app.use(express.json()) //legge il body formato .json

//router
app.use('/', usersRoute);
app.use('/', postsRoute);

mongoose.connect('mongodb+srv://manciko08:jozDdjLwoD1s3L8J@m6backend.qxvmfkg.mongodb.net/', {
    //oggetti di configuarazione richiesti da documentazione
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
//ascolta eventuali errori
db.on('error', console.error.bind(console, "Errore di connessione al database"))
//a connessione aperta console.log e restituisce info connessione
db.once('open', () => {
    console.log('database connesso correttamente')
})



app.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`))