import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => {

    const locationDiv = styled.div`
    text-align: center;
    `
    return (
        <locationDiv>
            <h1 className='city'>Sydney</h1>
            <h3 className='country'>AU</h3>
        </locationDiv>
    );
}

export default Location;