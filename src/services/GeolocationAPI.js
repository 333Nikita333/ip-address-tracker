import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://geo.ipify.org/api/v2';
const URL_IP = 'https://api.ipify.org/?format=json';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const getDataByIP = async ip => {
  try {
    const res = await axiosInstance.get(`/country,city?ipAddress=${ip}`);
    return res.data;
  } catch (error) {
    console.log('Error searching by IP:', error.message);
    throw error;
  }
};

export const getCurrentUserIP = async () => {
  try {
    const res = await axios.get(URL_IP);
    return res.data.ip;
  } catch (error) {
    console.log('Error getting current IP:', error.message);
    throw error;
  }
};
