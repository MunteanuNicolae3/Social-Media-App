import classes from "./online.module.scss";


const Online = ({user}) => {
  return (
    <li className={classes.rightbarFriend}>
      <div className={classes.rightbarProfileImgContainer}>
        <img className={classes.rightbarProfileImg} src={user.profilePicture} alt="user" />
        <span className={classes.rightbarOnline}></span>
      </div>
      <span className={classes.rightbarUsername}>{user.username}</span>
    </li>
  );
}

export default Online;
