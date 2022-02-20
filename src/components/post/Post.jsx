import React, { useState } from 'react'
import './post.css';
import { MoreVert } from '@material-ui/icons';
import {Users} from '../../dummyData';

export default function Post({post}) {
 console.log(post);

const user =Users.filter(u=>u.id===1)
console.log(user[0].username);

// const ProfilePic =Users.filter(p=>p.id===1)
// console.log(ProfilePic[0].profilePicture);

/*
const [count,setCount]=useState(0);
 const IncNum=()=>{
setCount(count+1);
  
} */

const [like,setLike]=useState(post.like)
const[isLiked,setIsLiked]=useState(false)
const likeHandler=()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
}


  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                  <MoreVert/>
              </div>
          </div>
          <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className='postImg' src={post.photo} alt="img" />
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  <img className='likeIcon' onClick={likeHandler} src="assets/heart.png" alt="" />
                  <img className='likeIcon' onClick={likeHandler} src="assets/like.png" alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">{post.comment} Comments</span>
              </div>
          </div>
      </div>
    </div>
  )
}
