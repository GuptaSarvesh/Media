import React from 'react';
import './sidebarfriends.css';


export default function Sidebarfriends({user}) {
    return (
        <li className="sidebarFriend">
        <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
         <span className="sidebarFriendName">{user.username}</span>
     </li>
    )
  }
  