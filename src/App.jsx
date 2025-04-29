import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./app/landing/Landing";
import ThankYou from "./app/landing/thankyou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
