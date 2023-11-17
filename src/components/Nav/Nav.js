import "../Nav/Nav.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import logo from "../../img/argentBankLogo.webp"
import { home, signIn } from "../../Routes/Routes";
import { logOut } from "../../pages/features/token/tokenSlice.js"
import { useNavigate } from 'react-router-dom'

function Nav() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const connected = useSelector(state => state.token.authenticated)
  const username = useSelector(state => state.profile.userName)

  return (
    <nav className="main-nav">
      <NavLink to={home} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
          height={"54"}
          width={"200"}
        />
      </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
      <div className="main-nav-item">
        <p onClick={() => navigate("/user")}>{`${connected ? username : ""}`}</p>
        <i className="fa fa-user-circle"></i>
        <NavLink to={connected ? home : signIn}
        onClick={() => dispatch(logOut())}
        id="logAndDelog"
        >
          {`${connected ? "Sign out" : "Sign in"}`}
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
