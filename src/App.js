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
  const [herren, setHerren] = useState([]);
  const [damen, setDamen] = useState([]);
  const [juniorAndKider, setjuniorAndKider] = useState([]);

  useEffect(() => {
    client
      .getEntries({ "metadata.tags.sys.id[all]": "herren" })
      .then((entries) => {
        setHerren(entries.items);
      })
      .catch((err) => console.log(err));

    client
      .getEntries({ "metadata.tags.sys.id[all]": "damen" })
      .then((entries) => {
        setDamen(entries.items);
      })
      .catch((err) => console.log(err));

    client
      .getEntries({ "metadata.tags.sys.id[all]": "juniorAndKider" })
      .then((entries) => {
        setjuniorAndKider(entries.items);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("herren", herren);
  console.log("damen", damen);
  console.log("juniorAndKider", juniorAndKider);

  return (
    <div>
      <Navbar />

      <Routes>
        {herren && (
          <Route path="/herren" element={<Herren services={herren} />} />
        )}
        {damen && <Route path="/damen" element={<Damen services={damen} />} />}
        {juniorAndKider && (
          <Route
            path="/juniorAndKider"
            element={<JuniorAndKider services={juniorAndKider} />}
          />
        )}
      </Routes>

      <Home />
    </div>
  );
}

export default App;
