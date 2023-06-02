import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { CardContainer, Text, SocialLink } from './CardMyLinks.styled';

const CardMyLinks = () => {
  return (
    <CardContainer>
      <Text>My contact details</Text>
      <SocialLink
        href="https://github.com/333Nikita333"
        rel="noreferrer noopener"
        target="_blank"
      >
        <AiFillGithub size={25} color="#000000" />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/mykyta-hilis/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaLinkedinIn size={25} color="#0077B5" />
      </SocialLink>
      <SocialLink
        href="https://t.me/NikitaGilis"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaTelegramPlane size={25} color="#0088cc" />
      </SocialLink>
      <SocialLink
        href="mailto:mykytahilis@gmail.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        <SiGmail size={25} color="#db4437" />
      </SocialLink>
    </CardContainer>
  );
};

export default CardMyLinks;
