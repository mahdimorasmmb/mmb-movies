import { Menu } from "antd";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";

const CelebritiesItem = (
  <Menu style={{ backgroundColor: "#051421" }} className={classes.menu}>
    <Menu.Item className={classes.item}>
      <Link to="/people-popular">Popular</Link>{" "}
    </Menu.Item>
  </Menu>
);

export default CelebritiesItem;
