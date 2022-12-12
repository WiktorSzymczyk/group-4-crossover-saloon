import { client } from "./client";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Damen from "./components/Damen";
import Herren from "./components/Herren";
import JuniorAndKider from "./components/JuniorAndKider";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [servicePrice, setServicePrice] = useState([]);

  useEffect(() => {
    client
      .getEntries({ "metadata.tags.sys.id[all]": "servicePrice" })
      .then((entries) => {
        setServicePrice(entries.items);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(servicePrice);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {servicePrice && (
          <Route path="/damen" element={<Damen service={servicePrice} />} />
        )}
        {servicePrice && (
          <Route path="/herren" element={<Herren service={servicePrice} />} />
        )}
        {servicePrice && (
          <Route
            path="/juniorAndKider"
            element={<JuniorAndKider service={servicePrice} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
