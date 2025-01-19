import React, { useEffect, useState, useCallback } from 'react';
import ServiceApi from './components/service/Api-Service';
import Header from './components/header';
import Hero from './components/hero';
import Browser from './components/browser';
import Body from './components/body';
import Clients from './components/clients';
import SideMenu from './components/sideMenu';
import Footer from './components/footer';
import Offline from './components/offline';

function App() {
  const [informationDetail, setInformationDetail] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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
      {!isOnline && <Offline />} {/* Gunakan `isOnline` untuk menentukan apakah Offline harus dirender */}
      <Header />
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
  );
}

export default App;
