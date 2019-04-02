import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';
import GridView from "./components/gridview";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users1: [],
            users2: [],
            listView: !!(JSON.parse(localStorage.getItem('state'))), /*localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state'))*/
            inputVisible: false,
        }
    }
    GridView = (event) => {
        this.setState((item) => {
            localStorage.setItem('state', JSON.stringify(!item.listView))

            return { listView: !this.state.listView }

        })
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        fetchUserData()
            .then((users) => {
                this.setState({
                    users1: users,
                    users2: users
                })
            })
    }
    searchUsers = (event) => {
        // this.setState({
        //   nameSearch: event.target.value
        // })
        this.state.users2 = this.state.users1.filter((user) => {
            return user.name.indexOf(event.target.value) !== -1
        })
    }
    render() {
        return (
            <>
                <Header event={this.gridView} reload={this.fetchUsers} />
                <div className="row grid">
                    <input onChange={this.searchUsers} type="search" className="col-10 input" ></input>
                </div>
                <Main users={this.state.users2} list={this.state.listView} />

                <Footer />
            </>
        )
    }
}

export default App;
