import styled from 'styled-components'

export const FeaturedContainer = styled.div`
    color: black;
    height: 100%;
    display: flex;
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
    align-items: center;
    
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        height: 1200px;
    }
`

export const FeaturedCard = styled.div`
    background: white;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    border-radius: 10px;
    max-height: 400px;
    max-width: 400px;
    padding: 20px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FeaturedName = styled.div`
    color: black;
    font-size: 20px;
    text-align: center;
`

export const FeaturedPhoto = styled.div`
    max-height: 100%;
    max-width: 100%;
    margin-top: 14px;
    margin-bottom: 14px;
`

export const FeaturedHeadline = styled.div``

