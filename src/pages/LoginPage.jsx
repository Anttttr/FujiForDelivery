import React from 'react'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {

const {id} = useSelector(state => state.user)
  return (
    <div>
        Введите свой id для получения доступа к очереди
    <Login/>
    </div> 
)
}

export default LoginPage