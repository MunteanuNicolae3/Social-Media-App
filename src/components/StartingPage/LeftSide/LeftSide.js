import classes from "./LeftSide.module.scss";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../SyntheticData";
import FriendsList from "../FriendsList/FriendsList";
import { useState } from "react";

const LeftSide = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <ul
          className={`${classes.sidebarList} ${
            showMore ? classes["close"] : {}
          }`}
        >
          <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Feed</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Chat className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Chats</span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircleFilledOutlined className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Videos</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Group className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Groups</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Bookmark className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={classes.sidebarListItem}>
            <HelpOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Questions</span>
          </li>
          <li className={classes.sidebarListItem}>
            <WorkOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Jobs</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Event className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Events</span>
          </li>
          <li className={classes.sidebarListItem}>
            <School className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button
          className={classes.sidebarButton}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show more" : "Close"}
        </button>
        <hr className={classes.sidebarHr} />
        <ul className={classes.sidebarFriendList}>
          {Users.map((u) => (
            <FriendsList key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
