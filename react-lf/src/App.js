import React, { Component } from 'react';
import './App.css';
import fetchUserData from "./services/fetchUserData"
import { Header } from './components/header';
import { Footer } from './components/footer';
import Main from './services/main';
import About from './components/About';
import { Switch, Route } from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users1: [],
      users2: [],
      listView: !!(JSON.parse(localStorage.getItem('state'))), /*localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state'))*/
      inputVisible: true,
      about: true,
      time: parseInt((new Date().getTime() / 1000).toFixed(0))
    }
  }
  gridView = (event) => {
    this.setState((item) => {
      localStorage.setItem('state', JSON.stringify(!item.listView))

      return { listView: !this.state.listView }

    })
  }

  calculateTime = () => {
    const newTime = parseInt((new Date().getTime() / 1000).toFixed(0));
    const dif = newTime - this.state.time;
    this.state.time = newTime;

    if (dif > 3600) {
      return "" + (dif / 3600).toFixed(0) + " hours"
    }
    else if (dif > 60) {
      return "" + (dif / 60).toFixed(0) + " minutes"
    }
    else
      return "" + (dif).toFixed(0) + " seconds"

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
          inputVisible: false,

        })
        this.calculateTime()
      })
  }

  aboutPage = () => {
    this.setState((obj) => {
      return { about: !this.state.about }
    })
  }


  genStatistic = () => {
    let g = {
      male: 0,
      female: 0
    }
    this.state.users1.forEach(elem => {
      if (elem.gender == 'male')
        g.male++;
      else
        g.female++
    });
    return g;
  }

  searchUsers = (event) => {
    this.setState({
      users2: this.state.users1.filter((user) => (user.name.toLowerCase().includes(event.target.value.toLowerCase())))
    })

  }
  render() {
    return (
      <>
        <Header event={this.gridView} reload={this.fetchUsers} about={this.aboutPage} />
        {/* <div hidden={this.state.about}> */}
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/' component={()=><Main users={this.state.users2} list={this.state.listView} users1={this.state.users1} search={this.searchUsers}
          male={this.genStatistic().male} female={this.genStatistic().female}/>}/>
          </Switch>
        {/* </div>
        <div hidden={!this.state.about} className="row grid">
          <input hidden={this.state.inputVisible} onChange={this.searchUsers} type="search" className="input" placeholder="Search" ></input>
          <p className="genStat offset-8">Male: {this.genStatistic().male} Female: {this.genStatistic().female}</p>
          <Main users={this.state.users2} list={this.state.listView} users1={this.state.users1} />
        </div> */}
        <Footer time={this.calculateTime()} />
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