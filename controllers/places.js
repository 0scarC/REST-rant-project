const router = require(`express`).Router()
const places = require(`../models/places.js`)
const db = require(`../models`)

router.get(`/`, function(req, res) {
    db.Place.find()
        .then(places => {
            res.render(`places/index`, {places})
        })
        .catch(err => {
            console.log(`err`, err)
            res.render(`error404`)
        })
})

router.get(`/new`, function(req, res) {
    res.render(`places/new`)
})

router.get(`/:id`, function(req, res) {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render(`places/show`, {place})
        })
        .catch(err => {
            console.log(`err`, err)
            res,render(`error404`)
        })
})

router.get(`/:id/edit`, function(req, res) {
    var id = Number(req.params.id)
    if (isNaN(id)) {
        res.render(`error404`)
    } else if (!places[id]) {
        res.render(`error404`)
    } else {
        res.render(`places/edit`, { place: places[id], id})
    }
})

router.put(`/:id`, function(req, res) {
    var id = Number(req.params.id)
    if (isNaN[id]) {
        res.render(`error404`)
    } else if (!places[id]) {
        res.render(`error404`)
    } else {
        //Default for info not available
        if (!req.body.pic) {
            req.body.pic = `http://placekitten.com/400/400`
        }
        if (!req.body.city) {
            req.body.city = `Anytown`
        }
        if (!req.body.state) {
            req.body.state = `USA`
        }
        //save new data
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

router.post(`/`, function(req, res) {
    db.Place.create(req.body)
        .then(() => {
            res.redirect(`/places`)
        })
        .catch(err => {
            if (err && err.name == `ValidationError`) {
                var message = `Validation Error: `
                for (var field in err.errors) {
                    message += `${field} was invalid. ${err.errors[field].message}`
                }
                res.render(`places/new`, {message})
            } else {
                res.render(`error404`)
            }
        })
})

router.delete(`/:id`, function(req, res) {
    var id = Number(req.params.id)
    if (isNaN(id)) {
        res.render(`error404`)
    } else if (!places[id]) {
        res.render(`error404`)
    } else {
        places.splice(id, 1)
        res.redirect(`/places`)
    }
})

module.exports = router