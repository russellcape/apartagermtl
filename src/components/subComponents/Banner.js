import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return (
        <StyledBanner>
            <h2>A Partager Mtl</h2>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </StyledBanner>
    );
}

const StyledBanner = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px red solid;
    align-items: center;

    h2 {
        padding: 0 1rem;
    }
    
    button {
        margin: 0 1rem;
    }
`;

export default Banner
