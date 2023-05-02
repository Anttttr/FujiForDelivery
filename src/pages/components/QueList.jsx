import { useSelector } from 'react-redux';
import QueItem from './QueItem';

const QueList = () => {
  const que = useSelector(state => state.que.que);
  return (
    <div className = "que">
    <ul>
      {que.map((ques) => (
        <QueItem
          key={ques.pos}
          {...ques}
        />
      ))}
    </ul>
    </div>
  );
};

export default QueList;
