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
      listView: !!(JSON.parse(localStorage.getItem('state'))) /*localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state'))*/

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
        users1: users
      })
    })
}


render() {
  return (
    <>
      <Header event={this.gridView} reload={this.fetchUsers} />
      <div className="row grid">
        <input type="search" className="col-10 input"></input>
        <Main users={this.state.users1} list={this.state.listView} />
      </div>
      <Footer />
    </>
  )
} 
}

export default App;
