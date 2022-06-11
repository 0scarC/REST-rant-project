const React = require(`react`)
const Def = require(`./default`)

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Probably my fault, but we can't find the page</p>
                <div>
                    <img src="http://placekitten.com/400/400" alt="Cute kitten to refocus attention away from the error screen"></img>
                    <div>
                        Photo courtesy of <a href="http://placekitten.com/400/400">placekitten.com</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404