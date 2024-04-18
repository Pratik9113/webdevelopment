import React from 'react'

    const WelcomeMeassage = ({onGetPostClick}) => {
    return (
        <center>
            <h1> there are no message </h1> 
            <button type = "button" 
            onClick={onGetPostClick}
            className=" btn btn-primary">Get post on server </button>
        </center>
    )
}

export default WelcomeMeassage
