import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';
import About from './components/About';
import GridView from "./components/gridview";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users1: [],
      users2: [],
      listView: !!(JSON.parse(localStorage.getItem('state'))), /*localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state'))*/
      inputVisible: true,
      about: true,
    }
  }
  gridView = (event) => {
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
          users2: users,
          inputVisible: false
        })

      })
  }

  aboutPage = () => {
    this.setState((obj) => {
      return { about: !this.state.about }
    })
  }

  searchUsers = (event) => {
    this.setState({
      users2: this.state.users1.filter((user) => (user.name.indexOf(event.target.value) !== -1))
    })
  }
  render() {
    return (
      <>
        <Header event={this.gridView} reload={this.fetchUsers} about={this.aboutPage} />
        <div hidden={this.state.about}>
          <About />
        </div>
        <div hidden={!this.state.about} className="row grid">
          <input hidden={this.state.inputVisible} onChange={this.searchUsers} type="search" className="col-10 input" ></input>
          <Main users={this.state.users2} list={this.state.listView} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App;

// (this.state.users1.filter((user) => {
//   return user.name.indexOf(event.target.value) !== -1
// }
// )
// )