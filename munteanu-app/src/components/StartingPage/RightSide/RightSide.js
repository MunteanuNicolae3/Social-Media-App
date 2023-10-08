import classes from "./RightSide.module.scss";
import { Users } from "../SyntheticData";
import Online from "../online/Online";
import { Link } from "react-router-dom";

const RightSide = ({ profile }) => {
  const HomeRightSide = () => {
    return (
      <>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src="assets/gift.png" alt="" />
          <span className={classes.birthdayText}>
            <b>Miki@</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <Link to="https://www.itschool.ro/">
          <img className={classes.rightbarAd} src="assets/ad.png" alt="" />{" "}
        </Link>
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightSide = () => {
    return (
      <>
        <h4 className={classes.rightbarTitle}>User information</h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>Bucuresti</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Romania</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>Friends</h4>
        <div className={classes.rightbarFollowings}>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/1.jpg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>
              Vladimir Putin
            </span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/2.jpg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>Klaus Iohanis</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/3.jpg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>
              Fratele Zelenski
            </span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {profile ? <ProfileRightSide /> : <HomeRightSide />}
      </div>
    </div>
  );
};

export default RightSide;
