import React, { useContext, useEffect,  } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMeassage from './WelcomeMeassage'

const PostList = () => {
  const  {postList,addIntialPosts} = useContext(PostListData)
  /* useeffect for data fetching or event listerner and aftere every render by default */
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addIntialPosts(data.posts)
      });
  },[addIntialPosts]);

  return (
    <>
    {postList.length === 0 && <WelcomeMeassage />}
      {postList.map((post)=> <Post
      key = {post.id} post = {post}
      />)}
    </>
  )
}

export default PostList
