import './FriendList.css'
import FriendListItem from './FriendListItem/FriendListItem.jsx';


const FriendList = ({ friends }) => {
	return (
		<ul className='friend-list'>
			{friends.map(({ id, avatar, name, isOnline }) => (
					<li  className='friend-list-item 'key={id}>
						<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
					</li>
				))}
	
		</ul>


	);
};
export default FriendList;