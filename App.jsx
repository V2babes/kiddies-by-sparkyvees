import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <header className="bg-yellow-400 p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kiddies by SparkyVees" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-purple-900">Kiddies by SparkyVees</h1>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="text-purple-900 font-semibold">Home</Link>
          <Link to="/products" className="text-purple-900 font-semibold">Products</Link>
          <Link to="/contact" className="text-purple-900 font-semibold">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
