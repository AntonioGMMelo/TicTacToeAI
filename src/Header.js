import React from 'react'
import styled from 'styled-components'

    function Header(){

        return (

            <Container>            
        
                <HeaderText>Tic Tac Toe Unbeatable AI</HeaderText>
        
            </Container>
        
        );

    }

    export default Header

const Container = styled.div`
    
    text-align:center;
    background: linear-gradient(90deg, #FFF, #ffdddd, #FFF);
    min-height: 10vh;
    display:flex;
    justify-content:center;
    align-items:center; 
    flex-wrap:no-wrap;

`

const HeaderText = styled.div`

    color: #383b3e;
    font-family: 'Indie Flower', cursive;
    font-size:28px;
    padding: 3px;
    white-space:nowrap;
    text-shadow: -1.5px 3px 0 #FFF;

`
