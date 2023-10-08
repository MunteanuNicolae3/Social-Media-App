import classes from "./profile.module.scss";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const Profile = () => {
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.leftSide}>
          {" "}
          <LeftSide />
        </div>
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className={classes.profileUserImg}
                src="assets/person/7.jpg"
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>Munteanu Nicolae</h4>
              <span className={classes.profileInfoDesc}>Hello my friends!</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <RightSide profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
