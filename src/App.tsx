
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import ShippingInfo from './pages/ShippingInfo';
import Returns from './pages/Returns';
import TrackOrder from './pages/TrackOrder';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/shipping" element={<ShippingInfo/>}/>
            <Route path="/returns" element={<Returns/>}/>
            <Route path="/track-order" element={<TrackOrder/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;