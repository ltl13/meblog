import X from '../../image/x.png';
import './signup.css';

function closeForm() {
  document.querySelector('.signup').classList.remove('open');
}

const Signup = props => {
  return (
    <div className="signup">
      <div className="wrapper">
        <div className="iconbutton">
          <img src={X} alt="" className="icon x" onClick={closeForm} />
        </div>
        <h1 className="SignupTitle">Join meblog</h1>
        <input type="text" placeholder="User name"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm password"></input>
        <a href={props.link}>Sign up</a>
        <h3>
          Click "Sign in" to agree to our Terms of service and acknowledge that
          our Privacy Policy applies to you
        </h3>
      </div>
    </div>
  );
};
export default Signup;
