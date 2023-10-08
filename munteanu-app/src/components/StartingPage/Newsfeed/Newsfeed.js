import { Link } from 'react-router-dom';
import { useState } from 'react';

import classes from './Newsfeed.module.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsSection from './Comments/CommentsSection';


const Newsfeed = (props) => {

    const [isLiked, setIsLiked] = useState(false);
    const [like, setLikes] = useState(Math.floor(Math.random() * 100));
    const [shares, setShares] = useState(Math.floor(Math.random() * 100));
    const [isShared, setIsShared] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1);
        } else {
            setLikes(prevState => prevState - 1);
            // daca avem un singur parametru parantezele sunt optionale
            // daca expresia este scrisa pe o singura linie, returnul este implicit si {} pot sa lipseasca
            // setLikes( (prevState) => {
            //     return prevState - 1;
            // });
        }
        setIsLiked(prevState => !prevState)
    }

    const handleShare = () => {
        if (!isShared) {
            setShares(prevState => prevState + 1)
        } else {
            setShares(prevState => prevState - 1)
        }
        setIsShared(prevState => !prevState)
    }

    return <>
        <div className={classes.mainPost}>

            <div className={classes.userInfo}>
                <div className={classes.userInfoContainer}>
                    <Link to='/me'>
                        <img src={require('./assets/profile.jpg')}
                            alt='Profile Picture'
                            className={classes.profilePictureImg}>
                        </img>
                    </Link>
                    <Link to='/me'>
                        Munteanu Nicolae
                    </Link>
                </div>

                <div className={classes.contextMenu}>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>

            </div>

            <div className={classes.content}>

                <p>{props.postData.title}</p>

                <div className={classes.imageWrapper}>
                    <img src={require(`./assets/post${props.postData.id % 2}.jpg`)}
                        className={classes.mainPostImage}>
                    </img>
                    <div className={classes.infoIcon}>
                        <InfoIcon fontSize='large'></InfoIcon>
                    </div>
                </div>

                <p>{props.postData.body}</p>
            </div>

            <div className={classes.reacts}>
                <div className={classes.likesNumber}>
                    <ThumbUpIcon />
                    <span className={classes.reactsCount}>{like}</span>
                </div>
                <div className={classes.sharesNumber}>
                    <ReplyIcon />
                    <span className={classes.reactsCount}>{shares}</span>
                </div>
            </div>

            <hr></hr><hr />

            <div className={classes.reactsActions}>
                <div className={`${classes.reaction} ${isLiked && classes.blue}`} onClick={handleLike}>
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className={classes.reaction}>
                    <CommentIcon></CommentIcon>
                    <span>Comment</span>
                </div>
                <div className={`${classes.reaction} ${isShared && classes.blue}`} onClick={handleShare}>
                    <ReplyIcon />
                    <span>Share</span>
                </div>
            </div>

            <div className={classes.commentContainer}>
                <CommentsSection></CommentsSection>
            </div>

        </div>
    </>
}

export default Newsfeed;