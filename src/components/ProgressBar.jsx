import { motion } from 'framer-motion';

export default function ProgressBar({ current, total, correctCount, wrongCount }) {
  const progress = total > 0 ? ((current) / total) * 100 : 0;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/60">第 {current + 1} / {total} 題</span>
        <div className="flex gap-3 text-sm">
          <span className="text-green-400">✓ {correctCount}</span>
          <span className="text-red-400">✗ {wrongCount}</span>
        </div>
      </div>
      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-beetle-500 to-beetle-400 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
