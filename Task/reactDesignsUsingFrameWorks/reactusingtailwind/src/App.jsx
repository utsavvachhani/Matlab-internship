import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesRoutes from "./Routes/ServicesRoutes";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import  Tailwindpages  from "./constants/RoutesDeclartaion/Tailwindpages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />

        {/* tailwind routes */}
        <Route path={Tailwindpages.path} element={Tailwindpages.element}>
          {Tailwindpages.Children.map((childRoute, index) => (
            <Route
              key={index}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>

        
        {ServicesRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
