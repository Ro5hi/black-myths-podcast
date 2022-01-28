import styled from 'styled-components'

export const FeaturedContainer = styled.div`
    height: 100vh;
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
export const FeaturedWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 15px;
    grid-gap: 20px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const FeaturedCard = styled.div`
    background: black;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    max-width: 350px;

    &:hover {
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FeaturedName = styled.div`
    color: white;
    font-size: 20px;
    text-align: center;
`

export const FeaturedPhoto = styled.div`
    margin-top: 14px;
    margin-bottom: 14px;
`