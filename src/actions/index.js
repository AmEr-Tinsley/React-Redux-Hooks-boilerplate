import Jsonplaceholder from '../apis/Jsonplaceholder';
export const fetchPosts = () => {
    return async function(dispatch,getState){
        const result = await Jsonplaceholder.get('/posts');
        dispatch({type : 'FETCH_POSTS',payload : result.data})
    }
};

export const fetchUser = () => {
    return async function(dispatch,getState){
        const result = await Jsonplaceholder.get('/users');
        
        dispatch({type : 'FETCH_USER',payload : result.data});
    };
}