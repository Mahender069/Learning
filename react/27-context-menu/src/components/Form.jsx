import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function Form({ dataHandler }) {
  const [data, setData] = useState({ title: "", category: "", amount: "" });
  const [error, setError] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError({});
  };
  const validationConfig = {
    title: [
      { required: true, message: "title is required" },
      { minLength: 5, message: "minimum length of title is 5" },
    ],
    category: [{ required: true, message: "category is required" }],
    amount: [
      { required: true, message: "amount is required" },
      { isNumber: true, message: "amount should be a number" },
    ],
  };
  const validateForm = (formData) => {
    const errorObj = {};
    Object.keys(formData).forEach((value) => {
      validationConfig[value].some((rule) => {
        if (rule.required && !data[value]) {
          errorObj[value] = rule.message;
          return true;
        }
        if (rule.minLength && data[value].length < 5) {
          errorObj[value] = rule.message;
          return true;
        }
        if (rule.isNumber && isNaN(data[value])) {
          errorObj[value] = rule.message;
          return true;
        }
      });
    });
    setError(errorObj);
    return errorObj;
  };
  return (
    <form
      className="expense-form"
      onSubmit={(event) => {
        event.preventDefault();
        const result = Object.keys(validateForm(data));
        if (result.length) return;
        dataHandler((prev) => [...prev, data]);
        setData({ title: "", category: "", amount: "" });
      }}
    >
      <Input
        id="title"
        name="title"
        value={data.title}
        onChange={handleChange}
        error={error.title}
      />
      <Select
        id="category"
        name="category"
        value={data.category}
        onChange={handleChange}
        error={error.category}
        defaultValue={"Select Category"}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />
      <Input
        id="amount"
        name="amount"
        value={data.amount}
        onChange={handleChange}
        error={error.amount}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
