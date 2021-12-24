import Users from "./profile";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2500
    );
  }
  
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2>EursTra</h2>
            <span><marquee class="mar" behavior="scroll" width="80%" direction="left" >The Fashion Capital</marquee></span>
            <button className="fetchbtn" onClick={this.updateState}>
              <b>Get Users</b>
            </button>
          </div>
        </nav>
        <br/><br/>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        
          
        <br/><br/>


        <footer className="footer">
        <p class="ape">Copyright © 2021 All rights reserved.<br/>     
        Created by Ravish Satwani</p>
        </footer>

        <br/><br/>
      
      </>
    );
  }
}
export default App;