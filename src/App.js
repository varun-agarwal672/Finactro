import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import ESGConsulting from './components/ESGConsulting';
import AccountingReportingConsulting from './components/AccountingReportingConsulting';
import Location from './components/Location';
import ContactUs from './components/ContactUs';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/esg-consulting" element={<ESGConsulting/>} />
        <Route path="/accounting-reporting-consulting" element={<AccountingReportingConsulting/>} />
        <Route path="/location" element={<Location />} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
