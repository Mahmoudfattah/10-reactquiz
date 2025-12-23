
 const intialState = {count:0,step:1}
function reducer(state,action){


  switch(action.type){
  case 'inc':
  return {...state, count: state.count + action.payload}
  case 'dec':
  return {...state, count: state.count - action.payload}
  case 'setCount':
  return {...state, count: action.payload}
  case 'setStep':
  return {...state, step: action.payload}
  case 'rest':
  return intialState;
  // return {...state, count: 0, step: 1}
    default:
      return state;
  
  }
  // if(action.type === 'inc') return state + action.payload
  // if(action.type === 'dec') return state - action.payload
  // if(action.type === 'setCount') return action.payload

}


// export default DataCounter
import {useState,useReducer } from 'react'

export default function DateCounter() {

  const [state,dispatch] = useReducer(reducer,intialState)
  // const[count,setCount] =useState(0)
  // const [step,setStep]= useState(1)
 const {count,step} = state


  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const inc = ()=>{
    dispatch({type:'inc',payload:step})
    // setCount((count)=> count + step)
  }
  const dec = ()=>{
     dispatch({type:'dec',payload:step})
    // setCount((count)=> count - step)
  }

  const defineStep = (e)=>{
    dispatch({type:'setStep',payload: Number(e.target.value)})
    // setStep(( Number(e.target.value)))
  }
  const defineCount = (e)=>{
    dispatch({type:'setCount',payload: Number(e.target.value)})
    // setCount(( Number(e.target.value)))
  }

  function Rest(){
    dispatch({type:'rest'})
    // setCount(0)
    // setStep(1)
  }


  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
         value={step}
         onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec} >-</button>
        <input value={count} onChange={defineCount} type='number'/>
        <button onClick={inc} >+</button>
      </div>

      <p>{date.toDateString()} </p>

      <div>
        <button onClick={Rest} >Reset</button>
      </div>
    </div>
  );
  
}
