import { useState, useEffect } from 'react';
import { HomeContainer, WelcomeMessage, Feature } from './HomeInfo.styled';
import { fadeInSecondary, fadeOut } from '../../styles/animations.styled';

const phrases = ['Easy to use!', 'Fast and reliable!', 'Powerful features!'];

const HomeInfo = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [currentPhraseIndex]);

  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to IP Adress Tracker App!</WelcomeMessage>
      <Feature
        animationIn={fadeInSecondary}
        animationOut={fadeOut}
        key={currentPhrase}
      >
        {currentPhrase}
      </Feature>
    </HomeContainer>
  );
};

export default HomeInfo;
