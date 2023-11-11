import "../Nav/Nav.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import logo from "../../img/argentBankLogo.png"
import { home, signIn } from "../../Routes/Routes";
import { logOut } from "../../pages/features/token/tokenSlice.js"

function Nav() {

  const dispatch = useDispatch()

  const connected = useSelector(state => state.token.authenticated)
  const username = useSelector(state => state.profile.userName)

  return (
    <nav className="main-nav">
      <NavLink to={home} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
      <div className="main-nav-item">
        {/* <p>test{username}</p> */}
        <i className="fa fa-user-circle">{`${connected ? username : ""}`}</i>
        <NavLink to={connected ? home : signIn}
        onClick={() => dispatch(logOut())}
        id="logAndDelog"
        >
          {`${connected ? "Sign Out" : "Sign In"}`}
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
