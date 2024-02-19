import React from 'react';
import css from './Profile.module.css'

const Profile = ({ username, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={css['profile-block']}>
            <div className={css['profile-main-info']}>
                <img
                    src={image}
                    alt={username}
                    className={css['profile-avatar']}
                />
                <p className={css['profile-name']}>{username}</p>
                <p className={css['profile-info']}>@{tag}</p>
                <p className={css['profile-info']}>{location}</p>
            </div>

            <ul className={css['profile-stats']}>
                <li>
                    <span className={css['profile-stats-name']}>Followers</span>
                    <span className={css['profile-stats-value']}>{followers}</span>
                </li>
                <li>
                    <span className={css['profile-stats-name']}>Views</span>
                    <span className={css['profile-stats-value']}>{views}</span>
                </li>
                <li>
                    <span className={css['profile-stats-name']}>Likes</span>
                    <span className={css['profile-stats-value']}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
