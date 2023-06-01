import React from "react";
import { Routes, Route } from "react-router-dom";
import QrCode from "./routes/qrcode";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<QrCode />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Route>
    </Routes>
  );
}

export default App;
