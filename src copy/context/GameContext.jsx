import { createContext, useContext, useEffect, useReducer } from "react";

const intialStates = {
  questions: [],
  status: 'loading'
};
function reducer(state, action) {
  switch(action.type){
    case 'dataRecived':
        return{
            ...state,
            questions: action.payload,
            status: 'active'
        }
        case 'dataFailed':
        return{
            ...state,
            status: 'error'
        }
  }
}

const GameContext = createContext();

function GameProvider({ childer }) {
  const [{ questions }, dispatch] = useReducer(reducer, intialStates);

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch(dispatch({ type: "dataFailed" }));
  }, []);

  return <GameContext.Provider>{childer}</GameContext.Provider>;
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("useGame was used outside of the GameProvider");
  return context;
}

export { useGame, GameProvider };
