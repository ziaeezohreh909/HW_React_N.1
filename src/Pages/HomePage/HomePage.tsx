import Home from "../../component/Home/Home";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center my-24">
      <div className="w-[500px] h-[420px] absolute bg-blue-800 rounded-xl rotate-6  shadow-lg"></div>
      <div className="bg-white shadow-md w-[500px] h-[420px] rounded-xl  relative px-20 py-14 ">
        <Home />
      </div>
    </div>
  );
}
