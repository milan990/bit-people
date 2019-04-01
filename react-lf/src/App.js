import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';
import GridView from "./components/gridview"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users1: [],
      listView: true
    }
  }
  gridView = (event) => {
    this.setState({
      listView: !this.state.listView
    })
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetchUserData()
      .then((users) => {
        this.setState({
          users1: users
        })
      });
  }

  render() {
    return (
      <>
        <Header event={this.gridView} reload={this.fetchUsers} />
        <div className="row grid">
          <Main users={this.state.users1} list={this.state.listView} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
