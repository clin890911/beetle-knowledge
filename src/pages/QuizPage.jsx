import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';
import { useGame } from '../contexts/GameContext';
import ProgressBar from '../components/ProgressBar';
import ResultFeedback from '../components/ResultFeedback';
import QuizComplete from '../components/QuizComplete';
import { SingleChoice, MultipleChoice, TrueFalse, ImageQuestion, MatchingQuestion } from '../components/questions';

const questionComponents = {
  single: SingleChoice,
  multiple: MultipleChoice,
  truefalse: TrueFalse,
  image: ImageQuestion,
  matching: MatchingQuestion,
};

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const difficulty = searchParams.get('difficulty');

  const {
    startQuiz,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    answerQuestion,
    nextQuestion,
    showResult,
    isCorrect,
    quizComplete,
  } = useQuiz();

  const { correctCount, wrongCount, comboCount, xpEarned } = useGame();

  useEffect(() => {
    startQuiz({
      category: category || undefined,
      difficulty: difficulty ? parseInt(difficulty) : undefined,
      count: 10,
    });
  }, [category, difficulty]);

  if (quizComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuizComplete />
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🪲</div>
          <p className="text-xl">準備題目中...</p>
        </div>
      </div>
    );
  }

  const QuestionComponent = questionComponents[currentQuestion.type];
  const difficultyLabels = { 1: '簡單', 2: '中等', 3: '困難' };
  const difficultyColors = { 1: 'text-green-400', 2: 'text-yellow-400', 3: 'text-red-400' };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ProgressBar
        current={currentQuestionIndex}
        total={totalQuestions}
        correctCount={correctCount}
        wrongCount={wrongCount}
      />

      {/* XP & Combo display */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className={`px-2 py-1 rounded-lg bg-white/10 ${difficultyColors[currentQuestion.difficulty]}`}>
            {difficultyLabels[currentQuestion.difficulty]}
          </span>
          <span className="px-2 py-1 rounded-lg bg-white/10 text-white/60">
            {currentQuestion.category}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          {comboCount > 1 && (
            <motion.span
              className="text-orange-400 font-bold"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              key={comboCount}
            >
              🔥 x{comboCount}
            </motion.span>
          )}
          <span className="text-beetle-400 font-bold">+{xpEarned} XP</span>
        </div>
      </div>

      <motion.div
        key={currentQuestion.id}
        className="card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {QuestionComponent && (
          <QuestionComponent
            question={currentQuestion}
            onAnswer={answerQuestion}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        )}

        {showResult && (
          <ResultFeedback
            isCorrect={isCorrect}
            explanation={currentQuestion.explanation}
            onNext={nextQuestion}
            isLast={currentQuestionIndex + 1 >= totalQuestions}
          />
        )}
      </motion.div>
    </div>
  );
}
