import React from "react";
import { Routes, Route } from "react-router-dom";
import QrCode from "./routes/qrcode";
import AgeCalculator from "./routes/agecalucator";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<AgeCalculator />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
      </Route>
    </Routes>
  );
}

export default App;
