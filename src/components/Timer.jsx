import React, { useEffect } from 'react'



export default function Timer({secondRemining ,dispatch}) {
    const min = Math.floor(secondRemining / 60);
    const sec = secondRemining % 60
 
    useEffect(function(){
   const id = setInterval(
        function(){
            dispatch({type:'tick'})
        },
    1000)

    return ()=> clearInterval(id)
},[dispatch])

  return (
    <div className='timer'>
        {min < 10 && '0'}
        {min}
        :
        {sec < 10 && '0'}
        {sec}
        </div>
  )
}
