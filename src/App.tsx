import React from "react";
import { Routes, Route } from "react-router-dom";
import QrCode from "./routes/qrcode";
import AgeCalculator from "./routes/agecalucator";
import Homepage from "./routes/homepage";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
      </Route>
    </Routes>
  );
}

export default App;
