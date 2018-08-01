import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles'
import Form from "./components/Form";
import Git from "./components/Git";


const client_id = process.env.REACT_APP_USER_TOKEN
const client_secret = process.env.REACT_APP_TOKEN

class App extends Component {
  state = {
    name: undefined,
    login: undefined,
    public_repos: undefined,
    html_url: undefined,
    location: undefined,
    message: undefined
  }

  getGit = async (e) => {
    e.preventDefault()
    const login = e.target.elements.login.value
    console.log(login)
    const api_call = await fetch(`https://api.github.com/users/${login}?client_id=${client_id}&client_secret=${client_secret}`)
    const data = await api_call.json()

    this.setState({
      name: data.name,
      login: data.login,
      public_repos: data.public_repos,
      html_url: data.html_url,
      location: data.location,
      message: data.message
    })
    if(data.public_repos === 0){
      this.setState({
        public_repos: '0'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <Titles/>
                  <Form getGit = {this.getGit} />
                </div>
                <div className="col-lg-12 col-md-12">
                  <Git
                    name = {this.state.name}
                    login = {this.state.login}
                    public_repos = {this.state.public_repos}
                    html_url = {this.state.html_url}
                    location = {this.state.location}
                    message = {this.state.message}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

