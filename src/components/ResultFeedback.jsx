import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../contexts/GameContext';

export default function ResultFeedback({ isCorrect, explanation, onNext, isLast }) {
  const { comboCount, xpEarned } = useGame();

  return (
    <AnimatePresence>
      <motion.div
        className={`mt-6 p-6 rounded-2xl border-2 ${
          isCorrect
            ? 'bg-green-500/10 border-green-400/50'
            : 'bg-red-500/10 border-red-400/50'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-3">
          {isCorrect ? (
            <>
              <motion.span
                className="text-4xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                🎉
              </motion.span>
              <div>
                <h4 className="text-xl font-bold text-green-400">答對了！</h4>
                {comboCount > 1 && (
                  <motion.span
                    className="text-sm text-yellow-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    🔥 連續答對 {comboCount} 題！
                  </motion.span>
                )}
              </div>
            </>
          ) : (
            <>
              <motion.span
                className="text-4xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                😢
              </motion.span>
              <h4 className="text-xl font-bold text-red-400">答錯了</h4>
            </>
          )}
        </div>

        {explanation && (
          <p className="text-white/80 mb-4 leading-relaxed bg-white/5 rounded-xl p-4">
            💡 {explanation}
          </p>
        )}

        <motion.button
          className="btn-primary w-full"
          onClick={onNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLast ? '查看結果 →' : '下一題 →'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
