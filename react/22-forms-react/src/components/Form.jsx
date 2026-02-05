export default function Form({setExpense}) {
  return (
    <form className="expense-form" onSubmit={(event)=>{
        event.preventDefault();
        const formData=new FormData(document.querySelector('.expense-form'));
        const data={
            title:formData.get('title'),
            category:formData.get('category'),
            amount:formData.get('amount')
        }

        setExpense((prev)=>[...prev,data])


        event.target.reset()
    }}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title"  name="title"/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input id="category" name="category"/>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount"/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
