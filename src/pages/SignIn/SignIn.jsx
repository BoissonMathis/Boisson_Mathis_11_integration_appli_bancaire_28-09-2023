import "../Style.scss"
// import { NavLink } from "react-router-dom";
// import { user } from "../../Routes/Routes";
import Connection from "../features/token/token.js"

function SignIn() {
  return (     
    <div className="body">
      <div className="main bg-dark">
        <Connection />
        {/* <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <NavLink to={user}>
              <button className="sign-in-button">Sign In</button>
            </NavLink>
          </form>
        </section> */}
      </div>
    </div>
  )
}

export default SignIn;