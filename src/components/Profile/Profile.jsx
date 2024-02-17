import React from 'react';
import './Profile.css'

const Profile = ({ username, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className='profile-block'>
            <div className='profile-main-info'>
                <img
                    src={image}
                    alt={username}
                    className='profile-avatar'
                />
                <p className='profile-name'>{username}</p>
                <p className='profile-info'>@{tag}</p>
                <p className='profile-info'>{location}</p>
            </div>

            <ul className='profile-stats'>
                <li>
                    <span className='profile-stats-name'>Followers</span>
                    <span className='profile-stats-value'>{followers}</span>
                </li>
                <li>
                    <span className='profile-stats-name'>Views</span>
                    <span className='profile-stats-value'>{views}</span>
                </li>
                <li>
                    <span className='profile-stats-name'>Likes</span>
                    <span className='profile-stats-value'>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
