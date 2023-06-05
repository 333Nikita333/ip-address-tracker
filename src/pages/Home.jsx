import styled from 'styled-components';
import HomeInfo from '../components/HomeInfo';

const Section = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(0, 82, 163, 0.3),
      rgba(62, 82, 163, 0.5)
    ),
    url('/assets/background-image-home-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 82, 163, 0.3),
        rgba(62, 82, 163, 0.5)
      ),
      url('/assets/background-image-home-desctop.png');
  }
`;

const Home = () => {
  return (
    <Section>
      <HomeInfo />
    </Section>
  );
};

export default Home;
