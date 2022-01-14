import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Customer from "./views/customer_form";
import OrderMenu from "./views/order_menu";
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/customer" element={<Customer />} />
        <Route path="/order_menu" element={<OrderMenu />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
