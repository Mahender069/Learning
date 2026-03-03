export default function ContextMenu({
  property,
  setProperty,
  rowId,
  setExpense,
}) {
  if (!property.left) return;
  return (
    <div className="context-menu" style={property}>
      <div
        onClick={() => {
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
