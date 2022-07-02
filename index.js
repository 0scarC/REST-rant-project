//Modules and Globals
//npm i express
//npm i react
//npm i express-react-views
//npm i method-override
//can do npm i express react express-react-views

require(`dotenv`).config()
const express = require(`express`)
const methodOverride = require(`method-override`)
const app = express()

//Express Settings
app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride(`_method`))

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