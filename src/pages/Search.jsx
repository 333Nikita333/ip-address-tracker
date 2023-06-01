import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCurrentUserIP, getDataByIP } from '../services/GeolocationAPI';
import SearchForm from '../components/SearchForm';
import DataDisplay from '../components/DataDisplay';
import MapBox from '../components/MapBox';
import a from '../../ip.json';
import b from '../../ip2.json';

const Background = styled.div`
  padding: 20px;
  height: 400px;

  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(62, 82, 163, 0.4),
      rgba(62, 82, 163, 0.4)
    ),
    url('/src/assets/pattern-bg-mobile-375x300.png');

  @media screen and (min-width: 401px) {
    height: 200px;

    background-image: linear-gradient(
        to right,
        rgba(62, 82, 163, 0.4),
        rgba(62, 82, 163, 0.4)
      ),
      url('/src/assets/pattern-bg-desktop-1440x280.png');
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const currentIP = await getCurrentUserIP();
        // const data = await getDataByIP(currentIP);
        const { location } = a;

        setIpData(a);
        setMapLocation(location);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async ip => {
    try {
      setIsLoading(true);
      // const newData = await getDataByIP(ip);
      const { location: newLocation } = b;

      setIpData(b);
      setMapLocation(newLocation);
    } catch (error) {
      console.log('Error searching data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <Background>
        <Title>IP Adress Tracker</Title>
        <SearchForm onSearch={handleSearch} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          ipData && <DataDisplay ipData={ipData} />
        )}
      </Background>
      {mapLocation && !isLoading && <MapBox location={mapLocation} />}
    </section>
  );
};

export default Search;
