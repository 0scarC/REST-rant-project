const React = require(`react`)
const Def = require(`./default`)

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Probably my fault, but we can't find the page</p>
            </main>
        </Def>
    )
}

module.exports = error404