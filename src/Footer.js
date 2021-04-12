import React from 'react'
import styled from 'styled-components'

    function Footer(){

        return (

            <Container>            
        
                <LinkInstance href = "https://github.com/AntonioGMMelo" target = "_blank"><img src = "./GitHub-Mark-Light-32px.png" alt = "GitHub Logo"></img></LinkInstance>
                <LinkInstance href = "https://www.linkedin.com/in/antoniogmmelo/" target = "_blank"><img src = "./Li-In-Bug.png" width = "32px" height = "32px" alt = "LinkedIn Logo"></img></LinkInstance>
                <LinkInstance href = "https://antoniogmmelo.github.io/MyWeb" title = "Personal Website" target = "_blank"><img src = "./home.png" width = "32px" height = "32px" alt = "House Icon"></img></LinkInstance>
        
            </Container>
        
        );

    }

    export default Footer

    const Container = styled.div`
    
        background: #000021;
        min-height:10vh;
        display:flex;
        justify-content:center;
        align-items:center;

    `
    const LinkInstance = styled.a`
    
        margin: 0 20px 0 0;

    `