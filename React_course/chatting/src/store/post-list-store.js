import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    addIntialPosts: ()=>{},
    deletePost : () => {},
});

const postListReducer = (currPostList,action) =>{
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList];
    }else if (action.type === 'ADD_INITIAL_POST'){
        newPostList = action.payload.posts;
    }
    return newPostList;
}
const PostListProvider = ({children}) =>{
    const[postList, dispatchPostList] = useReducer(postListReducer,[])


    const addPost = (userId, title, body, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                tags: tags,
            }
        });
    };

    const addIntialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POST',
            payload: {
                posts :posts
            }
        });
    };
    
    const deletePost = (postId) =>{
        dispatchPostList({
            type : 'DELETE_POST',
            payload:{
                postId,
            }
        })
    }

    return <PostList.Provider value = {{postList : postList,addPost:addPost,addIntialPosts: addIntialPosts,deletePost  : deletePost}}>{children}</PostList.Provider>
}



export default PostListProvider 
