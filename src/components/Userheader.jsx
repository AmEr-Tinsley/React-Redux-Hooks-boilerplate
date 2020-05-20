import React, { useEffect, useState } from 'react';
import {fetchUser} from '../actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Userheader(props){
    const users = useSelector(state => state.users);
    console.log(props.id);
    const user = users.find(user => user.id === props.id);
    if(user)
    console.log(user);
    if(!user)return null;
    return (
        <div>
            <b>{user.name}</b> 
        </div>
    )
}

export default Userheader;