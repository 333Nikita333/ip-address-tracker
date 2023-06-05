import CardMyLinks from '../CardMyLinks';
import {
  AboutContainer,
  AboutTitle,
  AboutDescription,
  AboutLink,
  AnimatedButton,
} from './AboutInfo.stled';

const AboutInfo = () => {
  return (
    <AboutContainer>
      <AboutTitle>About</AboutTitle>
      <AboutDescription>
        Welcome to the IP Adress Tracker app! The main idea of ​​the project is
        to provide an easy way to search for any IP address and view key
        information and location details.
      </AboutDescription>
      <AboutDescription>
        This application is built with React and Vite framework. It utilizes the
        IPify API{' '}
        <AboutLink href="https://geo.ipify.org/" target="_blank">
          (https://geo.ipify.org/)
        </AboutLink>{' '}
        to retrieve IP information. The map functionality is implemented using
        LeafletJS with React-leaflet. Styling is done with styled-components.
        Routing is handled with react-router-dom. The search form is powered by
        react-hook-form. API requests are made using axios.
      </AboutDescription>
      <AboutDescription>
        Feel free to explore the different features of the app and get accurate
        information about any IP address you enter.
      </AboutDescription>
      <AboutDescription>
        For more information, you can visit the GitHub repository:{' '}
        <AboutLink
          href="https://github.com/333Nikita333/ip-address-tracker"
          target="_blank"
        >
          IP Adress Tracker
        </AboutLink>
      </AboutDescription>
      <AnimatedButton to="/search">Get Started</AnimatedButton>
      <CardMyLinks />
    </AboutContainer>
  );
};

export default AboutInfo;
