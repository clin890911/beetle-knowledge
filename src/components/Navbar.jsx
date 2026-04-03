import { useAuth } from '../contexts/AuthContext';
import { useGame, XP_PER_LEVEL, LEVEL_TITLES } from '../contexts/GameContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { user, userData, signInWithGoogle, logOut } = useAuth();

  const level = userData?.level || 1;
  const xp = userData?.xp || 0;
  const nextLevelXP = XP_PER_LEVEL[Math.min(level + 1, XP_PER_LEVEL.length - 1)];
  const currentLevelXP = XP_PER_LEVEL[level] || 0;
  const progress = nextLevelXP > currentLevelXP ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;

  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition">
          <span className="text-3xl">🪲</span>
          <span className="hidden sm:inline">甲蟲知識王</span>
        </Link>

        {user && userData ? (
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1 text-orange-400">
              <span className="text-xl">🔥</span>
              <span className="font-bold">{userData.streak || 0}</span>
            </div>

            {/* XP & Level */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="text-sm">
                <div className="font-bold text-beetle-400">Lv.{level}</div>
                <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-beetle-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <span className="text-sm text-white/60">{xp} XP</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              <Link to="/quiz" className="text-sm hover:text-beetle-400 transition px-2 py-1">測驗</Link>
              <Link to="/leaderboard" className="text-sm hover:text-beetle-400 transition px-2 py-1">排行榜</Link>
              <Link to="/achievements" className="text-sm hover:text-beetle-400 transition px-2 py-1">成就</Link>
              <Link to="/profile" className="text-sm hover:text-beetle-400 transition px-2 py-1">個人</Link>
            </div>

            {/* User avatar */}
            <button onClick={logOut} className="flex items-center gap-2 hover:opacity-80 transition">
              <img
                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=22c55e&color=fff`}
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-beetle-400"
              />
            </button>
          </div>
        ) : (
          <button onClick={signInWithGoogle} className="btn-primary text-sm py-2 px-4">
            Google 登入
          </button>
        )}
      </div>
    </nav>
  );
}
