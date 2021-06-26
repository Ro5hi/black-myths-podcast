import styled from "styled-components";

export const TeamContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1200px;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 15px;
    grid-gap: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const TeamCard = styled.div`
    background: black;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    max-width: 400px;
    padding: 15px;
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const MemberPhoto = styled.div`
    max-height: 100%;
    max-width: 100%;
    margin-top: 14px;
    margin-bottom: 14px;
`

export const MemberName = styled.div`
    color: red;
    font-size: 20px;
    text-align: center;
`

export const MemberHeadline = styled.div`
    color: white;
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
    
    @media screen and (max-width: 480px) {
        font-size: 12px;
      }
`