import { motion } from 'framer-motion';
import { useGame, XP_PER_LEVEL, LEVEL_TITLES } from '../contexts/GameContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function QuizComplete() {
  const { xpEarned, correctCount, wrongCount, maxCombo, newAchievements, submitQuizResults, currentQuiz } = useGame();
  const { userData } = useAuth();
  const totalQuestions = currentQuiz?.length || 0;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  useEffect(() => {
    submitQuizResults();
  }, []);

  const getGrade = () => {
    if (accuracy >= 90) return { emoji: '🏆', text: '太厲害了！', color: 'text-yellow-400' };
    if (accuracy >= 70) return { emoji: '🌟', text: '表現不錯！', color: 'text-green-400' };
    if (accuracy >= 50) return { emoji: '💪', text: '繼續加油！', color: 'text-blue-400' };
    return { emoji: '📚', text: '多多練習！', color: 'text-white/60' };
  };

  const grade = getGrade();

  return (
    <motion.div
      className="max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="card text-center">
        <motion.div
          className="text-7xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
        >
          {grade.emoji}
        </motion.div>
        <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.text}</h2>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl font-bold text-beetle-400">{accuracy}%</div>
            <div className="text-sm text-white/60">正確率</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl font-bold text-yellow-400">+{xpEarned}</div>
            <div className="text-sm text-white/60">獲得 XP</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl font-bold text-green-400">{correctCount}/{totalQuestions}</div>
            <div className="text-sm text-white/60">答對題數</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl font-bold text-orange-400">{maxCombo}🔥</div>
            <div className="text-sm text-white/60">最高連擊</div>
          </div>
        </div>

        {newAchievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 text-yellow-400">🎉 新成就解鎖！</h3>
            <div className="space-y-2">
              {newAchievements.map((achievement, i) => (
                <motion.div
                  key={achievement.id}
                  className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                >
                  <span className="text-3xl">{achievement.icon}</span>
                  <div className="text-left">
                    <div className="font-bold">{achievement.name}</div>
                    <div className="text-sm text-white/60">{achievement.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Link to="/quiz" className="btn-primary flex-1">再來一局</Link>
          <Link to="/" className="btn-secondary flex-1">回首頁</Link>
        </div>
      </div>
    </motion.div>
  );
}
