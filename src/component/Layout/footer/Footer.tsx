export default function Footer() {
  return (
    <footer className="flex justify-between mx-14 mt-4 mb-3">
      <h3 className="text-gray-400 font-sans text-sm font-medium">Task name</h3>
      <div className="flex w-1/2">
        <select
          name="Select"
          id="SelectPrirityy"
          className="w-1/6 border-none font-medium"
        >
          <option value="High">High</option>
          <option value="Mediun">Mediun</option>
          <option value="Low">Low</option>
        </select>
        <button className="bg-green-400 rounded-md text-white px-1 font-sans text-sm">
          Add Task
        </button>
      </div>
    </footer>
  );
}
