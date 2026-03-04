import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import data from "./sampleData";
import { useState } from "react";
function App() {
  const [expense, setExpense] = useState(data);
  const [edit, setEdit] = useState(false);
  const [inputData, setInputData] = useState({ title: "", category: "", amount: "" });
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form dataHandler={setExpense} setter={[inputData,setInputData]} editor={[edit,setEdit]}/>
        <Table expense={expense} setExpense={setExpense} setInput={setInputData} editor={[edit,setEdit]}/>
      </div>
    </main>
  );
}

export default App;
