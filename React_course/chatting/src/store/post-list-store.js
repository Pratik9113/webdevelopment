import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {},
});

const postListReducer = (currPostList,action) =>{
    return currPostList;
}
const PostListProvider = ({children}) =>{
    const addPost  = () =>{

    }
    const deletePost = () =>{

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