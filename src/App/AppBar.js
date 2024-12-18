import React from 'react';
import styled, { css } from 'styled-components';
import {AppContext} from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.$active && css`
        text-shadow: 0px 0px 10px #00ff00, 0px 0px 20px #00ff00;
    `}
`

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ControlButtonElem 
                    $active={page === name}
                    onClick={() => setPage(name)}
                >
                    {toProperCase(name)}
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
    <Bar>
        <Logo>  Crypto Dash </Logo> 
        <div/>
        <ControlButton  active name="dashboard" /> 
        <ControlButton  name="settings" />      
    </Bar>
    )
}