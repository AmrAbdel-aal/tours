import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newTours);
  };
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const featchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featchData(url);
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (tours.length === 0) {
    return (
      <>
        <h1 className="title">Empty Tours List</h1>
        <div className="underline"></div>
        <button
          type="button"
          className="refreshBtn"
          onClick={() => {
            featchData(url);
          }}
        >
          Refresh
        </button>
      </>
    );
  }
  return (
    <>
      <h1 className="title">Available Tours</h1>
      <div className="underline"></div>

      <main>{<Tours tours={tours} removeTour={removeTour} />}</main>
    </>
  );
}

export default App;
