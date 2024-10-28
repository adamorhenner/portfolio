import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const TitleDiv = styled.div`
    flex: 1;
    text-align: left;
    color: #A68AB8; /* Light Color */
    font-family: 'Roboto', Arial, sans-serif;

    p {
        margin: 0;
        font-size: 1.5rem;
    }

    p:first-child {
        font-size: 2.5em;
        font-weight: bold;
    }

    p:nth-child(2),
    p:nth-child(3) {
        font-size: 4.8rem;
        font-weight: bold;
        margin: 0;
    }

    p:last-child {
        font-size: 3.6rem;
        color: #5C2F6E; /* Accent Color */
    }

    @media (max-width: 768px) {
        p:first-child {
            font-size: 1.5rem;
        }

        p:nth-child(2),
        p:nth-child(3) {
            font-size: 3rem;
        }

        p:last-child {
            font-size: 2.5rem;
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;
