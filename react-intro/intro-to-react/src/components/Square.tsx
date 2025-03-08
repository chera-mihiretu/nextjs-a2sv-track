import './style.css'
import { useState } from 'react';

interface Props {
    value: string
    onSquareClick: () => void
}

export default function Square ({value, onSquareClick} : Props){
    

    return <button className="square" onClick={onSquareClick}> {value} </button>
}
