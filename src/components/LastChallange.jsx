// const intialStates = {
//   openAccount : null,
//   balance:0,

//   loan: 0,

// }
// function reducer(state,action){
//   switch(action.type){
//      case 'open':
//     return { ...state,
//       openAccount: true,
//       balance: 500
//     }
//   case 'diposit':
//     return { ...state,
//      balance:  state.balance + 150 
//     //  balance: state.balance !== 0 ? state.balance + 150 : state.balance
//     }
//   case 'withdraw':
//     return { ...state,
//      balance: state.balance !== 0 ? state.balance - 50 : state.balance
//     }
//   case 'loan':
//     return { ...state,
//      loan: state.loan + 5000 ,
//      balance: state.balance + 5000
//     }
//   case 'payloan':
//     if (state.balance < state.loan) return state
//     return { ...state,
//       loan : 0,
   
//       balance:state.balance - state.loan 
//     }
//   case 'close':
//     if(state.balance !== 0 || state.loan !== 0) return state;
//     return { ...intialStates 
     
//     }
// }
// }

// import React, { useReducer } from 'react'

// export default function App() {
// const [state,dispatch] =useReducer(reducer,intialStates)

// const { openAccount ,
//   balance,

//   loan,

// } = state

// const isAccountOpen = openAccount === true;

//   return (
    
//     <div className='app'>
//      <h3>Balance : {balance}</h3>
//      <h3>Loan : {loan}</h3>
//      <button className='btn btn-ui' disabled={isAccountOpen} onClick={()=> dispatch({type: 'open'})} >Open account</button>
//      <button className='btn btn-option' disabled={!isAccountOpen} onClick={()=> dispatch({type: 'diposit'})}  >Deposit</button>
//      <button className='btn btn-option'disabled={!isAccountOpen} onClick={()=> dispatch({type: 'withdraw'})} >Withdraw</button>
//      <button className='btn btn-option' disabled={!isAccountOpen} onClick={()=> dispatch({type: 'loan'})}>Request a loan of 5000</button>
//      <button className='btn btn-option' disabled={!isAccountOpen} onClick={()=> dispatch({type: 'payloan'})}>Pay loan</button>
//      <button className='btn btn-option'disabled={!isAccountOpen} onClick={()=> dispatch({type: 'close'})} >Close account</button>
//     </div>
//   )
// }
