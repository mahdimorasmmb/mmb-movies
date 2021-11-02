import { Menu } from "antd";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SubMenu from "antd/lib/menu/SubMenu";
import SearchIcon from "@mui/icons-material/Search";

const MovieItemMobile = ({ setIsModalVisible }) => {
  return (
    <Menu
      style={{ backgroundColor: "#051421" }}
      mode="inline"
      className={classes.menu}
    >
      <SubMenu key="sub1" icon={<MovieIcon />} title="MOVIE">
        <Menu.Item className={classes.item}>
          <Link to="/popular-movie">Popular Movie</Link>
        </Menu.Item>
        <Menu.Item className={classes.item}>
          <Link to="/top-rated-movie">Top Rated</Link>{" "}
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<LiveTvIcon />} title="TV">
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
      </SubMenu>
      <Menu.Item
        onClick={setIsModalVisible}
        key="sub4"
        icon={<SearchIcon />}
        title="SEARCH"
      ></Menu.Item>
    </Menu>
  );
};

export default MovieItemMobile;
