import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';

const calculateGrade = (correctAnswersCount) => {
  if (correctAnswersCount === 0) {
    return 'F';
  } else if (correctAnswersCount <= 3) {
    return 'D';
  } else if (correctAnswersCount <= 6) {
    return 'C';
  } else if (correctAnswersCount <= 9) {
    return 'B';
  } else {
    return 'A ⭐️';
  }
};

const Quiz = () => {
  const dispatch = useDispatch();
  const quizState = useSelector((state) => state.quiz);

  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const isLastQuestion = quizState.currentQuestionIndex === quizState.questions.length - 1;

  const handleQuizCompletion = useCallback(() => {
    const correctAnswersCount = quizState.answers.filter((answer) => answer.isCorrect).length;
    const grade = calculateGrade(correctAnswersCount);

    setQuizCompleted(true);
  }, [quizState]);

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
    setAnswerSubmitted(false);
    setIsAnswerCorrect(false);
    setCorrectAnswerIndex(null);
    setQuizCompleted(false);
  };

  const handleAnswerSubmit = (answerIndex) => {
    if (answerSubmitted || quizCompleted) {
      return;
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    setCorrectAnswerIndex(currentQuestion.correctAnswerIndex);

    dispatch(quiz.actions.submitAnswer({ questionId: currentQuestion.id, answerIndex }));
    setAnswerSubmitted(true);

    if (quizState.quizOver) {
      handleQuizCompletion();
    }
  };

  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setAnswerSubmitted(false);
    setIsAnswerCorrect(false);
    setCorrectAnswerIndex(null);
  };

  useEffect(() => {
    if (answerSubmitted && quizState.answers.length > 0) {
      const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
      setIsAnswerCorrect(
        currentQuestion.correctAnswerIndex === quizState.answers.slice(-1)[0]?.answerIndex
      );

      if (isLastQuestion) {
        handleQuizCompletion();
      }
    }
  }, [answerSubmitted, quizState, isLastQuestion, handleQuizCompletion]);


  const quizCompletionContent = (
    <div className='quiz-summit'>
      <h2>Quiz Completed!</h2>
      <p>{`Correct Answers: ${quizState.answers.filter((answer) => answer.isCorrect).length}/15`}</p>
      <p>{`Your quiz grade: ${calculateGrade(
        quizState.answers.filter((answer) => answer.isCorrect).length
      )}`}</p>
      <button className='restart-button' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );

  if (quizCompleted) {
    return quizCompletionContent;
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <p className='question-number'>{`Question ${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`}</p>
      <p className='quiz-question'>{currentQuestion.questionText}</p>
      {answerSubmitted && (
        <div className='quiz-explanation'>
          <p>{`The correct answer is: ${currentQuestion.options[correctAnswerIndex]}`}</p>
          <p>{currentQuestion.correctAnswerExplanation}</p>
        </div>
      )}
      {!answerSubmitted && (
        <ul className='quiz-ul'>
          {currentQuestion.options.map((option, index) => (
            <li
              className='quiz-li'
              key={index}
              onClick={() => handleAnswerSubmit(index)}
              style={{ cursor: answerSubmitted ? 'not-allowed' : 'pointer' }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {answerSubmitted && (
        <button onClick={isLastQuestion ? handleQuizCompletion : goToNextQuestion}>
          {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default Quiz;
