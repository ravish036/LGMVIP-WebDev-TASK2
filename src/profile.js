import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img src="https://i.gifer.com/QPb.gif" alt="Loading.."></img>
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <p className="ava">Count : {user.id}</p>
          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name"> 
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">Email : {user.email}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Users;