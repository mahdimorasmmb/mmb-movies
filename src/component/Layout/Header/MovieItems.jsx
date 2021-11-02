import { Menu } from "antd";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";

const MovieItems = (
  <Menu style={{ backgroundColor: "#051421" }} className={classes.menu}>
    <Menu.Item className={classes.item}>
      <Link to="/popular-movie">Popular Movie</Link>
    </Menu.Item>
    <Menu.Item className={classes.item}>
      <Link to="/top-rated-movie">Top Rated</Link>{" "}
    </Menu.Item>
  </Menu>
);

export default MovieItems;
