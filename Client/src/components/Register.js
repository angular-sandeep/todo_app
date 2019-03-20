import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: "",
          password: "",
          team: "",
          userStatus: false,

          teams: ['Team A', 'Team B', 'Team C'],
        };
    }
    
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    
    onRegister(e) {
        //const history = this.props.history;
    
        let register = {
          UserName: this.state.userName,
          Password: this.state.password,
          Team: this.state.team
        };
    
        console.log(register);
        
        // this.service
        //   .isAuthenticate(user)
        //   .then(res => res.json())
        //   .then(resp => {
        //     if (resp.status === 401) {
        //       this.setState({ loginStatus: true });
        //     } 
        //     else {
        //       localStorage.setItem("token", resp.token);
        //       history.push("/admin-dashboard");
        //     }
        //   })
        //   .catch(err => console.log(err));
      }

      render() {
    return (
        <div className="container bg-light login login">
        <div className=" row  justify-content-center align-items-center">
          <div className="col-md-7">
            <h1 className="text-center">Register Page</h1>
            <hr />
            { this.state.userStatus && (
              <span className="alert alert-danger col-md-12 row align-items-center" role="alert">
                Username is already exist
              </span>
            )}
            <form>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChange.bind(this)}
                  placeholder="user name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange.bind(this)}
                  placeholder="*****************"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                  <label htmlFor="team">
                    Team
                  </label>
                  <select
                    className="form-control"
                    id="team"
                    onChange={this.onChange.bind(this)}
                    name="team"
                  >
                  <option defaultChecked value="">Please select team</option>
                    {this.state.teams.map((value, idx) => (
                      <option value={value} key={idx}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onRegister.bind(this)}
              >
                Register
              </button>
            </form>
            <div>
              <Link className="nav-link" to="/">
                You do already have account? Login
              </Link>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
