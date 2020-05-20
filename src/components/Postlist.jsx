import React , {useEffect, useState} from 'react';
import {fetchPosts, fetchUser} from '../actions';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  Userheader from './Userheader'
function Postlist(props){
    const posts = useSelector(state => state.posts);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect( () => {
        const wa = async () => {
            const result = await dispatch(fetchPosts())
            const result2 = await dispatch(fetchUser())
        };
        wa();
    },[]);
    console.log(posts);
    console.log(users);
    
    return (
        <div className="ui relaxed divided list">
            {posts.map((post)=>{
                return(
                    <div key = {post.id} className = "item">
                        <i className="large middle aligned icon user"/>
                        <div className="content">
                            <div className="description">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <Userheader key = {post.id} id = {post.userId}/>
                            </div>
                        </div>
                        
                    </div>
            )})}
        </div>
    );
}



export default Postlist;