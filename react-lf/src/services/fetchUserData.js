// import React from "react"
import userObj from '../entities/userObj'


const fetchUserData = () => {
    return fetch("https://randomuser.me/api/?results=25")
        .then(users => users.json())
        .then((user) => {
            const obj = user.results.map(elem => (
                new userObj(
                    elem.gender,
                    elem.name,
                    elem.email,
                    elem.dob.date,
                    elem.picture.thumbnail,
                    elem.picture.large,
                    elem.login.username,
                )
            ));
            return obj;
        })
}

export default fetchUserData