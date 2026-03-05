import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import x from "./data";
export default function App() {
  const [data, setData] = useState(x);
  const [input, setInput] = useState({
    title: "",
    category: "",
    price: "",
  });
  const [editing, setEditing] = useState(false);
  const [rowId, setRowId] = useState("");
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form
          expense={data}
          setExpense={setData}
          input={input}
          setInput={setInput}
          editing={editing}
          setEditing={setEditing}
          rowId={rowId}
        />
        <Table
          expense={data}
          setExpense={setData}
          setInput={setInput}
          setEditing={setEditing}
          rowId={rowId}
          setRowId={setRowId}
        />
      </div>
    </main>
  );
}
