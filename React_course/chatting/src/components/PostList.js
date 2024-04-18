import React, { useContext, useEffect, useState,  } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMeassage from './WelcomeMeassage'
import Loading from './Loading'

const PostList = () => {
  const  {postList,addIntialPosts} = useContext(PostListData)



  const  [fetching,setFetching] = useState(false)
  /* useeffect for data fetching or event listerner and aftere every render by default */
  useEffect(()=>{
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addIntialPosts(data.posts)
        setFetching(false);

      });
  },[]);

  return ( 
    <>
    {fetching && <Loading/>}
    {!fetching && postList.length === 0 && <WelcomeMeassage />}
      {!fetching && postList.map((post)=> <Post
      key = {post.id} post = {post}
      />)}
    </>
  )
}

export default PostList
