import './Modal.css';

function Modal(props, { active, setActive }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={props.img}></img>
      </div>
    </div>
  );
}

export default Modal;
