import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <field>
          UserName
          <input type="text" name={"username"} placeholder="username" />
        </field>
        <field>
          password
          <input type="password" name={"password"} placeholder="password" />
        </field>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
