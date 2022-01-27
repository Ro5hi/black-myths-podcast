import React from 'react';
import { TeamContainer,
         TeamWrapper,
         TeamCard,
         MemberPhoto,
         MemberName,
         MemberHeadline 
} from './TeamStyles';

const Team = ({ data }) => {
    return (
        <TeamContainer id="team">
            <TeamWrapper>
                {data.map((member, index) => {
                    return (
                        <TeamCard key={index}>
                            <MemberPhoto>
                                <img src={member.img} alt="team-members" />
                            </MemberPhoto>
                            <MemberName>{member.name}</MemberName>
                            <MemberHeadline>{member.headline}</MemberHeadline>
                        </TeamCard>
                    )
                })}
            </TeamWrapper>
        </TeamContainer>
    )
};

export default Team;