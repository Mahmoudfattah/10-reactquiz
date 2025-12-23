import React from 'react'

export default function FinishScreen({ points, maxResult ,highScore,dispatch }) {
  const percentage = (points / maxResult) * 100;

  let emoji;
  if (percentage === 100) emoji = '🏆';                // كل الإجابات صحيحة 🎯
  else if (percentage >= 80) emoji = '🎉';            // أداء ممتاز 👏
  else if (percentage >= 60) emoji = '😊';            // جيد جدًا 👍
  else if (percentage >= 40) emoji = '😐';            // متوسط 🙂
  else emoji = '😢';                                 // محتاج مراجعة 😅

  return (
    <>
    <p className="result">
      You scored <strong>{points}</strong> out of {maxResult} 
      <span></span> ({Math.ceil(percentage)}%)  <span> {emoji}</span>
    </p>

    <p className='highscore'>(HighScore : {highScore} points) </p>
    <button className='btn btn-ui' onClick={()=> dispatch({type:'reset'})}>Restart Quiz</button>
    </>

  );
}
