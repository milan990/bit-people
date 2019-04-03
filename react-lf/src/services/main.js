import React from 'react';

// const Main = (users) => (
//     <p>{console.log(users)}</p>
// )


const Main = (props) => {

    if (!props.users1.length) {
        return (
            <>
                <div>
                    <br />
                    <h1>Loading...</h1>
                </div>
                <div className="spinner"></div>
            </>
        )
    }
    if (!props.users.length) {
        return (
            <>
                <img className="noResult" src="https://i.ebayimg.com/images/g/fFsAAOSwroZas79w/s-l300.jpg" />
                <h2 className="col-12">We couldn't find any people matching your search</h2>
            </>
        )
    }

    const postsListJSX =
    <div className = "row grid">
     <input  onChange={props.search} type="search" className="input" placeholder="Search" ></input>
    <p className="genStat offset-8">Male: {props.male} Female: {props.female}</p>
    {props.users.map(user => (
        <div className={`${user.gender} users col-12`} key={user.loginName} >
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <img className='avatar' src={user.picture} alt="users" />
                    <span className="card-title">{user.name}</span>
                    <p><span> &#9993;</span> {user.email}</p>
                    <p><span> &#127874;</span> {user.dobDate}</p>
                    {/* <p></p> */}
                </div>
            </div>
            {/* </div> */}

        </div >


    ))}
    </div>
    const postsGridJSX = 
    <div className="row grid">
     <input  onChange={props.search} type="search" className="input" placeholder="Search" ></input>
    <p className="genStat offset-8">Male: {props.male} Female: {props.female}</p>
    {props.users.map(user => (
        <div className={`${user.gender} users col-4`} key={user.loginName} >
            <div className="card">
                <div className="card-image">
                    <img className='avatar' src={user.picture2} alt="users" />
                    <span className="card-title">{user.name}</span>
                </div>
                <div className={`card-content ${user.gender}`}>
                    <p> &#9993; {user.email}</p>
                    <p>&#127874; {user.dobDate}</p>
                </div>
            </div>
        </div>



    )
    )}
    </div>
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