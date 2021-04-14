import React from 'react'
import styled from 'styled-components'
import Square from './Square'
import { useState } from "react"
import functions from "./logic"

    function Content(){

        const [board, setBoard] = useState([".", ".", ".", ".", ".", ".", ".", ".", "."]);

        const chooseSquare = (square) => {

            let isMove = false;

            let newNewBoard = [];

            for(let i = 0; i< board.length; i++){
                if(i === square && board[i] === "."){
                    newNewBoard.push("x");
                    isMove = true;
                    document.getElementsByClassName("Square")[i].classList.add("X");
                }else{
                    newNewBoard.push(board[i]);
                }
            }

            setBoard(newNewBoard);

            if(isMove){
               
                helper(newNewBoard);
                isMove=false;
            
            }

        };

        const helper = async(board) =>{

            const toString = board[0] + board[1] + board[2] + board[3] + board[4] + board[5] + board[6] + board[7] + board[8];
            const newBoard = functions.move(toString);

            for(let i = 0; i < newBoard.length; i++){
                if(newBoard[i] === "o"){
                    document.getElementsByClassName("Square")[i].classList.add("O");
                }
            }

            const toArray = [newBoard[0], newBoard[1], newBoard[2], newBoard[3], newBoard[4], newBoard[5], newBoard[6], newBoard[7], newBoard[8]];

            setBoard(toArray);

            await new Promise(r => setTimeout(r, 100));

            helper2(newBoard);            
            
        };

        const helper2 = (newBoard) =>{

            if(functions.hasWon(newBoard)){

                alert("The AI Is Victourious Once More!");

            }else{

                if(helper3(newBoard)){
      
                    alert("You Have Tied, An Impressive Feat It Is Not to Be Defeated.");
      
                }
            
            }

        };

        const helper3 = (newBoard) =>{

            for(let i = 0 ; i < newBoard.length ; i++){

                if(newBoard[i] === "."){

                    return false;
                
                }

            }

            return true;

        };

        return (

            <Container>            
        
                <TicTacToeBoard>

                    <Square val = {board[0]} chooseSquare = {() => {chooseSquare(0);}} />
                    <Square val = {board[1]} chooseSquare = {() => {chooseSquare(1);}} />
                    <Square val = {board[2]} chooseSquare = {() => {chooseSquare(2);}} />
                    <Square val = {board[3]} chooseSquare = {() => {chooseSquare(3);}} />
                    <Square val = {board[4]} chooseSquare = {() => {chooseSquare(4);}} />
                    <Square val = {board[5]} chooseSquare = {() => {chooseSquare(5);}} />
                    <Square val = {board[6]} chooseSquare = {() => {chooseSquare(6);}} />
                    <Square val = {board[7]} chooseSquare = {() => {chooseSquare(7);}} />
                    <Square val = {board[8]} chooseSquare = {() => {chooseSquare(8);}} />

                </TicTacToeBoard>
                
                <Button type = "button" onClick = { ()=> {setBoard([".",".",".",".",".",".",".",".","."]);

                                                            for(let i = 0; i<board.length; i++){
                                                                
                                                                document.getElementsByClassName("Square")[i].classList.remove("O");
                                                                document.getElementsByClassName("Square")[i].classList.remove("X");
                                                                
                                                            }   

                                                            }}>Reset</Button>

            </Container>
        
        );

    }

    export default Content

    const Container = styled.div`
    
        background: #555555;
        min-height:80vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;

    `

    const TicTacToeBoard = styled.div`
        
        height:60vh;
        width:60vh;
        background:#FFF;
        border: 5px solid #000;
        display:grid;
        grid-template-columns: auto auto auto;
        grid-template rows: auto auto auto;
        border-radius:10px;
        margin-right: 10px;

        @media(max-width: 700px){
         
            height:50vh;
            width:50vh;

        }

        @media(max-width: 600px){
         
            height:40vh;
            width:40vh;

        }

        @media(max-width: 500px){
         
            height:30vh;
            width:30vh;

        }

    `
    const Button = styled.button`
    
        background: green;
        color: #FFF;
        margin-top: 20px;
        width:200px;
        height: 100px;
        border: none;
        border-radius: 200px;
        font-size: 32px;
        cursor: pointer;
    
        &:focus{
            outline:none;
            color: #000;
            opacity:.7;
        }

        &:hover{

            color: #000;
            opacity:.7;
        
        }

    `