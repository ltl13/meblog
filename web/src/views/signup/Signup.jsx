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
        <h1 className="SignupTitle">Tham gia Meblog</h1>
        <input type="text" placeholder="Tên đăng nhập"></input>
        <input type="password" placeholder="Mật khẩu"></input>
        <input type="password" placeholder="Xác nhận mật khẩu"></input>
        <a href={props.link}>Đăng ký</a>
        <h3>
          Nhấp vào "Đăng ký" để đồng ý với Điều khoản dịch vụ và xác nhận
          Chính sách bảo mật của chúng tôi
        </h3>
      </div>
    </div>
  );
};
export default Signup;
