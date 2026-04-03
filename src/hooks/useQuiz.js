import { useState, useCallback } from 'react';
import { useGame } from '../contexts/GameContext';
import allQuestions from '../data/questions';

export function useQuiz() {
  const { dispatch, currentQuiz, currentQuestionIndex, quizComplete } = useGame();
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const startQuiz = useCallback((options = {}) => {
    const { category, difficulty, count = 10 } = options;
    let filtered = [...allQuestions];
    if (category) filtered = filtered.filter(q => q.category === category);
    if (difficulty) filtered = filtered.filter(q => q.difficulty === difficulty);

    // Shuffle and pick
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    dispatch({ type: 'START_QUIZ', payload: selected });
    setShowResult(false);
    setIsCorrect(false);
  }, [dispatch]);

  const currentQuestion = currentQuiz?.[currentQuestionIndex] || null;
  const totalQuestions = currentQuiz?.length || 0;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex) / totalQuestions) * 100 : 0;

  const answerQuestion = useCallback((userAnswer) => {
    if (!currentQuestion || showResult) return;

    let correct = false;
    const q = currentQuestion;

    if (q.type === 'single' || q.type === 'image') {
      correct = userAnswer === q.answer;
    } else if (q.type === 'multiple') {
      const sorted1 = [...userAnswer].sort();
      const sorted2 = [...q.answer].sort();
      correct = JSON.stringify(sorted1) === JSON.stringify(sorted2);
    } else if (q.type === 'truefalse') {
      correct = userAnswer === q.answer;
    } else if (q.type === 'matching') {
      correct = userAnswer.every((ans, i) => ans === i);
    }

    setIsCorrect(correct);
    setShowResult(true);
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: { isCorrect: correct, questionId: q.id, difficulty: q.difficulty }
    });
  }, [currentQuestion, showResult, dispatch]);

  const nextQuestion = useCallback(() => {
    setShowResult(false);
    setIsCorrect(false);
    if (currentQuestionIndex + 1 >= totalQuestions) {
      dispatch({ type: 'COMPLETE_QUIZ' });
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  }, [currentQuestionIndex, totalQuestions, dispatch]);

  return {
    startQuiz,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answerQuestion,
    nextQuestion,
    showResult,
    isCorrect,
    quizComplete,
  };
}
