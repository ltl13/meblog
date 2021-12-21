import Google from '../../image/google.png';
import Facebook from '../../image/facebook.png';
import Github from '../../image/github.png';
import X from '../../image/x.png';
import './login.css';

function closeForm() {
  document.querySelector('.login').classList.remove('open');
}

const Login = props => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="iconbutton">
          <img src={X} alt="" className="icon x" onClick={closeForm} />
        </div>
        <h1 className="LoginTitle">Chào mừng trở lại</h1>
        <input type="text" placeholder="Tên tài khoản"></input>
        <input type="password" placeholder="Mật khẩu"></input>
        <div className="iconbutton">
          <div className="google">
            <a href="/user">
              <img src={Google} alt="" className="icon"></img>
            </a>
          </div>
          <div className="facebook">
            <a href="/user">
              <img src={Facebook} alt="" className="icon"></img>
            </a>
          </div>
          <div className="github">
            <a href="/user">
              <img src={Github} alt="" className="icon"></img>
            </a>
          </div>
        </div>
        <a href="/user">Đăng nhập</a>
        <h3>
          Nhấp vào "Đăng nhập" để đồng ý với Điều khoản dịch vụ và xác nhận
          Chính sách bảo mật của chúng tôi
        </h3>
      </div>
    </div>
  );
};
export default Login;
