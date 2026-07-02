import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AllPCs from "./pages/AllPCs";
import PCDetails from "./pages/PCDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-pcs" element={<AllPCs />} />
        <Route path="/pc-details" element={<PCDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;