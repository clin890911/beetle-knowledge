import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getLeaderboard } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { LEVEL_TITLES } from '../contexts/GameContext';

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard(20);
        setLeaders(data);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      }
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  const rankEmojis = ['🥇', '🥈', '🥉'];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-6xl animate-bounce">🏆</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">🏆 排行榜</h2>
      <div className="space-y-3">
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.id}
            className={`card flex items-center gap-4 ${leader.id === user?.uid ? 'border-beetle-400 bg-beetle-500/10' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="text-2xl w-10 text-center font-bold">
              {i < 3 ? rankEmojis[i] : <span className="text-white/40">{i + 1}</span>}
            </div>
            <img
              src={leader.photoURL || `https://ui-avatars.com/api/?name=${leader.displayName}&background=22c55e&color=fff`}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-bold">{leader.displayName}</div>
              <div className="text-sm text-white/60">
                Lv.{leader.level || 1} {LEVEL_TITLES[leader.level || 1]}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-beetle-400">{leader.xp || 0} XP</div>
              <div className="text-sm text-orange-400">🔥 {leader.streak || 0}</div>
            </div>
          </motion.div>
        ))}
        {leaders.length === 0 && (
          <div className="text-center text-white/60 py-10">
            <div className="text-4xl mb-3">🦗</div>
            <p>還沒有人上榜，快來成為第一名！</p>
          </div>
        )}
      </div>
    </div>
  );
}
