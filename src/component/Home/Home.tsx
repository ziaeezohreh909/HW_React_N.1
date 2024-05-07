import Btn from "../Button/Btn";

export default function Home() {
  return (
    <div className="flex justify-between mx-14 mt-2 mb-3">
      <div className="flex gap-1">
        <input type="checkbox" />
        <p>Task 1</p>
        <button className="bg-red-500 rounded-md  font-mono text-xs text-white px-2">
          High
        </button>
      </div>

      <div className="flex w-1/2 px-20">
        <Btn />
      </div>
    </div>
  );
}
