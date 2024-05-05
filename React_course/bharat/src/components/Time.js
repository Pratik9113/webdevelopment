import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time,settime] = useState(new Date());
    useEffect(() =>{
        const intervalId = setInterval(()=>{
            settime(new Date());
        },1000);

        return () =>{
            clearInterval(intervalId);
            console.log("canclleted")
        }
    },[]);
    return (
        <>
            <p> this is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
        </>
    )
}

export default Time
