import useFetch from '../../hooks/useFetch';
import LeftSide from './LeftSide/LeftSide';
import Newsfeed from './Newsfeed/Newsfeed';
import RightSide from './RightSide/RightSide';
import classes from './StartingPage.module.scss';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');
    return <div className={classes.mainContainer}>
        <aside><LeftSide></LeftSide></aside>
        <div className={classes.newsfeed}>
            {posts && posts.map(post => {
                return <Newsfeed postData={post} key={post.id}></Newsfeed>
                        
            })}
        </div>
        <aside className={classes.rightSide}><RightSide></RightSide></aside>
    </div>
}

export default StartingPage;