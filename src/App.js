import Card from "./components/Card";
import Header from "./components/Header";
import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Basket from "./components/Basket/Basket";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./pages/Info";
import Singlepage from "./pages/Singlepage";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <div className="container">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="content">
          {
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                }
              />
              <Route path="/info/:id" element={<Singlepage />} />
              <Route path="/basket" element={<Basket />} />
            </Routes>
          }
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
