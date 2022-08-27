import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen text-white">
      <span className="text-6xl font-bold mb-4">CopyKat</span>
      <span className="text-2xl font-mono my-2 underline">
        <Link to="youtube">/youtube</Link>
      </span>
      <span className="text-2xl font-mono my-2 underline">
        <Link to="netflix">/netflix</Link>
      </span>
    </div>
  );
};

export default Home;
