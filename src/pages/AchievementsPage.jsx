import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ACHIEVEMENTS } from '../contexts/GameContext';

export default function AchievementsPage() {
  const { userData } = useAuth();
  const earned = userData?.achievements || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2 text-center">🏅 成就徽章</h2>
      <p className="text-center text-white/60 mb-8">
        已解鎖 {earned.length} / {ACHIEVEMENTS.length} 個成就
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((achievement, i) => {
          const unlocked = earned.includes(achievement.id);
          return (
            <motion.div
              key={achievement.id}
              className={`card text-center ${unlocked ? 'border-yellow-400/50' : 'opacity-40 grayscale'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: unlocked ? 1 : 0.4, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <h4 className="font-bold">{achievement.name}</h4>
              <p className="text-sm text-white/60 mt-1">{achievement.description}</p>
              {unlocked && (
                <motion.div
                  className="mt-2 text-xs text-yellow-400 font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✅ 已解鎖
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
