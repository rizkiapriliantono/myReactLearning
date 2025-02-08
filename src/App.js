import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceApi from './components/service/Api-Service.js';
import Header from './components/header.js';
import Hero from './components/hero.js';
import Browser from './components/browser.js';
import Body from './components/body.js';
import Clients from './components/clients.js';
import SideMenu from './components/sideMenu.js';
import Footer from './components/footer.js';
import Offline from './components/offline.js';
import Splash from './pages/splash.js';
import Profile from './pages/profile.js';
import Details from './components/details.js';

function App() {
  const [informationDetail, setInformationDetail] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  // Fungsi untuk mengecek koneksi online/offline
  const checkOnline = useCallback(() => {
    setIsOnline(navigator.onLine);
  }, []);

  // Fetch data saat komponen pertama kali dirender
  useEffect(() => {
    const fetchDataAndSetupListeners = async () => {
      try {
        // Fetch data
        const informationDetailData = await ServiceApi.getDataInformation();
        const data = Array.isArray(informationDetailData.nodes) ? informationDetailData.nodes : [];
        setInformationDetail(data);
  
        // Tambahkan script carousel hanya jika data ada
        if (data.length > 0) {
          const scriptCrousel = document.createElement('script');
          scriptCrousel.src = '/carousel.js';
          scriptCrousel.async = true;
          document.body.appendChild(scriptCrousel);
        }
  
        // Tambahkan event listener untuk online/offline
        checkOnline();
        window.addEventListener('online', checkOnline);
        window.addEventListener('offline', checkOnline);
      } catch (error) {
        console.error('Failed to fetch data', error.message);
        setInformationDetail([]);
      }
  };
  
    fetchDataAndSetupListeners();
  
    // Cleanup untuk event listener
    return () => {
      window.removeEventListener('online', checkOnline);
      window.removeEventListener('offline', checkOnline);
    };
  }, [checkOnline]);
  

  return (
    <>
    {isLoading === true ?  <Splash /> : (
      <>
      {!isOnline && <Offline />} {/* Gunakan `isOnline` untuk menentukan apakah Offline harus dirender */}
      <Header mode="light"/>
      <Hero />
      <Browser />
      {informationDetail.length === 0 ? (
        <p>Data tidak tersedia. Harap coba lagi nanti.</p>
      ) : (
        <Body informationDetailData={informationDetail} />
      )}
      <Clients />
      <SideMenu />
      <Footer />
      </>
    )}
    </>
  );
}

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}
