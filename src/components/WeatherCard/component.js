import React from 'react';
import styled from '@emotion/styled';

const WeatherCard = (props) => {

    const red = 100;
    const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(${red},200,200), lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;`
    return (
        <Card className="card">
            <div className="location">
                <h1 className='city'>Sydney</h1>
                <h3 className='country'>AU</h3>
            </div>
            <img className='icon' src="./img/cloudy2.png" alt="Weather Icon" />
            <h1 className='temp'>20 C</h1>
            <h3 className='condition'>Clouds</h3>
        </Card>
    );
}

export default WeatherCard;