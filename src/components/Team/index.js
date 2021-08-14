import React from 'react';
import { TeamContainer,
         TeamWrapper,
         TeamCard,
         MemberPhoto,
         MemberName,
         MemberHeadline 
} from './TeamStyles';

const Team = ({ member1, headline1, member2, headline2, member3, headline3, member4, headline4, member5, headline5, member6, headline6 }) => {
    return (
        <TeamContainer id="team">
            <TeamWrapper>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\tb.png" alt="tooblack"/> </MemberPhoto>
                    <MemberName> {member1} </MemberName>
                    <MemberHeadline> {headline1} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\elle.png" alt="elle"/> </MemberPhoto>
                    <MemberName> {member2} </MemberName>
                    <MemberHeadline> {headline2} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\ryan.png" alt="ryan"/> </MemberPhoto>
                    <MemberName> {member3} </MemberName>
                    <MemberHeadline> {headline3} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\shelle.png" alt="shelle"/> </MemberPhoto>
                    <MemberName> {member4} </MemberName>
                    <MemberHeadline> {headline4} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\ty.png" alt="tyrell"/> </MemberPhoto>
                    <MemberName> {member5} </MemberName>
                    <MemberHeadline> {headline5} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> <img src="\images\team\kam.png" alt="kameron"/> </MemberPhoto>
                    <MemberName> {member6} </MemberName>
                    <MemberHeadline> {headline6} </MemberHeadline>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
};

export default Team;