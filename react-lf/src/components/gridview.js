import React from "react"

const Gridview = (props) => (

    props.users.map(user => (
        <div className="row grid">
            <div className="col-4">
                <div class="card">
                    <div class="card-image">
                        <img className='avatar' src={user.picture2} />
                        <span class="card-title">{user.name}</span>
                    </div>
                    <div class="card-content">
                        <p> &#9993; {user.email}</p>
                        <p>&#127874; {user.dobDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    )
)
export default Gridview