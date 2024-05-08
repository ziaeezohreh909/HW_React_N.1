import Home from "../../component/Home/Home";
import Layout from "../../component/Layout/Layout";

export default function HomePage() {
  return (
    <div className="bg-gradient-45deg-blue w-full min:h-scre mx-auto">
      <div className="bg-white shadow-md w-96 rounded-xl mx-auto mt-24">
        <Layout>
          <Home />
        </Layout>
      </div>
    </div>
  );
}
