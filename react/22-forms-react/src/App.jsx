import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import ContextMenu from "./components/ContextMenu";
import data from "./data";

function App() {
  const [expensedata, setExpenseData] = useState(data);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form setData={setExpenseData}/>
        <Table data={expensedata}/>
        <ContextMenu/>
      </div>
    </main>
  );
}
  
export default App;
