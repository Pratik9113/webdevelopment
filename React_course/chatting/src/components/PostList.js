import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMeassage from './WelcomeMeassage'

const PostList = () => {
  const  {postList,addIntialPosts} = useContext(PostListData)
  const handleGetPostClick = () =>{  
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addIntialPosts(data.posts)
    });
  }
  return (
    <>
    {postList.length === 0 && <WelcomeMeassage onGetPostClick={handleGetPostClick}/>}
      {postList.map((post)=> <Post
      key = {post.id} post = {post}
      />)}
    </>
  )
}

export default PostList
