import Online from "../components/StartingPage/online/Online";
import { Users } from "../components/StartingPage/SyntheticData";




const Friends = () => {
    return <div>
        <ul >
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    </div>
}

export default Friends;