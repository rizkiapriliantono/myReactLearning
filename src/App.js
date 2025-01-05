import React from 'react';
import ServiceApi from './components/service/Api-Service';
import Header from './components/Header';
import Hero from './components/Hero';
import Browser from './components/Browser';
import Body from './components/Body';
import Clients from './components/Clients';
import SideMenu from './components/Side-Menu';
import Footer from './components/Footer';

function App() {
  const [informationDetail, setInformationDetail] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const informationDetailData = await ServiceApi.getDataInformation();
        setInformationDetail(Array.isArray(informationDetailData.nodes) ? informationDetailData.nodes : []);
        console.log('dataget information', informationDetailData.nodes);
        
      } catch (error) {
        console.error('Failed to fetch data', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browser />
      <Body informationDetailData={informationDetail} />
      <Clients />
      <SideMenu />
      <Footer />
    </>
  );
}

export default App;
