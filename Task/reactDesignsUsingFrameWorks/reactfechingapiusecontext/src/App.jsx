import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import { asyncFetchData } from "./api/FetchData";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchData()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <div className="text-black">Loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <div className="bg-white">
          <Link to="/">Home</Link> |<Link to="/bookmark">Bookmark</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
