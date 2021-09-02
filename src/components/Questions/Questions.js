import React from 'react';
import styles from './Questions.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Questions = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const selected = useSelector((state) => state.selectedQuestion);

  const selectionHandler = (id) => {
    dispatch({ type: 'select', questNum: id });
  };

  return (
    <div className={styles.questions}>
      <ul>
        {questions.map((quest) => (
          <li
            key={quest.id}
            onClick={() => selectionHandler(quest.id)}
            style={{
              borderColor:
                selected === quest.id
                  ? 'var(--border-clr)'
                  : 'var(--border-dark)',
              background:
                quest.answer === ''
                  ? 'var(--background-main-clr)'
                  : 'var(--background-side-clr)',
            }}
          >
            {quest.id + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
