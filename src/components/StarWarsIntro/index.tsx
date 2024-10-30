import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';

const crawlAnimation = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: -170%;
  }
`;

const StarWarsIntroContainer = styled.div`
  font-family: 'Arial', sans-serif;
  perspective: 1000px;
  overflow: hidden;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.16);
  color: yellow;
  position: relative;

  &:before {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    content: " ";
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    z-index: 100;
  }
`;

const Crawl = styled.div`
  font-size: 4em;
  bottom: 0;
  height: 60rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) perspective(900px) rotateX(28deg);
  transform-origin: 50% 100%;
  width: 90%;
  animation: ${crawlAnimation} 30s linear infinite;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 480px) {
    font-size: 3em;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 100%;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Subtitle = styled.h2`
  font-family: "Saira Extra Condensed", sans-serif;
  font-size: 3em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 7rem;
  transform: scale(1, 1.5);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Paragraph = styled.p`
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 4rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const StarWarsIntro: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 3, repeatDelay: 1 });
    tl.set(contentRef.current, { top: '100%' }); // Reset position
    tl.to(contentRef.current, { top: "-170%", duration: 10 });
  }, []);

  return (
    <StarWarsIntroContainer>
      <Crawl>
        <Content ref={contentRef}>
          <Title>Episode 7</Title>
          <Subtitle>THE APP AWAKENS</Subtitle>
          <Paragraph>The Development Team Lead has vanished. In her absence, the sinister FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not rest until the last developer has been destroyed.</Paragraph>
          <Paragraph>With the support of the QA TEAM, the Software Developer leads a brave RESISTANCE. He is desperate to find his Lead and gain her help in restoring peace and justice to the repository.</Paragraph>
          <Paragraph>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</Paragraph>
        </Content>
      </Crawl>
    </StarWarsIntroContainer>
  );
};

export default StarWarsIntro;