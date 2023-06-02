import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCurrentUserIP, getDataByIP } from '../services/GeolocationAPI';
import SearchForm from '../components/SearchForm';
import DataDisplay from '../components/DataDisplay';
import MapBox from '../components/MapBox';
import Loader from '../components/Loader';
// import a from '../../ip.json';
// import b from '../../ip2.json';

import styled from 'styled-components';

const Background = styled.div`
  padding: 20px;
  height: 400px;

  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(62, 82, 163, 0.4),
      rgba(62, 82, 163, 0.4)
    ),
    url('/assets/pattern-bg-mobile-375x300.png');

  @media screen and (min-width: 401px) {
    height: 200px;

    background-image: linear-gradient(
        to right,
        rgba(62, 82, 163, 0.4),
        rgba(62, 82, 163, 0.4)
      ),
      url('/assets/pattern-bg-desktop-1440x280.png');
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;

  font-size: 23px;
  font-weight: 500;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Search = () => {
  const [ipData, setIpData] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const currentIP = await getCurrentUserIP();
        const data = await getDataByIP(currentIP);
        const { location } = data;

        setIpData(data);
        setMapLocation(location);
      } catch (error) {
        console.log('Error fetching data:', error.message);
        toast.error(`Error fetching data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async ip => {
    try {
      setIsLoading(true);
      const newData = await getDataByIP(ip);
      const { location: newLocation } = newData;

      setIpData(newData);
      setMapLocation(newLocation);
      toast.success(`Success. Data about ${ip} found.`);
    } catch (error) {
      console.log('Error searching data:', error.message);
      toast.error(`Error searching data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <Background>
        <Title>IP Adress Tracker</Title>
        <SearchForm onSearch={handleSearch} />
        {isLoading ? <Loader /> : ipData && <DataDisplay ipData={ipData} />}
      </Background>
      {mapLocation && !isLoading && <MapBox location={mapLocation} />}
    </section>
  );
};

export default Search;
