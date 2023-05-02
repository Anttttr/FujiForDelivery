import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewQue, fetchQue, deleteQue} from './store/queSlice';
import { addNewTotal } from './store/userSlice';
import { Link, Navigate } from 'react-router-dom';
import NewQueForm from './components/NewQueForm';
import QueList from './components/QueList';
import "./Que.css"
function Que() {
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    
    const [text, setText] = useState('');
    const {que, status, error} = useSelector(state => state.que);
    const {id, isauth, name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(fetchQue());
        
    }, [que.length]);
    const handleAction = () => {
        dispatch(addNewQue(id));
      }

    const handleDelete = () => {
         dispatch(deleteQue(id));
         dispatch(addNewTotal(id));
            
        
      }
    return isauth ? (
      <div>
        <p style = {{textAlign:'center', width: '100%'}}>
          <Link  to="/user">Перейти в профиль: {name}</Link>
        </p>
        <NewQueForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
          handleDelete={handleDelete}
        />

        <QueList />
      </div>
    ):
    (
      <Navigate replace to="/login"/>
    );
  }
  
  export default Que;
  