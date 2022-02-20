import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';


export default function Rightbar({profile}) {

const HomeRightBar=()=>{
  return(
<>
<div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText">
           <b>Sarvesh</b> and 3 other friends have a birthday today
            </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h1 className="rightbarTitle">Online friends</h1>
        <ul className="rightbarFriendList">
          
        {Users.map(u=>(
          <Online key={u.id} user ={u} />
        ))}
        </ul>

</>

  );

};

const ProfileRightBar = ()=>{
  return(
  
    <>
    <h4 className='rightbartitle'>User Information title</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItems">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItems">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItems">
        <span className="rightbarInfoKey">relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    
    <h4 className='rightbartitle'>User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Sandeep</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Rahul</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Neeraj</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Piyush</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Piyush</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Piyush</span>
      </div>
    </div>
    </>

  
    )
}

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       
       <HomeRightBar/>
      </div>
    </div>
  )
}
