import React from 'react';

// const Main = (users) => (
//     <p>{console.log(users)}</p>
// )



const Main = (props) => (

    props.users.map(user => (
        <div class="col-4">
            <div class="card">
                <div class="card-image">
                    <img className='avatar' src={user.picture2} />
                    <span class="card-title">{user.name}</span>
                </div>
                <div class="card-content">
                    <p>{user.email}</p>
                    <p>{user.dobDate}</p>
                    {/* <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p> */}
                </div>
            </div>
        </div>

    )
    )
)
// < div >
// <p>{user.name}</p>
// <p>{user.email}</p>
// <p>{user.dobDate}</p>
//         </div >

// < div className = {`${user.gender} users`} key = { user.loginName } >
//     < div className="row" >
//         {/* <div className="col s12 m6"> */}
//         <div class="card blue-grey darken-1">
//             <div className="card-content white-text">
// <img className='avatar' src={user.picture2} />
//                 <span className="card-title">{user.name}</span>
// < p > { user.email }</p>
//     <p>{user.dobDate}</p>
//                 {/* <p></p> */}
//             </div>
//         </div>
//         {/* </div> */}
//     </div >
//     </div >


{/* <div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src="images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> */}
export default Main;