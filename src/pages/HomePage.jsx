import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { LEVEL_TITLES, XP_PER_LEVEL } from '../contexts/GameContext';

const categories = [
  { id: '獨角仙', name: '獨角仙', emoji: '🦏', description: '兜蟲亞科的王者', color: 'from-amber-600 to-amber-800' },
  { id: '鍬形蟲', name: '鍬形蟲', emoji: '🦌', description: '大顎如鹿角般威武', color: 'from-emerald-600 to-emerald-800' },
  { id: '金龜子', name: '金龜子', emoji: '✨', description: '多彩的鞘翅目家族', color: 'from-purple-600 to-purple-800' },
];

export default function HomePage() {
  const { user, userData, signInWithGoogle } = useAuth();

  if (!user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="text-9xl mb-6"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🪲
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">甲蟲知識王</h1>
          <p className="text-white/60 mb-8 text-lg">
            透過互動測驗，成為甲蟲專家！<br />
            涵蓋獨角仙、鍬形蟲、金龜子三大類
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            onClick={signInWithGoogle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Google 登入開始學習
          </motion.button>
          <Link to="/encyclopedia">
            <motion.button
              className="btn-secondary text-lg px-8 py-4 mt-4 block w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 甲蟲小百科
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const level = userData?.level || 1;
  const xp = userData?.xp || 0;
  const nextLevelXP = XP_PER_LEVEL[Math.min(level + 1, XP_PER_LEVEL.length - 1)];
  const currentLevelXP = XP_PER_LEVEL[level] || 0;
  const xpProgress = nextLevelXP > currentLevelXP ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome & Stats */}
      <motion.div
        className="card mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=22c55e&color=fff`}
            alt="avatar"
            className="w-16 h-16 rounded-full border-3 border-beetle-400"
          />
          <div>
            <h2 className="text-2xl font-bold">你好，{userData?.displayName || user.displayName}！</h2>
            <p className="text-white/60">
              Lv.{level} {LEVEL_TITLES[level]} · {userData?.streak || 0}🔥 連續天數
            </p>
          </div>
        </div>
        <div className="mb-2 flex justify-between text-sm">
          <span>等級 {level} → {level + 1}</span>
          <span>{xp - currentLevelXP} / {nextLevelXP - currentLevelXP} XP</span>
        </div>
        <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-beetle-500 to-beetle-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* Quick Play */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link to="/quiz">
          <motion.div
            className="card mb-8 bg-gradient-to-r from-beetle-600 to-beetle-800 border-beetle-400 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">🎮 開始測驗</h3>
                <p className="text-white/70">隨機出題，挑戰你的甲蟲知識！</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Encyclopedia */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link to="/encyclopedia">
          <motion.div
            className="card mb-8 bg-gradient-to-r from-blue-600 to-purple-800 border-blue-400 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">📚 甲蟲小百科</h3>
                <p className="text-white/70">系統性認識獨角仙、鍬形蟲、金龜子的完整知識</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Category Cards */}
      <h3 className="text-xl font-bold mb-4">📚 分類學習</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Link to={`/quiz?category=${cat.id}`}>
              <motion.div
                className={`card bg-gradient-to-br ${cat.color} cursor-pointer h-full`}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-5xl mb-3">{cat.emoji}</div>
                <h4 className="text-xl font-bold">{cat.name}</h4>
                <p className="text-sm text-white/70 mt-1">{cat.description}</p>
                <div className="mt-3 text-sm text-white/50">
                  答對: {userData?.categoryCorrect?.[cat.id] || 0} 題
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: '總答題', value: userData?.totalAnswered || 0, icon: '📝' },
          { label: '總答對', value: userData?.totalCorrect || 0, icon: '✅' },
          { label: '成就數', value: userData?.achievements?.length || 0, icon: '🏅' },
          { label: '正確率', value: userData?.totalAnswered ? Math.round(((userData?.totalCorrect || 0) / userData.totalAnswered) * 100) + '%' : '0%', icon: '📊' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="card text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
