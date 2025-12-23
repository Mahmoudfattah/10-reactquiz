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

//have all the states
const intialStates = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondRemining: null,
};

const SECS_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      }; //now q have array with the result of fetch data
    case "dataFailed":
      return {
        ...state,

        status: "error",
      }; //this happend when any error will show page Error
    case "start":
      return {
        ...state,

        status: "active",
        secondRemining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      const isCorrect = action.payload === question.correctOption;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect
          ? state.points + question.points // ✅ جمع النقاط
          : state.points, // ❌ لا تغيّر النقاط لو الإجابة غلط
      };
    }

    case "nextQ":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,

        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...intialStates, // نبدأ من الحالة الابتدائية
        questions: state.questions, // نحافظ على الأسئلة الموجودة
        status: "ready",
        highScore: state.highScore,
      };
    case "tick":
      return {
        ...state,
        secondRemining: state.secondRemining - 1,
        status: state.secondRemining === 0 ? "finish" : state.status,
            highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    default:
      throw new Error("Action unKown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialStates);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highScore,
    secondRemining,
  } = state;

  const number = questions.length;
  const maxResult = questions.reduce((pref, cur) => {
    return pref + cur.points;
  }, 0);

  useEffect(() => {
  async function getQuestions() {
    try {
      const res = await fetch("/questions.json");
      if (!res.ok) throw new Error("Failed to load questions");
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data.questions });
    } catch (err) {
      dispatch({ type: "dataFailed" });
    }
  }
  getQuestions();
}, []);


  // useEffect(function () {
  //   fetch(`http://localhost:9000/questions`)
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch(() => dispatch({ type: "dataFailed" }));
  // }, []);

  return (
    <div className="app">
      <Header />
      <Main questions={questions}>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen number={number} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            {" "}
            <Progress
              index={index}
              number={number}
              points={points}
              maxResult={maxResult}
              answer={answer}
            />
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondRemining={secondRemining} dispatch={dispatch} />
              <NextQuestion
                answer={answer}
                dispatch={dispatch}
                index={index}
                number={number}
              />
            </Footer>
          </>
        )}

        {status === "finish" && (
          <FinishScreen
            points={points}
            maxResult={maxResult}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}


