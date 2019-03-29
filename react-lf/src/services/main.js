import React from 'react';

// const Main = (users) => (
//     <p>{console.log(users)}</p>
// )



const Main = (props) => (

    props.users.map(user => (
        <div className={`${user.gender} users`} key={user.loginName}>
            < div className="row" >
                {/* <div className="col s12 m6"> */}
                <div class="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{user.name}</span>
                        <img className='avatar' src={user.picture} />
                        {/* <p></p> */}
                        <p>{user.email}</p>
                        <p>{user.dobDate}</p>
                    </div>
                </div>
                {/* </div> */}
            </div >
        </div>
    )
    )
)
// < div >
// <p>{user.name}</p>
// <p>{user.email}</p>
// <p>{user.dobDate}</p>
//         </div >

export default Main;