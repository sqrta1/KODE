import './Input.css';

function Input(props) {
  return (
    <div className="inputs">
      <input
        className="input"
        id={props.id}
        ref={props.refelem}
        type={props.type}
        placeholder={props.placeHolder}></input>
    </div>
  );
}

export default Input;
