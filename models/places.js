//Original data format 
//module.exports = [{
//     name: `H-Thai-ML`,
//     city: `Seattle`, 
//     state: `WA`,
//     cuisines: `Thai, Pan-Asian`,
//     pic: `/images/storefront-unsplash.jpg`,
//     // unsplash https://unsplash.com/photos/t2_w4MeSIfI | photographer https://unsplash.com/@lucadeasti
// }, {
//     name: `Coding Cat Cafe`,
//     city: `Phoenix`,
//     state: `AZ`,
//     cuisines: `Coffee, Bakery`,
//     pic: `/images/weird-burger-unsplash.jpg`,
//     //unsplash https://unsplash.com/photos/JN9DY0YswzE | photographer https://unsplash.com/@wulcan
// }]

//MongoDB Data format
const mongoose = require(`mongoose`)

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {type: Number}
})

module.exports = mongoose.model(`Place`, placeSchema)