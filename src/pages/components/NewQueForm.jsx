const NewQueForm = ({ value, updateText, handleAction, handleDelete }) => {
  return (
    <label>
      <div style = {{paddingBottom : 25}}>
        <li className = "li">
          <button className = "button first" onClick={handleAction}>Встать в очередь</button>
        </li>
        <li style = {{paddingLeft: 20}} className="li">
          <button className = "button first" onClick={handleDelete}>Уйти из очереди</button>
        </li>
      </div>
    </label>
  );
};

export default NewQueForm;
