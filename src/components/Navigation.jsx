export default function Navigation({ view, setView }) {
  return (
    <div className="flex mt-2 gap-2">
      <button className="border border-black" onClick={() => setView("home")}>
        home
      </button>
      <button className="border border-black" onClick={() => setView("saved")}>
        saved
      </button>
      <button className="border border-black" onClick={() => setView("recent")}>
        recent
      </button>
    </div>
  );
}
