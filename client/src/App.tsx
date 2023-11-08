import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="events" element={<HomePage />} />
          <Route path="events:id" element={<HomePage />} />
          <Route path="sing-in" element={<HomePage />} />
          <Route path="sing-up" element={<HomePage />} />
          <Route path="profile" element={<HomePage />} />
          <Route path="profile/edit" element={<HomePage />} />
          <Route path="create" element={<HomePage />} />
          <Route path="search" element={<HomePage />} />
        </Route>
        <Route path="*" element={<h1>ERROR</h1>}></Route>
      </Routes>
    </>
  );
};

export default App;
