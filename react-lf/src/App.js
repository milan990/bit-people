import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users1: []
    }
  }
  componentDidMount() {
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
        <Header />
        <Main users={this.state.users1} />

        <Footer />
      </>
    );
  }
}

export default App;
