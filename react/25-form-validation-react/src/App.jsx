import './App.css'
import ContextMenu from './components/ContextMenu'
import Form from './components/Form'
import Table from './components/Table'
import data from "./sampleData";
import { useState } from 'react';
function App() {
  const [expense,setExpense]=useState(data)
  return (
     <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form dataHandler={setExpense}/>
        <Table expense={expense}/>
        <ContextMenu/>
      </div>
    </main>
  )
}

export default App