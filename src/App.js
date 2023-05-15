import React from "react";
import Home from "./pages/Home/Home";
import './assets/styles/style.scss';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
