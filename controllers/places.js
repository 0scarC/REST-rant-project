const router = require(`express`).Router()
const places = require(`../models/places.js`)

router.get(`/`, function(req, res) {
    res.render(`places/index`, {places})
})

router.get(`/new`, function(req, res) {
    res.render(`places/new`)
})

router.post(`/`, function(req, res) {
    if (!req.body.pic) {
        //Default img
        req.body.pic = `http://placekitten.com/400/400`
    }
    if (!req.body.city) {
        req.body.city = `Anytown`
    }
    if (!req.body.state) {
        req.body.state = `USA`
    }
    places.push(req.body)
    res.redirect(`/places`)
})

module.exports = router