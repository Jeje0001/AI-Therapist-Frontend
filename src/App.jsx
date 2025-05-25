

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Feature1 from './components/FeatureSpeak';
import Feature2 from './components/Featurelistening';
import Feature3 from './components/FeatureJournal';
import FAQ from './components/FAQ';
import ClosingCTA from './components/Closingcta';

import Login from './components/Login'; 
import Signup from './components/Signup'; 
import PrivacyPolicy from './components/Privacy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
