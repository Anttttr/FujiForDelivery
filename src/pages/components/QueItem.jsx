import { useDispatch } from 'react-redux';


const QueItem = ({ name, pos}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>{pos} {name}</div>
    </li>
  );
};

export default QueItem;
