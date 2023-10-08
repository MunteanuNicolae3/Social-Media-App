import classes from "./FriendsList.module.scss";

const FriendsList = ({user}) => {
  return (
    <li className={classes.sidebarFriend}>
      <img className={classes.sidebarFriendImg} src={user.profilePicture} alt="" />
      <span className={classes.sidebarFriendName}>{user.username}</span>
    </li>
  );
}


export default FriendsList;