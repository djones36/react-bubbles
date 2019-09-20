import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item>
        <NavLink to="/protected">Bubbles Page</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          onClick={() => {
            localStorage.removeItem("token");
            window.location = "/";
          }}
        >
          Remove Token
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
