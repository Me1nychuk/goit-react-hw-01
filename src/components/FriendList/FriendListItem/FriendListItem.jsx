import './FriendListItem.css'
import clsx from "clsx";




const FriendListItem = ({ avatar, name, isOnline }) => 
{
    return(
   <div>
    <img className="friend-avatar" src={avatar} alt="Avatar" width="48" />
    <p className='friend-name'>{name}</p>
        <p className={clsx("status",
          isOnline?"green":"red")}>{isOnline ? "Online" : "Offline"}</p>
   </div>

)
};
export default FriendListItem;