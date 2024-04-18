import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {},
});

const postListReducer = (currPostList,action) =>{
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}
const PostListProvider = ({children}) =>{
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
    
    const deletePost = (postId) =>{
        dispatchPostList({
            type : 'DELETE_POST',
            payload:{
                postId,
            }
        })
    }
    const[postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)
    return <PostList.Provider value = {{postList : postList,addPost:addPost,deletePost  : deletePost}}>{children}</PostList.Provider>
}


const DEFAULT_POST_LIST = [{
    id : '1',
    title : 'Going tot mumbai',
    body: 'hgidlbkdjxnv kbdgkjdbojlv skcobd vbv uoxboidfj',
    reactions :2,
    userId :'pratik9113_',
    tags : ['anpoi','mumbai','indore']
},
{
    id : '2',
    title : ' mumbai',
    body: 'hgidlbkdjxnv kbdgkjdbojlv skcobd vbv uoxboidfj',
    reactions :2,
    userId :'pratik9113_',
    tags : ['anpoi','mumbai','indore']
}

];
export default PostListProvider 