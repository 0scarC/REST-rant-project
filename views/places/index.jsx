const React = require(`react`)
const Def = require(`../default`)

function index(data) {
    var placesFormatted = data.places.map(function(place) {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Page</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index