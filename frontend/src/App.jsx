import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
