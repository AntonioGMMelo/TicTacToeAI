import React from 'react'
import "./App.css"

function Square({val, chooseSquare}) {
    return (
        <div val = {val} className = "Square" onClick = {chooseSquare} >
        </div>
    )
}

export default Square
