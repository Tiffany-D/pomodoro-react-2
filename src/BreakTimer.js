import React,{useState, useEffect} from 'react';

export function BreakTimer(){
    const [minutesLeft, setMinutesLeft]= useState(5);
    const [seconds, setSeconds]= useState(0);
    const [isActive, setIsActive]=useState(false);


    useEffect(()=>{
        const startTimer = setInterval(()=>{
    clearInterval(startTimer)


    let intervalID;

if(isActive){
    intervalID=setInterval(()=>{
        
    })
    
            if(seconds=== 0){
                if(minutesLeft!== 0){
                    setSeconds(59);
                    setMinutesLeft(minutesLeft-1);
                }else{
                    let minutes = displayTimer ? 5 :4
                    let seconds = 59
    
                    setSeconds(seconds -1);
                    setMinutes(minutes);
                }
    
                
            }else{
                setSeconds(seconds -1)
                
            }
    
    
        }1000})
    }, [isActive, seconds]);




    return(
        
        <div className="break-time">
            <div className="break-message">
                <h2>Break Time !</h2>
            {minutesLeft}:{seconds}
        </div>
        <div className="start__stop__buttons">
            <button onClick={()=>setIsActive(!isActive)}>{isActive? 'Stop' : 'Start'}</button>
            
        </div>
        <div className="plus__button">
    <button className="plus" onClick={()=>setMinutesLeft(minutesLeft +1)}>+</button>
    
</div>
<div className="minus__button">
    <button onClick={()=>setMinutesLeft(minutesLeft -1)}>-</button>
</div>
        </div>
    )
}






export default BreakTimer;