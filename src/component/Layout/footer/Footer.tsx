export default function Footer() {
  return (
    <footer className="flex justify-between items-center gap-2  py-3 w-80 mx-auto">
      <h3 className="text-gray-400 font-sans text-sm font-medium">Task name</h3>
      <div className="flex justify-end items-center">
        <select
          name="Select"
          id="SelectPrirityy"
          className=" border-none font-medium"
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
