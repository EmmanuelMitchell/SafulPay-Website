import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import FeaturePage from './pages/Feature';
import AboutUs from './pages/About-Us';
import TermsAndConditions from './pages/TermsAndConditions';
function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<FeaturePage />} /> */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;