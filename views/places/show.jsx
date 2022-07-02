const React = require(`react`)
const Def = require(`../default`)

function show(data) {
    console.log(data.id)
    return (
        <Def>
            <main>
                <div>
                    <h1>{data.place.name}</h1>
                    <h3>{data.place.city}, {data.place.state}</h3>
                    <img src={data.place.pic} alt="Clicked place img"></img>
                </div>
                <div>
                    <h3>Serves {data.place.cuisines}</h3>
                </div>
                <div>
                    <h3>Rating</h3>
                    Currently unrated
                </div>
                <div>
                    <h3>Comments</h3>
                    Currently no comments
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show