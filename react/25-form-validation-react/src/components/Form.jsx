import React, { useState } from "react";

function Form({ dataHandler }) {
  const [data, setData] = useState({ title: "", category: "", amount: "" });
  const [error, setError] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError({})
  };
  const validateForm = (formData) => {
    const errorObj = {};
    if (!formData.title) errorObj.title = "Title required";
    if (!formData.category) errorObj.category = "Category required";
    if (!formData.amount) errorObj.amount = "Amount required";
    setError(errorObj);
    return errorObj;
  };
  return (
    <form
      className="expense-form"
      onSubmit={(event) => {
        event.preventDefault();
        const result=Object.keys(validateForm(data));
        if(result.length) return;
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
          onChange={handleChange}
        />
      </div>
      <p className="error-message">{error.title}</p>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
        />
      </div>
      <p className="error-message">{error.category}</p>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={data.amount}
          onChange={handleChange}
        />
      </div>
      <p className="error-message">{error.amount}</p>
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
