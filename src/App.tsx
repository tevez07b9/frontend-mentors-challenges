import React from "react";
import { Routes, Route } from "react-router-dom";
import QrCode from "./routes/qrcode";
import AgeCalculator from "./routes/agecalucator";
import Notifications from "./routes/notifications";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Notifications />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default App;
