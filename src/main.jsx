import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/error" element={<Error />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
);
