import classes from "./ModalEndButtons.module.css";

function ModalEndButtons(props) {
  const messageClasses = props.error
    ? `${classes["error-text"]}  ${classes.right}`
    : `${classes.success}  ${classes.right}`;
  return (
    <>
      <p className={messageClasses}>{props.message}</p>
      <div className={classes.buttons}>
        <button
          className={`${classes.button} ${classes["button__close-button"]}`}
          onClick={props.closeClick}
        >
          Close
        </button>
        <button
          className={`${classes.button} ${classes["button__order-button"]}`}
          type={props.orderButtonType}
          onClick={props.sendClick}
          disabled={props.disabled}
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );
}

export default ModalEndButtons;
