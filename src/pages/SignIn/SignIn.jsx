import "../Style.scss"
import Connection from "../features/token/token.js"

function SignIn() {
  return (     
    <div className="body">
      <div className="main bg-dark">
        <Connection />
      </div>
    </div>
  )
}

export default SignIn;