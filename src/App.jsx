import { useState, useEffect } from "react";
import Card from "./components/Card";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import { getData } from "./api";
const initialTimeFrames = [
  {
    timeframe: "daily",
    active: true,
  },
  {
    timeframe: "weekly",
    active: false,
  },
  {
    timeframe: "monthly",
    active: false,
  },
];
function App() {
  const [data, setData] = useState([]);
  const [timeframes, setTimeFrames] = useState(initialTimeFrames);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setError(false);
      setLoading(true);
      try {
        const data = await getData();
        setData(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <Layout timeframes={timeframes} setTimeFrames={setTimeFrames}>
        <Cards
          data={data}
          loading={loading}
          error={error}
          timeframe={
            timeframes.filter((timeframe) => timeframe.active)[0].timeframe
          }
        />
      </Layout>
    </>
  );
}

export default App;

function Layout({ children, timeframes, setTimeFrames }) {
  return (
    <>
      <main className="bg-blue-d-very min-h-screen grid place-items-center place-content-center relative">
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-12">
          <div className="min-w-[300px] flex flex-col">
            <Profile timeframes={timeframes} setTimeFrames={setTimeFrames} />
          </div>
          <div className="grid grid-cols-1 flex-1 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12">
            {children}
          </div>
        </div>
        <footer className="absolute w-full bg-blue-d bottom-0">
          <p className="text-white py-2 text-center">
            Made With &lt;3 By{" "}
            <span className="text-lg text-blue-desaturated font-bold">
              Mohamed Mostafa
            </span>
          </p>
        </footer>
      </main>
    </>
  );
}
