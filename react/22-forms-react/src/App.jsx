import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import ContextMenu from "./components/ContextMenu";
import { useState } from "react";
import data from "./data";

function App() {
  const [expense,setExpense]=useState(data);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form setExpense={setExpense}/>
        <Table expense={expense}/>
        <ContextMenu/>
      </div>
    </main>
  );
}

export default App;
