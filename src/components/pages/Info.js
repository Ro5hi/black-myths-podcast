import React from 'react';

const Info = () => {
    return (
        <div className="myth" id="info">
            <strong>What is a myth?</strong>
            <p>
                An unfounded or false notion. Example: Racial superiority.
            </p>
            <div className="first-episode">
                <strong>First Episode</strong>
                <p>
                    Done amongst the podcast members only. Usually lightt-hearted with a lot of jokes, highly informative, and fun.
                </p>
            </div>
            <div className="second-episode">
                <strong>Second Episode</strong>
                <p>
                    An interview with an expert. It is more serious, in-depth, able to frame 
                    the myth in ways we never thought of, and adds more context to the myth.
                </p>
            </div>
        </div>
    )
};

export default Info;