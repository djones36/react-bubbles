import React, { useState } from "react";
import { axiosWithAuth } from "../utilites/AxiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const changeHandler = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const loginEvent = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginEvent}>
        <label>
          UserName
          <input
            type="text"
            name={"username"}
            placeholder="username"
            value={login.username}
            onChange={changeHandler}
          />
        </label>

        <label>
          password
          <input
            type="password"
            name={"password"}
            placeholder="password"
            value={login.password}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
