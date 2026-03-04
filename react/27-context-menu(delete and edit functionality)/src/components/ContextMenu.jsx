export default function ContextMenu({
  property,
  setProperty,
  rowId,
  setExpense,
  setInput,
  expense,
  editor
}) {
  if (!property.left) return;
  const [edit,setEdit]=editor;
  return (
    <div className="context-menu" style={property}>
      <div
        onClick={() => {
          setEdit(true);
          const result=expense.find((item)=>{
            return item.id==rowId
          })
          const {title,category,amount}=result;
          setInput({title,category,amount})
          setProperty({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setProperty({});
          setExpense((prev) => {
            return prev.filter((item)=>{
              return item.id!=rowId
            })
          });
        }}
      >
        Delete
      </div>
    </div>
  );
}
