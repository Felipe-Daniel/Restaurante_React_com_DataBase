import React, { useContext, useState } from "react";
import CartContext from "../../../Context/cart-context";
import useInput from "../../../Hooks/use-input";
import classes from "./FormModal.module.css";
import ModalEndButtons from "./ModalEndButtons";

function FormModal(props) {
  const [databaseMessage, setDatabaseMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== "");
  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput((value) => value.trim() !== "" && !isNaN(value));
  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  const inputClasses = nameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }
  const ctx = useContext(CartContext);
  async function submitHandler(event) {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    fetch("https://teste-7caab-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        name: event.target[0].value,
        street: event.target[1].value,
        postalCode: event.target[2].value,
        city: event.target[3].value,
        order: ctx.products,
        totalPrice: ctx.totalPrice,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong: " + response.statusText);
        } else {
          resetName();
          resetStreet();
          resetPostalCode();
          resetCity();
          setDatabaseMessage('Successfull!')
        }
      })
      .catch((error) => {
        setDatabaseMessage(error.message);
      });

    setIsLoading(false);
  }
  return (
    <form className={classes["form-control"]} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          className={inputClasses}
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>Please enter a name.</p>
        )}
      </div>
      <div>
        <label htmlFor="street">Street</label>

        <input
          className={inputClasses}
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={classes["error-text"]}>Please enter a street.</p>
        )}
      </div>
      <div>
        <label htmlFor="postal_code">Postal Code</label>
        <input
          type="number"
          className={inputClasses}
          value={postalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <p className={classes["error-text"]}>
            Please enter a valid postal code.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          className={inputClasses}
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>Please enter a city.</p>
        )}
      </div>
      {isLoading && <p>Loading...</p>}

      <ModalEndButtons
        error={databaseMessage !== 'Successfull!'}
        message={databaseMessage}
        buttonText="Confirm"
        closeClick={props.onCloseModal}
        buttonType="submit"
        disabled={!formIsValid}
      ></ModalEndButtons>
    </form>
  );
}

export default FormModal;
