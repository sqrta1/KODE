import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navbar">
      <div
        className="navbar-back"
        style={props.pickedItem === '' ? { display: 'none' } : { display: 'block' }}
        id="back"
        onClick={props.onClick}>
        ˂ Back
      </div>
      <div className="navbar-text" onClick={props.onLogout}>
        Logout
      </div>
    </div>
  );
}

export default NavBar;
