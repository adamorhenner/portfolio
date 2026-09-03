'use client';

import React from 'react';

import * as S from './styles';

interface ImageWithIconsProps {
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    icon3: React.ReactNode;
}

const ImageWithIcons: React.FC<ImageWithIconsProps> = ({ icon1, icon2, icon3 }) => {
    return (
        <S.Container>
            <S.ImageWrapper>
                <img src="/images/adamor.png" alt="Adamor Henner" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            </S.ImageWrapper>
            <S.IconWrapper id="top-left" top="30px" left="-5%" transform="translateX(-10%)" size="40px"/>
            <S.IconWrapper id="top-right" top="20px" left="96%" transform="translateX(-90%)" size="60px">
                {icon1}
            </S.IconWrapper>
            <S.IconWrapper id="mid-right" top="230px" left="100%" transform="translateX(100%)" size="10px"/>
            <S.IconWrapper id="down-right" bottom="10px" left="85%" transform="translateX(-60%)" size="50px">
                {icon2}
            </S.IconWrapper>
            <S.IconWrapper id="down-left" top="75%" left="-15px" transform="translateY(-50%)" size="90px">
                {icon3}
            </S.IconWrapper>
        </S.Container>
    );
};

export default ImageWithIcons;