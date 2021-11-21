import React,{useState, useEffect} from 'react';
import BreakTimer from './BreakTimer';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export function Timer (){
    const [minutesLeft, setMinutesLeft]= useState(25);
    const [seconds, setSeconds]= useState(0);
    const [displayTimer, setDisplayTimer]=useState(false);
    const [mode, switchMode]=useState('work');
<CircularProgressbar value={40} text='40' styles={buildStyles({
pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
textColor: '#f88',
trailColor: '#d6d6d6',
backgroundColor: '#3e98c7',
})}/>


useEffect(()=>{
    const startTimer = setInterval(()=>{
clearInterval(startTimer)

        if(seconds=== 0){
            if(minutesLeft!== 0){
                setSeconds(59);
                setMinutesLeft(minutesLeft-1);
            }else{
                let minutes = displayTimer ? 24 :4
                let seconds = 59

                setSeconds(seconds -1);
                setMinutes(minutes);
                
            }

            
        }else{
            setSeconds(seconds -1)
            
        }


    },1000);
}, [seconds]);




    return(
        <div className="pomodoro">
        <div className="timer-comp">
            <h2>Time to work !</h2>
      {minutesLeft}:{seconds}
        </div>
        <div className="plus__button">
    <button className="plus" onClick={()=>setMinutesLeft(minutesLeft +1)}>+</button>
</div>
<div className="minus__button">
    <button onClick={()=>setMinutesLeft(minutesLeft -1)}>-</button>
</div>

        <div className="break-timer">
            <BreakTimer/>
        </div>
</div>
    
        
    )
 }



export default Timer;