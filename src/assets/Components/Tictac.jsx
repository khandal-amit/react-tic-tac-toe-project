import React, {useState} from 'react'
import './Tictac.css'
import x from '../x.png';
import o from '../o.png';

const Tictac = () => {

const[num, setNum] = useState([...Array(9).fill(null)])
const[cond, setCond] = useState(true)
const checkWinner = () =>{
    let winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

for(let i=0; i<winner.length; i++){
    let [a,b,c] = winner[i];
    if(num[a]!==null && num[a]===num[b] && num[a]===num[c]){
        return num[a];
    }
}
return null;
}

let result = checkWinner()


function handleClick(index){
    let copyArray = [...num];

    copyArray[index] = cond ? x : o;
    setNum(copyArray);
    setCond(!cond)

}
function play(){
    setNum([...Array(9).fill(null)])
    setCond(true);
}
    
  return (
    <div className='tic'>
      <h1 id='heading1'>Tic Tac Toe Game using <span>React.js</span> </h1>
<div class='player'>
      <p id='P1'>Player 1 : X </p>
      <p id='P2'>Player 2 : O</p>
      </div>
    
    {result ? (
        <h2 id='win'>{result===x? " Congrats: Player 1 is Winner 🚩🚩" : " Congrats: Player 2 is Winner 🚩🚩"}</h2>
    ) : null}
      <div className='box'>
<div className='row1'>
    <div className='boxes'  onClick={()=>handleClick(0)}>{num[0]&&<img className='ximg' src={num[0]} alt="" />} </div>
     <div className='boxes' onClick={()=>handleClick(1)}>{num[1]&&<img className='ximg' src={num[1]} alt="" />}</div>
      <div className='boxes' onClick={()=>handleClick(2)}>{num[2]&&<img className='ximg' src={num[2]} alt="" />}</div>
</div>
<div className='row2'>
    <div className='boxes' onClick={()=>handleClick(3)}>{num[3]&&<img className='ximg' src={num[3]} alt="" />}</div>
     <div className='boxes' onClick={()=>handleClick(4)}>{num[4]&&<img className='ximg' src={num[4]} alt="" />}</div>
      <div className='boxes' onClick={()=>handleClick(5)}>{num[5]&&<img className='ximg' src={num[5]} alt="" />}</div>
</div>
<div className='row3'>
    <div className='boxes' onClick={()=>handleClick(6)}>{num[6]&&<img className='ximg' src={num[6]} alt="" />}</div>
     <div className='boxes' onClick={()=>handleClick(7)}>{num[7]&&<img className='ximg' src={num[7]} alt="" />}</div>
      <div className='boxes' onClick={()=>handleClick(8)}>{num[8]&&<img className='ximg' src={num[8]} alt="" />}</div>
</div>
</div>
      <button id='btn'  onClick={play}>Reset</button>
    </div>
  )
}

export default Tictac
