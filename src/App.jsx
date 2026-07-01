import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AllPCs from "./pages/AllPCs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-pcs" element={<AllPCs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;