const React = require(`react`)
const Def = require(`../default`)

function show(data) {
    var comments = (
        <h3 className="inactive">
            No comments yet
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? `Rant` : `Rave`}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt="Clicked place img"></img>
                        <h3>{data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <div>
                            <h5>{data.place.showEstablished()}</h5>
                            <h3>Serves {data.place.cuisines}</h3>
                        </div>
                        <div>
                            <h3>Rating</h3>
                            Currently unrated
                        </div>
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                    <hr></hr>
                    <div>
                        <h3>Comments</h3>
                        {comments}
                    </div>
            </main>
        </Def>
    )
}

module.exports = show