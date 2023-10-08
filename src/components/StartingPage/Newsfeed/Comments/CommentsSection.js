import { useRef, useState } from 'react';

import classes from './CommentsSection.module.scss';
import { Link } from 'react-router-dom';

// https://www.mockaroo.com/
const USER_DATA = [{
    "id": 1,
    "firstName": "Arlyn",
    "lastName": "Sibille",
    "fullName": "Arlyn Sibille",
    "date": "10/24/2022",
    "profileImage": "http://dummyimage.com/245x100.png/dddddd/000000"
}, {
    "id": 2,
    "firstName": "Alix",
    "lastName": "Moan",
    "fullName": "Alix Moan",
    "date": "9/22/2022",
    "profileImage": "http://dummyimage.com/192x100.png/ff4444/ffffff"
}, {
    "id": 3,
    "firstName": "Ivie",
    "lastName": "Martindale",
    "fullName": "Ivie Martindale",
    "date": "5/20/2023",
    "profileImage": "http://dummyimage.com/245x100.png/ff4444/ffffff"
}, {
    "id": 4,
    "firstName": "Eben",
    "lastName": "Kybert",
    "fullName": "Eben Kybert",
    "date": "6/21/2023",
    "profileImage": "http://dummyimage.com/188x100.png/dddddd/000000"
}, {
    "id": 5,
    "firstName": "Tanny",
    "lastName": "Varney",
    "fullName": "Tanny Varney",
    "date": "3/6/2023",
    "profileImage": "http://dummyimage.com/228x100.png/dddddd/000000"
}, {
    "id": 6,
    "firstName": "Caro",
    "lastName": "Blachford",
    "fullName": "Caro Blachford",
    "date": "10/16/2022",
    "profileImage": "http://dummyimage.com/203x100.png/cc0000/ffffff"
}, {
    "id": 7,
    "firstName": "Halette",
    "lastName": "Devennie",
    "fullName": "Halette Devennie",
    "date": "6/25/2023",
    "profileImage": "http://dummyimage.com/121x100.png/ff4444/ffffff"
}, {
    "id": 8,
    "firstName": "Garrik",
    "lastName": "Pyson",
    "fullName": "Garrik Pyson",
    "date": "8/19/2023",
    "profileImage": "http://dummyimage.com/204x100.png/5fa2dd/ffffff"
}, {
    "id": 9,
    "firstName": "Jessalyn",
    "lastName": "Arter",
    "fullName": "Jessalyn Arter",
    "date": "3/17/2023",
    "profileImage": "http://dummyimage.com/169x100.png/dddddd/000000"
}, {
    "id": 10,
    "firstName": "Mavis",
    "lastName": "Cantor",
    "fullName": "Mavis Cantor",
    "date": "6/8/2023",
    "profileImage": "http://dummyimage.com/170x100.png/dddddd/000000"
}];

const CommentsSection = () => {

    const [listOfComments, setListOfComments] = useState([]);
    const commentDescription = useRef()

    const addCommentHandler = (event) => {
        if (event.keyCode === 13) {
            setListOfComments(prevState => {
                const myComment = {
                    id: prevState.length,
                    userName: 'Munteanu Nicolae',
                    date: 'right now',
                    comment: commentDescription.current.value
                };
                commentDescription.current.value = '';
                return [myComment, ...prevState];
            })
        }
    }

    return <section>
        <div className={classes.commentsInputContainer}>
            <img src={require('../assets/profile.jpg')} className={classes.profilePictureImg}></img> 
            <input type='text' placeholder='Write a comment...'
                ref={commentDescription} onKeyUp={addCommentHandler} className={classes.commentInput}>
            </input>
        </div>
        {listOfComments.map((comment, idx) => {
            return (
                <div className={classes.comments} key={idx}>
                    <div className={classes.userInfo}>
                        <Link to='/me'>
                            <img src={require('../assets/profile.jpg')} className={classes.profilePictureImg}></img>
                        </Link>
                        <Link to='/me'>
                            <p className={classes.username}>{comment.userName}</p>
                        </Link>
                    </div>
                    <div className={classes.commentInfo}>
                        <p>{comment.comment}</p>
                        <p className={classes.timeOfPost}>{comment.date}</p>
                    </div>
                </div>
            )
        })}
    </section>
}

export default CommentsSection;