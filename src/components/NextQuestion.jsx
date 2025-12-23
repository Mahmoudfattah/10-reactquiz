import React from 'react'

export default function NextQuestion({dispatch,answer ,index,number} ) {
  

  if(answer === null) return null
  if(index < number -1)
    return (
   <button className='btn btn-ui' onClick={()=> dispatch({type:'nextQ'})}>Next</button>
  )
  if(index === number -1)
    return (
   <button className='btn btn-ui' onClick={()=> dispatch({type:'finish'})}>Finish</button>
  )
}
