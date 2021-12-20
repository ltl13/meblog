import Google from "../../image/google.png";
import Facebook from "../../image/facebook.png";
import Github from "../../image/github.png";
import X from "../../image/x.png";
import "./login.css";

function closeForm() {
  document.querySelector('.login').classList.remove('open');
}

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="iconbutton">
          <img src={X} alt="" className="icon x" onClick={closeForm} />
        </div>
        <h1 className="LoginTitle">Welcome back</h1>
        <input type="text" placeholder="User name"></input>
        <input type="password" placeholder="Password"></input>
        <div className="iconbutton">
          <div className="google">
            <img src={Google} alt="" className="icon"></img>
          </div>
          <div className="facebook">
            <img src={Facebook} alt="" className="icon"></img>
          </div>
          <div className="github">
            <img src={Github} alt="" className="icon"></img>
          </div>
        </div>
        <a href="">Sign in</a>
        <h3>
          Click "Sign in" to agree to our Terms of service and acknowledge that
          our Privacy Policy applies to you
        </h3>
        </div>
    </div>
)
}
export default Login
