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
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
            document.querySelector('.signup').classList.remove('open');
            document.querySelector('.login').classList.add('open');
          }}
        >
          Sign up
        </a>
        <h3>
          Nhấp vào "Đăng ký" để đồng ý với Điều khoản dịch vụ và xác nhận Chính
          sách bảo mật của chúng tôi
        </h3>
      </div>
    </div>
  );
};
export default Signup;
