# IP Adress Tracker App
![Logo](./public/assets/Logo.png)

## Description
IP Adress Tracker project is a web application developed using [React](https://react.dev/) and [Vite](https://vitejs.dev/) to get location information from an IP address. It allows the user to enter an IP address and get data such as location, time zone, and internet connection provider. In addition, the application also displays a map with a marker indicating the location based on the received data.

## Installation and launch
1. Clone the repository to your local machine: `git clone https://github.com/333Nikita333/ip-address-tracker.git`.
2. Change to the project directory: `cd ip-address-tracker`.
3. Install dependencies: `npm install` or `yarn install`.
4. Get an API key for the IP geolocation service by registering at https://geo.ipify.org. Then create an .env file in the root directory of the project and add your API key to it: `REACT_APP_API_KEY=your-api-key`.
5. Run the application: `npm run dev` or `yarn dev`.
The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage
1. Open the application in a browser, go to the Search page and you will see a form for entering an IP address.
2. Enter a valid IP address in the form and click the "Search" button.
3. The app will get the location data of the entered IP address and display it and also show a marker on the map with the corresponding location.

If you find bugs or have suggestions for improving the project, feel free to create Issues and Pull Requests in the project repository. Your input is welcome!

## Used Libraries
    "axios": "^1.4.0",
    "leaflet": "^1.9.4",
    "modern-normalize": "^2.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.44.1",
    "react-icons": "^4.9.0",
    "react-leaflet": "^4.2.1",
    "react-loader-spinner": "^5.3.4",
    "react-router-dom": "^6.11.2",
    "react-toastify": "^9.1.3",
    "styled-components": "^5.3.11"
