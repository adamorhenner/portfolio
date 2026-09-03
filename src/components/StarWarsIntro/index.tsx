'use client';

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import type { Dictionary } from '@/i18n/getDictionary';

type Props = {
  dict: Dictionary['experience'];
};

const StarWarsIntroContainer = styled.div`
  font-family: 'Arial', sans-serif;
  perspective: 1000px;
  overflow: hidden;
  height: 100vh;
  color: #A68AB8;
  position: relative;

  &:before {
    background: linear-gradient(to bottom, rgba(17, 7, 31, 1) 0%, rgba(17, 7, 31, 1) 20%, rgba(17, 7, 31, 0) 40%, rgba(17, 7, 31, 0) 100%);
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

const StarWarsIntro = ({ dict }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    // Quem pediu menos animacao no sistema le o texto parado, sem rolagem.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(node, { top: '5%' });
      return;
    }

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.set(node, { top: '100%' });
    tl.to(node, { top: '-170%', duration: 25, ease: 'none' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <StarWarsIntroContainer>
      <Crawl>
        <Content ref={contentRef}>
          <Title>{dict.episode}</Title>
          <Subtitle>{dict.title}</Subtitle>
          {dict.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph.slice(0, 24)}>{paragraph}</Paragraph>
          ))}
        </Content>
      </Crawl>
    </StarWarsIntroContainer>
  );
};

export default StarWarsIntro;