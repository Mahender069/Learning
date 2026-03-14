export default function Popup({ clickHandler }) {
  return (
    <div className="fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 border-2 w-3xl h-40 rounded-2xl ">
      <button
        className="font-bold text-4xl cursor-pointer"
        onClick={() => {
          clickHandler(false);
        }}
      >
        X
      </button>
      <div>
        <label htmlFor="">username</label>
        <input type="text" className="rounded-e-lg border-amber-300 border-4" />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="text" className="rounded-e-lg border-amber-300 border-4" />
      </div>
    </div>
  );
}
