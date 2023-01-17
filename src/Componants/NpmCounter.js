import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const NpmCounter = () => {
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }
        return (
            <div className="timer">
                <div className="text">let's Learn Reactjs</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };
    return (
        <>
            <div>
                <div className="timer-wrapper">
                    <CountdownCircleTimer
                        isPlaying
                        duration={10}
                        colors={["#F71D0E","#EC740A","#A4F197","#0ABB0A", ]}
                        colorsTime={[10, 6, 3, 0]}
                        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
            </div> 
        </>
    )
}
export default NpmCounter
