import {FaDatabase, FaJava, FaReact} from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect';

import ImageWithIcons from "@/components/ImageWithIcons";

import * as S from './styles';

const HomeSection = () => {
    return (
        <S.HomeContainer style={{ position: 'relative', zIndex: 1 }}>
            <S.TitleContainer>
                <S.TitleDiv>
                    <p>Hello, I am</p>
                    <p>&lt; Adamor </p>
                    <p>Henner /&gt;</p>
                    <ReactTypingEffect
                        text={['Fullstack Developer']}
                        speed={100}
                        eraseDelay={1000}
                        typingDelay={500}
                        displayTextRenderer={(text) => {
                            return <p>&gt;{text}</p>;
                        }}
                        cursorRenderer={(cursor) => <span style={{ fontSize: '4rem', color: '#A68AB8' }}>{cursor}</span>}
                    />
                </S.TitleDiv>
            </S.TitleContainer>
            <ImageWithIcons
                icon1={<FaReact size={40} color="#61DBFB" />}
                icon2={<FaDatabase size={30} color="#4DB33D" />}
                icon3={<FaJava size={60} color="#920029FF" />}
            />
        </S.HomeContainer>
    );
};

export default HomeSection;