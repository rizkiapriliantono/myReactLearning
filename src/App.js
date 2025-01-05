import React from 'react';
import ServiceApi from './components/service/Api-Service';
import Header from './components/header';
import Hero from './components/hero';
import Browser from './components/browser';
import Body from './components/body';
import Clients from './components/clients';
import SideMenu from './components/side-menu';
import Footer from './components/footer';

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
