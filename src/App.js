import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Customer from "./views/customer_form";
import OrderMenu from "./views/order_menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/customer" element={<Customer />} />
      <Route path="/order_menu" element={<OrderMenu />}/>
    </Routes>
  );
}

export default App;
