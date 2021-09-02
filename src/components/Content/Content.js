import React from 'react';
import styles from './Content.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Content = () => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const eventChangeHandler = (event) => {
    setAnswer(event.target.value);
  };

  const questions = useSelector((state) => state.questions);
  const selected = useSelector((state) => state.selectedQuestion);
  const gameDone = useSelector((state) => state.questionsAnswered);
  const sentence =
    questions[0].answer +
    ' ' +
    questions[1].answer +
    ' ' +
    questions[3].answer +
    ' ' +
    questions[2].answer;

  const resetGame = () => {
    dispatch({ type: 'reset', payload: sentence });
  };

  const answerHandler = (e) => {
    e.preventDefault();
    if (answer !== '') {
      dispatch({ type: 'answer', payload: answer });
      dispatch({ type: 'done_check' });
      if (selected === 3) {
        dispatch({ type: 'select', questNum: 0 });
      } else {
        dispatch({ type: 'select', questNum: selected + 1 });
      }
      setAnswer('');
    }
  };

  const content = !gameDone ? (
    <div className={styles.wrapper}>
      <p>{questions[selected].text}</p>
      <form className={styles.myForm} onSubmit={answerHandler}>
        <input
          className={styles.in}
          onChange={eventChangeHandler}
          value={answer}
          placeholder='Write your answer here'
        ></input>
        <button className={styles.btn} type='submit'>
          Answer.
        </button>
      </form>
    </div>
  ) : (
    <div>
      <p>Your sentence is:</p>
      <p> {sentence}</p>
      <button className={styles.btn} onClick={resetGame}>
        Restart game
      </button>
    </div>
  );

  return <div className={styles.content}>{content}</div>;
};

export default Content;
