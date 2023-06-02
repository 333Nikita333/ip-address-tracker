import styled from 'styled-components';
import AboutInfo from '../components/AboutInfo';

const Section = styled.section`
  background: linear-gradient(135deg, #283048 0%, #859398 100%);
`;

const About = () => {
  return (
    <Section>
      <AboutInfo />
    </Section>
  );
};

export default About;
