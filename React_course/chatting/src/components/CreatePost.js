import React, { useContext, useRef } from 'react'
import {PostList} from '../store/post-list-store'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {

  const {addPost} = useContext(PostList)
  const navigate = useNavigate();

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" "); 

    addPost(userId, title, body, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      body : body,
      reactions : reactions,
      userId : userId,
      tags : tags
      /* other post data */
    })
  })
  .then(res => res.json())
  .then((post) =>{
    addPost(post)
    navigate("/");
});
            

  }
  return (
    <>
      <form className='create-post' onSubmit = {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title </label>
            <input type="text" ref = {postTitleElement} className="form-control" id="title" placeholder="Enter your Title "/>
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">UserId </label>
            <input type="text"  ref = {userIdElement} className="form-control" id="userId" placeholder="Enter your UserId "/>
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">Post Content </label>
            <input type="text" ref = {postBodyElement} rows= "4" className="form-control" id="body" placeholder="Enter your Title "/>
          </div>

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">reactions</label>
            <input type="text" ref = {reactionsElement} className="form-control" id="reactions" placeholder="reacted to this "/>
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">Tags </label>
            <input type="text" ref = {tagsElement} className="form-control" id="tags" placeholder="enter your tags using comma "/>
          </div>

          <button type ="submit" className="btn btn-primary">Post</button>
        </form>
    </>
  )
}

export default CreatePost
