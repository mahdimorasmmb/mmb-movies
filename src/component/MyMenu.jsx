import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, version } from "antd";
import Icon from "antd/lib/icon";

const MenuItem = ({ route, icon, children }) => (
  <Menu.Item key={route}>{children}</Menu.Item>
);

const MyMenu = () => (
  <div className="App">
    <Menu mode="inline">
      <MenuItem route="/" icon="dashboard">
        Dashboard
      </MenuItem>
      <MenuItem route="/transactions" icon="bars">
        Transactions
      </MenuItem>
      <MenuItem route="/groups" icon="team">
        Groups
      </MenuItem>
      <MenuItem route="/account" icon="idcard">
        Account
      </MenuItem>
    </Menu>
  </div>
);
export default MyMenu;
