import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMeassage from './WelcomeMeassage';
import Loading from './Loading';

const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(true); // Start with fetching state

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addIntialPosts(data.posts);
        setFetching(false); // Update fetching state when data is fetched
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setFetching(false); // Handle fetch error by updating fetching state
      });

    return () => {
      // Cleanup function to abort fetch request when component unmounts
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMeassage />}
      {!fetching && postList.map(post => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
