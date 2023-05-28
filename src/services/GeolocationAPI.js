import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://geo.ipify.org/api/v2';
const URL_IP = 'https://api.ipify.org/?format=json';

export const getDataByIP = async ip => {
  try {
    const res = await axios.get(
      `${BASE_URL}/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );
    return res.data;
  } catch (error) {
    console.log('Error searching by IP:', error.message);
    throw error;
  }
};

export const getCurrentUserIP = async () => {
  try {
    const res = await axios.get(URL_IP);
    return res.data;
  } catch (error) {
    console.log('Error getting current IP:', error.message);
    throw error;
  }
};
