import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addMoneyToday, getMoney, resetTotal } from './store/userSlice';
import { Navigate } from 'react-router-dom';
import { Statistic } from './components/Statistic';
import { useEffect } from 'react';

export default function UserMenu() {
const {id, name, total} = useSelector(state => state.user);
useEffect(() => {
  dispatch(getMoney(id));
}, []);
const [out, setOut] = useState(0)
const [swap, setSwap] = useState(0)
const [again, setAgain] = useState(0)
const dispatch = useDispatch();

const handleReset = () =>{
  dispatch(resetTotal(id));
  dispatch(addMoneyToday({id: id, money: total*125 + out*80 + swap*300 + again*125}))
  setOut(0);
  setSwap(0);
  setAgain(0);
}

const {isauth} = useSelector(state => state.user)
  return isauth ? (
    
    <div>
        <div>
          Профиль: {name}
        </div>
        <div>
        Общее количество заказов: {total}
        </div>
        <div>
        Отдаленных: 
        <input style = {{width:20, textAlign: 'center'}}value = {out} onChange = {(event)=> setOut(event.target.value)}></input>
        </div>
        <div>
        Перемещений: 
        <input style = {{width:20, textAlign: 'center'}}value = {swap} onChange = {(event)=> setSwap(event.target.value)}></input>
        </div>
        <div>
        Довозов: 
        <input style = {{width:20, textAlign: 'center'}}value = {again} onChange = {(event)=> setAgain(event.target.value)}></input>
        </div>
        <div>
          
        За сегодня заработано: {total*125 + out*80 + swap*300 + again*125} рублей
        </div>
        <button className='button first' onClick = {handleReset}>Уйти со смены</button>
        <div style = {{width: 300, height:200}}>
          <Statistic />
        </div>
        
    </div>
    
  ):
  (
    <Navigate replace to="/login"/>
  );
}

