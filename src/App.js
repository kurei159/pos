import { Routes, Route } from "react-router-dom";
import Home from "./views/home"
import Customer from "./views/customer_info"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
