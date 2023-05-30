import { useEffect, useState } from 'react';
import { getCurrentUserIP, getDataByIP } from '../services/GeolocationAPI';
import SearchForm from '../components/SearchForm';
import DataDisplay from '../components/DataDisplay';
import MapBox from '../components/MapBox';

const Search = () => {
  const [ipData, setIpData] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentIP = await getCurrentUserIP();
        const data = await getDataByIP(currentIP);
        const { location } = data;

        setIpData(data);
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
      const newData = await getDataByIP(ip);
      const { location: newLocation } = newData;

      setIpData(newData);
      setMapLocation(newLocation);
    } catch (error) {
      console.log('Error searching data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        ipData && <DataDisplay ipData={ipData} />
      )}
      {mapLocation && !isLoading && <MapBox location={mapLocation} />}
    </section>
  );
};
 
export default Search;
