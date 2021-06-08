import React from 'react'
import { Button } from '../Button'
import {
    InfoConainer
} from './InfoStyles'

export default function index() {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine></TopLine>
                                <Heading></Heading>
                                <Subtitle></Subtitle>
                                <BtnWrap></BtnWrap>
                                <Button to="home"></Button>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
