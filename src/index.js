import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InquiryModal from './pages/InquiryModal';
import EmailModal from './pages/EmailModal';
import InfoModal from './pages/InfoModal';
import SupportModal from './pages/SupportModal';
import PolicyModal from './pages/PolicyModal';
import LoginPage from './pages/LoginPage';
import ServiceIntroPage from './pages/ServiceIntroPage';
import CommunityPage from './pages/CommunityPage';
import CommunityWritingPage from './pages/CommunityWritingPage';
import WritingPage from './pages/WritingPage';
import MyPage from './pages/MyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage />} />
        <Route path='/pages/InquiryModal' element={ <InquiryModal></InquiryModal> } />
        <Route path='/pages/EmailModal' element={ <EmailModal></EmailModal> } />
        <Route path='/pages/InfoModal' element={ <InfoModal></InfoModal> } />
        <Route path='/pages/SupportModal' element={ <SupportModal></SupportModal> } />
        <Route path='/pages/PolicyModal' element={ <PolicyModal></PolicyModal> } />
        <Route path='/pages/LoginPage' element={ <LoginPage />} />
        <Route path='/pages/ServiceIntroPage' element={ <ServiceIntroPage />} />
        <Route path='/pages/CommunityPage' element={ <CommunityPage />} />
        <Route path='/pages/CommunityWritingPage' element={ <CommunityWritingPage />} />
        <Route path='/pages/WritingPage' element={ <WritingPage />} />
        <Route path='/pages/MyPage' element={ <MyPage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
