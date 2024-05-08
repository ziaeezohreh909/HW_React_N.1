import Btn from "../Button/Btn";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3 mt-2 mb-3 px-12 py-3 mx-auto ">
      <Layout>
        <div className="flex justify-between items-center border-b-2  gap-2 w-80 ">
          <div className="flex gap-1 mb-3">
            <input type="checkbox" />
            <p>Task 1</p>
            <button className="bg-red-500 rounded-md font-mono text-xs text-white px-2">
              High
            </button>
          </div>
          <div>
            <Btn />
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2  gap-2 w-80 ">
          <div className="flex gap-1 mb-3">
            <input type="checkbox" />
            <p>Task 2</p>
            <button className="bg-yellow-500 rounded-md  font-mono text-xs text-white px-2">
              Medium
            </button>
          </div>
          <div>
            <Btn />
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2  gap-2 w-80 ">
          <div className="flex gap-1 mb-3">
            <input type="checkbox" />
            <p>Task 3</p>
            <button className="bg-green-500 rounded-md  font-mono text-xs text-white px-2">
              Low
            </button>
          </div>
          <div>
            <Btn />
          </div>
        </div>
        <div className="flex justify-between items-center w-80 gap-2 ">
          <div className="flex gap-1 mb-3">
            <input type="checkbox" />
            <p>Task 4</p>
            <button className="bg-red-500 rounded-md  font-mono text-xs text-white px-2">
              High
            </button>
          </div>
          <div>
            <Btn />
          </div>
        </div>
      </Layout>
    </div>
  );
}
