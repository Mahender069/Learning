export default function Form({setData}) {
  return (
    <div className="expense-tracker">
      <form className="expense-form" onSubmit={(e)=>{
        e.preventDefault();
        const dt=new FormData(document.querySelector('.expense-form'))
        const data={
            title:dt.get('title'),
            category:dt.get('category'),
            amount:dt.get('amount')
        }
        setData((prevState)=>[...prevState,data]);
      }}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input id="category" name="category" />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
      <div className="context-menu">
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>
  );
}
