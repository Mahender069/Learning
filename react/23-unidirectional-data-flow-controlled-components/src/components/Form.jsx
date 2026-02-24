import React, { useState } from "react";

function Form({ dataHandler }) {
  const [data, setData] = useState({ title: "", category: "", amount: "" });
  return (
    <form
      className="expense-form"
      onSubmit={(event) => {
        event.preventDefault();
        dataHandler((prev) => [...prev, data]);

        setData({ title: "", category: "", amount: "" });
      }}
    >
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={data.amount}
          onChange={(e) =>
            setData({ ...data, amount: parseInt(e.target.value) })
          }
        />
      </div>
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
