import React from 'react';

// const Main = (users) => (
//     <p>{console.log(users)}</p>
// )


const Main = (props) => {

    const postsListJSX = props.users.map(user => (

        <div className={`${user.gender} users col-12`} key={user.loginName} >
            <div class="card blue-grey darken-1">
                <div className="card-content white-text">
                    <img className='avatar' src={user.picture} />
                    <span className="card-title">{user.name}</span>
                    <p> &#9993; {user.email}</p>
                    <p> &#127874; {user.dobDate}</p>
                    {/* <p></p> */}
                </div>
            </div>
            {/* </div> */}

        </div >


    ))
    const postsGridJSX = props.users.map(user => (
        <div className={`${user.gender} users col-4`} key={user.loginName} >
            <div class="card">
                <div class="card-image">
                    <img className='avatar' src={user.picture2} />
                    <span class="card-title">{user.name}</span>
                </div>
                <div class={`card-content ${user.gender}`}>
                    <p> &#9993; {user.email}</p>
                    <p>&#127874; {user.dobDate}</p>
                </div>
            </div>
        </div>


    )
    )
    if (props.list === true) {
        return postsListJSX
    } else {
        return postsGridJSX
    }
}



export default Main;



// const Main = (props) => (

//     props.users.map(user => (
//         <div class="col-4">
//             <div class="card">
//                 <div class="card-image">
//                     <img className='avatar' src={user.picture2} />
//                     <span class="card-title">{user.name}</span>
//                 </div>
//                 <div class="card-content">
//                     <p> &#9993; {user.email}</p>
//                     <p>&#127874; {user.dobDate}</p>
//                     {/* <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p> */}
//                 </div>
//             </div>
//         </div>

//     )
//     )
// )