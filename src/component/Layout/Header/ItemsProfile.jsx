import { Menu } from "antd";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";
import profileAction from "../../../store/actions/profileAction";

const ItemsProfile = ({ history }) => {
  return (
    <Menu className={classes.menu} style={{ backgroundColor: "#051421" }}>
      <Menu.Item className={classes.item} style={{ color: "#E5E7EB" }}>
        <button
          onClick={() => {
            profileAction.logOut(history);
          }}
        >
          Logout
        </button>
      </Menu.Item>
      <Menu.Item className={classes.item} style={{ color: "#E5E7EB" }}>
        <Link to="/watch-list"> Watch List</Link>
      </Menu.Item>
      <Menu.Item className={classes.item} style={{ color: "#E5E7EB" }}>
        <Link to="/favorite-list"> Favorite List</Link>
      </Menu.Item>
      <Menu.Item className={classes.item} style={{ color: "#E5E7EB" }}>
        <Link to="/profile"> Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

export default ItemsProfile;
