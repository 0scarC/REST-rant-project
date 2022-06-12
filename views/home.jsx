const React = require(`react`)
const Def = require(`./default`)

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/weird-burger-unsplash.jpg" alt="Some weird burger and fries combo"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@goodeats_yqr">GoodEats YQR</a> on <a href="https://unsplash.com/photos/bMvXpKuRN3g">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home