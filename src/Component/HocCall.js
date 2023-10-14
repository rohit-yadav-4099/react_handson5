import React from "react";


function HOCCall(props){
    return(
        <>
           <h5 style={{backgroundColor : "red"}}>{<props.value />}</h5> 
        </>
    )
}
export default HOCCall


function HOCBlue(props){
    return(
        <>
        <h4  style={{backgroundColor : "blue"}}>{<props.value />}</h4>
        </>
    )
}
export {HOCBlue}


function HOCGreen(props){
    return(
        <>
        <h3 style={{backgroundColor : "green"}}>{< props.value/>}</h3>
        </>
    )
}

export {HOCGreen}