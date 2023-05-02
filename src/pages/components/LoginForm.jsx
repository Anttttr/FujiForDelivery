import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../store/userSlice'
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const [id,setId] = useState('');
    const navigate = useNavigate('');
    const {isauth} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        if(id.trim().length) {
          dispatch(getUser(id));
          setId('');
        }

        
        
      }
  return !isauth ? (
    <div>
        <input type = "id"
        value = {id}
        onChange = {(e) => setId(e.target.value)}
        placeholder = "id"
        />
        <button className= "button first" onClick = {handleLogin}>
            Login
        </button>
    </div>
  ):(
    navigate("/que")
  );
}

export default LoginForm