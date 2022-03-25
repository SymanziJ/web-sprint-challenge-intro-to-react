// Write your Character component here

import React from 'react';
import styled from 'styled-components';


const CharWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CharDescWrapper = styled.div`
    background: white;
    padding: 10px; 
`

const Name = styled.h3`
    background: white;
    padding: 10px; 
`;


export default function Character(props) {
    return (
        <CharWrapper>
            <Name>
                {props.char.name}
            </Name>
        <CharDescWrapper>
            <p>
                Gender: {props.char.gender}
            </p>
            <p>
                Height: {props.char.height}
            </p>
            <p>
                Mass: {props.char.mass}
            </p>
            <p>
                Birth Year: {props.char.birth_year}
            </p>
            <p>
                Eye Color: {props.char.eye_color}
            </p>
            <p>
                Hair Color: {props.char.hair_color}
            </p>
            <p>
                Skin Color: {props.char.skin_color}
            </p>
        </CharDescWrapper>
            
        </CharWrapper>
    )
}