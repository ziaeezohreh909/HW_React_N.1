import Home from "../../component/Home/Home";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] h-[420px] bg-gradient-to-l from-blue-700 t0-blue-400 rounded-xl rotate-6 relative shadow-lg"></div>
      <div className="bg-white shadow-md w-[500px] h-[420px] rounded-xl mx-auto  mt-24 absolute px-20 py-14 ">
        <Home />
      </div>
    </div>
  );
}
