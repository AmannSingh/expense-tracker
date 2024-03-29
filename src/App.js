import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Desk",
      amount: 300,
      date: new Date(2021, 5, 12),
    },
  ];

  function addExpenseHandler() {
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
