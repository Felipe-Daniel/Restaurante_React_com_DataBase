import classes from './InputInCart.module.css'

function InputInCart() {
  return (
    <form>
      <div className={classes.amount}>
        <label for='amount'>Amount: </label>
        <input type="number" name='amount'/>
      </div>
      <button type="submit">+Add</button>
    </form>
  )
}

export default InputInCart