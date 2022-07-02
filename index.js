//Modules and Globals
//npm i express
//npm i react
//npm i express-react-views
//can do npm i express react express-react-views

require(`dotenv`).config()
const express = require(`express`)
const app = express()

//Express Settings
app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))

//Controllers and Routes
app.use(`/places`, require(`./controllers/places`))

app.get(`/`, function(req, res) {
    res.render(`home`)
    //renders home.jsx
})

app.get(`*`, function(req, res) {
    res.render(`error404`)
    //renders error404.jsx
})

//Listen for Connections
app.listen(process.env.PORT)