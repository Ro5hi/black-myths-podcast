import React from 'react';
import { TeamContainer,
         TeamWrapper,
         TeamCard,
         MemberPhoto,
         MemberName,
         MemberHeadline 
} from './TeamStyles';

const Team = ({ member1, headline1, member2, headline2, member3, headline3, member4, headline4, member5, headline5 }) => {
    return (
        <TeamContainer id="team">
            <TeamWrapper>
                <TeamCard>
                    <MemberPhoto>  </MemberPhoto>
                    <MemberName> {member1} </MemberName>
                    <MemberHeadline> {headline1} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto> </MemberPhoto>
                    <MemberName> {member2} </MemberName>
                    <MemberHeadline> {headline2} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto>  </MemberPhoto>
                    <MemberName> {member3} </MemberName>
                    <MemberHeadline> {headline3} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto>  </MemberPhoto>
                    <MemberName> {member4} </MemberName>
                    <MemberHeadline> {headline4} </MemberHeadline>
                </TeamCard>
                <TeamCard>
                    <MemberPhoto>  </MemberPhoto>
                    <MemberName> {member5} </MemberName>
                    <MemberHeadline> {headline5} </MemberHeadline>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
};

export default Team;