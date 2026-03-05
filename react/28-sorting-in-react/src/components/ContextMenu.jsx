export default function ContextMenu({
  property,
  rowId,
  setExpense,
  setProperty,
  setInput,
  expense,
  setEditing
}) {
  if (!property.left) return;
  return (
    <div className="context-menu" style={property}>
      <div
        onClick={() => {
          const { title, category, price } = expense.filter((item) => {
            return item.id === rowId;
          })[0];
          setInput({
            title,
            category,
            price,
          });
          setEditing(true);
          setProperty({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpense((prev) => {
            return prev.filter(({ id }) => {
              return id != rowId;
            });
          });
          setProperty({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
