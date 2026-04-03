import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { LEVEL_TITLES, XP_PER_LEVEL, ACHIEVEMENTS } from '../contexts/GameContext';

export default function ProfilePage() {
  const { user, userData, logOut } = useAuth();

  if (!userData) return null;

  const level = userData.level || 1;
  const xp = userData.xp || 0;
  const nextLevelXP = XP_PER_LEVEL[Math.min(level + 1, XP_PER_LEVEL.length - 1)];
  const currentLevelXP = XP_PER_LEVEL[level] || 0;
  const xpProgress = nextLevelXP > currentLevelXP ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;

  const categories = ['獨角仙', '鍬形蟲', '金龜子'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div className="card text-center mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <img
          src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=22c55e&color=fff`}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-beetle-400"
        />
        <h2 className="text-2xl font-bold">{userData.displayName}</h2>
        <p className="text-beetle-400 font-bold">Lv.{level} {LEVEL_TITLES[level]}</p>
        <p className="text-white/60 text-sm">{user.email}</p>

        <div className="mt-4 mb-2 flex justify-between text-sm px-4">
          <span>等級進度</span>
          <span>{xp - currentLevelXP} / {nextLevelXP - currentLevelXP} XP</span>
        </div>
        <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden mx-4" style={{ width: 'calc(100% - 2rem)', margin: '0 auto' }}>
          <motion.div
            className="h-full bg-gradient-to-r from-beetle-500 to-beetle-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-beetle-400">{userData.totalAnswered || 0}</div>
          <div className="text-sm text-white/60">總答題數</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-400">
            {userData.totalAnswered ? Math.round(((userData.totalCorrect || 0) / userData.totalAnswered) * 100) : 0}%
          </div>
          <div className="text-sm text-white/60">正確率</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-400">{userData.streak || 0}🔥</div>
          <div className="text-sm text-white/60">連續天數</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-yellow-400">{userData.xp || 0}</div>
          <div className="text-sm text-white/60">總 XP</div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">📊 各類別進度</h3>
      <div className="space-y-4 mb-6">
        {categories.map(cat => (
          <div key={cat} className="card">
            <div className="flex justify-between mb-2">
              <span className="font-bold">{cat}</span>
              <span className="text-sm text-white/60">{userData.categoryCorrect?.[cat] || 0} 題答對</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-beetle-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(((userData.categoryCorrect?.[cat] || 0) / 30) * 100, 100)}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      <button onClick={logOut} className="btn-secondary w-full">登出</button>
    </div>
  );
}
