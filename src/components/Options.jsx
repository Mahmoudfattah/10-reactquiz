import React from "react";

export default function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, indexOfButton) => (
        <button
          className={`btn btn-option ${indexOfButton === answer ? 'answer':''}
          ${hasAnswered ? indexOfButton === questions.correctOption ? 'correct' : 'wrong' : '' } `}
          onClick={() => dispatch({ type: "newAnswer", payload: indexOfButton })}
          key={option}
          disabled={hasAnswered}
        >
          {option}
        </button>
       
      ))}
     {/* { hasAnswered && <button className='btn btn-ui' onClick={()=> dispatch({type:'nextQ'})} >next</button>}//anthor solution but the design not the same */}
    </div>
  );
}
