import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";

function ExpenseList(props) {
  const { items } = props;

  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default ExpenseList;
