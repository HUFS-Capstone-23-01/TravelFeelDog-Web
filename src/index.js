import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
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
