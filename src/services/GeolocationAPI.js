import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://geo.ipify.org';
const URL_IP = 'https://api.ipify.org/?format=json';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const getDataByIP = async ip => {
  try {
    const res = await axiosInstance.get(`/api/v2/country,city?ipAddress=${ip}`);
    return res.data;
  } catch (error) {
    console.log('Error searching by IP:', error.message);
    throw new Error(`Error searching by IP: ${error.message}`);
  }
};

export const getCurrentUserIP = async () => {
  try {
    const res = await axios.get(URL_IP);
    return res.data.ip;
  } catch (error) {
    console.log('Error getting current IP:', error.message);
    throw new Error(`Error getting current IP: ${error.message}`);
  }
};