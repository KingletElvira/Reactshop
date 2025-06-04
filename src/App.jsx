import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Header, Footer, Shop, ProductPage } from "./components/layout";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="products/:productId" element={<ProductPage />} />
      </Routes>
      <Shop />
      <Footer />
    </Router>
  );
}
