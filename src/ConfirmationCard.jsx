import Button from "./Button";
import "./ConfirmationCard.css";
import ListIcon from "./assets/images/icon-list.svg";

function ConfirmationCard({ togglePage }) {
  const listIcon = <img src={ListIcon} className="icon" />;

  const handleClick = () => {
    togglePage();
  };

  return (
    <div className="ConfirmationCard">
      <div>{listIcon}</div>
      <h1>Thanks for subscribing</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com</b>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <Button onClick={handleClick} text="Dismiss Message" />
    </div>
  );
}

export default ConfirmationCard;
