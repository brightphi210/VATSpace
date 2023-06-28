
import Home from "./pages/home";
import About from "./pages/about";
import Physical from "./pages/physical";
import Contact from "./pages/contact";
import Service from "./pages/service";


import Dashboard from "./pages/dashboard";
import PropertDashboard from "./components/dashboard_components/property_dashboard";

import SinglePhysicalProduct from "./pages/singlePhysicalProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteDashboard from "./components/dashboard_components/favourite_dashboard";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="services" element={<Service />} />
        <Route path="contact" element={<Contact />} />

        <Route path={"physical"} element={<Physical />}></Route>
        <Route path="singlePhysicalProduct" element={<SinglePhysicalProduct />} />

        <Route path={"dashboard"} element={<Dashboard />}></Route>
        <Route path={"dashboard/properties"} element={<PropertDashboard />}></Route>
        <Route path={"dashboard/favourites"} element={<FavouriteDashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
