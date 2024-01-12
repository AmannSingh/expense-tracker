import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // Get the current date in the format YYYY-MM-DD

  function titleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function updateDateHandler(date) {
    setSelectedDate(date.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(selectedDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setSelectedDate("");
  }

  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={updateDateHandler}
            max={currentDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
