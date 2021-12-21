import X from '../../image/x.png';
import './signup.css';
import Google from '../../image/google.png';
import Facebook from '../../image/facebook.png';
import Github from '../../image/github.png';

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
        <h1 className="SignupTitle">Tham gia Meblog</h1>
        <input type="text" placeholder="Tên đăng nhập"></input>
        <input type="password" placeholder="Mật khẩu"></input>
        <input type="password" placeholder="Xác nhận mật khẩu"></input>
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
        <a style={{ paddingTop: '0' }} href="/user">
          Đăng ký
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
