const router = require(`express`).Router()

router.get(`/`, function(req, res) {
    var places = [{
        name: `H-Thai-ML`,
        city: `Seattle`,
        state: `WA`,
        cuisines: `Thai, Pan-Asian`,
        pic: `/images/storefront-unsplash.jpg`,
        // unsplash https://unsplash.com/photos/t2_w4MeSIfI | photographer https://unsplash.com/@lucadeasti
    }, {
        name: `Coding Cat Cafe`,
        city: `Phoenix`,
        state: `AZ`,
        cuisines: `Coffee, Bakery`,
        pic: `/images/weird-burger-unsplash.jpg`,
        //unsplash https://unsplash.com/photos/JN9DY0YswzE | photographer https://unsplash.com/@wulcan
    }]
    res.render(`places/index`, {places})
})

module.exports = router