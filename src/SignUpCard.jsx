import EmailSignUpForm from "./EmailSignUpForm";
import DesktopImg from "./assets/images/DesktopImg.svg";
import "./SignUpCard.css";
import ListIcon from "./assets/images/icon-list.svg";

function SignUpCard({ togglePage }) {
  const listIcon = <img src={ListIcon} className="list-icon" />;
  return (
    <div className="SignUpCard">
      <div className="info">
        <h1>Stay updated!</h1>
        <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
        <ul>
          <li>
            {listIcon} <span>Product discovery and building what matters</span>
          </li>
          <li>
            {listIcon} <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            {listIcon} <span>And much more!</span>
          </li>
        </ul>
        <EmailSignUpForm togglePage={togglePage} />
      </div>
      <img src={DesktopImg} className="main-img" />
    </div>
  );
}

export default SignUpCard;
