import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function Form({
  expense,
  setExpense,
  input,
  setInput,
  editing,
  setEditing,
  rowId,
}) {
  const [error, setError] = useState({});
  const handleSumbit = (event) => {
    event.preventDefault();
    const validationResult = validateForm();
    if (Object.keys(validationResult).length) return;
    if (editing) {
      setExpense((prev) => {
        return prev.map((item) => {
          if (item.id === rowId) {
            return {
              ...input,
              id: rowId,
            };
          }
          return item;
        });
      });
      setEditing(false);
      setInput({ title: "", category: "", price: "" });
      return;
    }
    setExpense((prev) => [...prev, { ...input, id: crypto.randomUUID() }]);
    setInput({ title: "", category: "", price: "" });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const validationConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minLength: 5, message: "Title should have minimum length" },
    ],
    category: [{ required: true, message: "Category is required" }],
    price: [
      { required: true, message: "Price is required" },
      { isNumber: true, message: "Price should be a number" },
    ],
  };
  const validateForm = () => {
    const errorObj = {};
    Object.keys(validationConfig).forEach((ele) => {
      validationConfig[ele].some((rule) => {
        if (rule.required && !input[ele]) {
          errorObj[ele] = rule.message;
          return true;
        }
        if (rule.minLength && input[ele].length < 5) {
          errorObj[ele] = rule.message;
          return true;
        }
        if (rule.isNumber && isNaN(input[ele])) {
          errorObj[ele] = rule.message;
          return true;
        }
      });
    });
    setError(errorObj);
    return errorObj;
  };
  return (
    <form className="expense-form" onSubmit={handleSumbit}>
      <Input
        id={"title"}
        label={"Title"}
        name={"title"}
        value={input.title}
        onChange={handleChange}
        error={error.title}
      />
      <Select
        id={"category"}
        name="category"
        label="Category"
        value={input.category}
        onChange={handleChange}
        defaultItem={"All"}
        items={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={error.category}
      />
      <Input
        id={"amount"}
        label={"Amount"}
        name={"price"}
        value={input.price}
        onChange={handleChange}
        error={error.price}
      />
      <button className="add-btn">{editing ? "Save" : "Add"}</button>
    </form>
  );
}
