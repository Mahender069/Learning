import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import data from "./sampleData";
import { useState } from "react";
function App() {
  const [expense, setExpense] = useState(data);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form dataHandler={setExpense} />
        <Table expense={expense} setExpense={setExpense}/>
      </div>
    </main>
  );
}

export default App;
