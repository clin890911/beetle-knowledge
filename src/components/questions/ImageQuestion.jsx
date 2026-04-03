import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImageQuestion({ question, onAnswer, showResult, isCorrect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    if (showResult) return;
    setSelected(index);
    onAnswer(index);
  };

  const getOptionClass = (index) => {
    let base = 'w-full p-4 rounded-xl border-2 flex items-center gap-3 text-lg font-medium transition-all duration-200 cursor-pointer ';
    if (!showResult) {
      if (selected === index) {
        base += 'border-beetle-400 bg-beetle-500/20';
      } else {
        base += 'border-white/20 bg-white/5 hover:bg-white/10';
      }
      return base;
    }
    // Show result state
    if (index === question.answer) return base + 'border-green-400 bg-green-500/20';
    if (selected === index && index !== question.answer) return base + 'border-red-400 bg-red-500/20 animate-shake';
    return base + 'border-white/20 bg-white/5 opacity-40';
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">{question.question}</h3>
      <motion.div
        className="bg-gradient-to-br from-beetle-500/20 to-beetle-600/20 rounded-2xl p-12 flex items-center justify-center border-2 border-beetle-400/30"
        initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <motion.span
          className="text-9xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {question.image || '🪲'}
        </motion.span>
      </motion.div>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleSelect(index)}
            whileHover={!showResult ? { scale: 1.02 } : {}}
            whileTap={!showResult ? { scale: 0.98 } : {}}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
          >
            <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
              {letters[index]}
            </span>
            <span>{option}</span>
            {showResult && index === question.answer && (
              <motion.span
                className="ml-auto text-green-400 text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                ✓
              </motion.span>
            )}
            {showResult && selected === index && index !== question.answer && (
              <motion.span
                className="ml-auto text-red-400 text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                ✗
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
