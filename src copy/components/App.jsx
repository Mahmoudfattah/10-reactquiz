import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useGame } from "../context/GameContext";



export default function App() {
  

  const {status} = useGame()
 
  useEffect(function () {
   
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
       {status === 'active' && 
       <StartScreen/>
       }
      </Main>
    </div>
  );
}


