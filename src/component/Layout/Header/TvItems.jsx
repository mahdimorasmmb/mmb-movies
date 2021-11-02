import { Menu } from "antd";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";

const TvItems = (
  <Menu className={classes.menu} style={{ backgroundColor: "#051421" }}>
    <Menu.Item className={classes.item}>
      <Link to="/popular-tv">Popular TV</Link>{" "}
    </Menu.Item>
    <Menu.Item className={classes.item}>
      <Link to="/top-rated-tv">Top Rated TV</Link>{" "}
    </Menu.Item>
    <Menu.Item className={classes.item}>
      <Link to="/airing-today-tv">Airing Today</Link>{" "}
    </Menu.Item>
    <Menu.Item className={classes.item}>
      <Link to="/on-the-air-tv">On The Air</Link>{" "}
    </Menu.Item>
  </Menu>
);
export default TvItems;
