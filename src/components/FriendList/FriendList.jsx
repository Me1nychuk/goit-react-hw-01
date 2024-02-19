import css from'./FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem.jsx';


const FriendList = ({ friends }) => {
	return (
		<ul className={css['friend-list']}>
			{friends.map(({ id, avatar, name, isOnline }) => (
					<li  className={css['friend-list-item']}key={id}>
						<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
					</li>
				))}
	
		</ul>


	);
};
export default FriendList;