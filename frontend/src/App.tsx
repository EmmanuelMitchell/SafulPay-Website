import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
// import SafulPay from './pages/SafulPay';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SafulPayPage from './pages/SafulPay';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/safulpay" element={<SafulPayPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;