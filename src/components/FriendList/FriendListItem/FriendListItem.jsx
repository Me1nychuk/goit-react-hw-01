import css from'./FriendListItem.module.css'
import clsx from "clsx";




const FriendListItem = ({ avatar, name, isOnline }) => 
{
    return(
   <div>
        <img className={css["friend-avatar"]} src={avatar} alt="Avatar" width="48" />
    <p className={css['friend-name']}>{name}</p>
        <p className={clsx(css['status'], {
                [css['green']]: isOnline,
                [css['red']]: !isOnline
            })}>
                {isOnline ? "Online" : "Offline"}
            </p>
   </div>

)
};
export default FriendListItem;