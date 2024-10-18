import React from 'react';
import styled from 'styled-components';
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import * as S from './styles';

const ImageWithIcons = () => {
    return (
        <S.Container>
            <S.ImageWrapper>
                <img src="/images/adamor.png" alt="Adamor Henner" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            </S.ImageWrapper>
            <S.IconWrapper top="200px" left="100%" transform="translateX(20%)"/>
            <S.IconWrapper top="30px" left="-5%" transform="translateX(-10%)"/>
            <S.IconWrapper top="20px" left="96%" transform="translateX(-90%)">
                <FaReact size={40} color="#61DBFB" />
            </S.IconWrapper>
            <S.IconWrapper bottom="10px" left="85%" transform="translateX(-60%)">
                <FaNodeJs size={30} color="#68A063" />
            </S.IconWrapper>
            <S.IconWrapper top="75%" left="-15px" transform="translateY(-50%)">
                <FaDatabase size={60} color="#4DB33D" />
            </S.IconWrapper>
        </S.Container>
    );
};

export default ImageWithIcons;