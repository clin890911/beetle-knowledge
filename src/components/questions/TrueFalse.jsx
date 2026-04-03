import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TrueFalse({ question, onAnswer, showResult, isCorrect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    if (showResult) return;
    setSelected(value);
    onAnswer(value);
  };

  const getButtonClass = (value) => {
    let base = 'flex-1 p-8 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer ';
    if (!showResult) {
      if (selected === value) {
        base += value ? 'border-green-400 bg-green-500/20' : 'border-red-400 bg-red-500/20';
      } else {
        base += 'border-white/20 bg-white/5 hover:bg-white/10';
      }
      return base;
    }
    // Show result state
    if (value === question.answer) return base + 'border-green-400 bg-green-500/20';
    if (selected === value && value !== question.answer) return base + 'border-red-400 bg-red-500/20 animate-shake';
    return base + 'border-white/20 bg-white/5 opacity-40';
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-10">{question.question}</h3>
      <div className="flex gap-4">
        <motion.button
          className={getButtonClass(true)}
          onClick={() => handleSelect(true)}
          whileHover={!showResult ? { scale: 1.05 } : {}}
          whileTap={!showResult ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, x: -30, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className="text-6xl mb-3"
            animate={selected === true ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6 }}
          >
            ⭕
          </motion.div>
          <div className="text-2xl font-bold">正確</div>
          {showResult && selected === true && question.answer === true && (
            <motion.div
              className="mt-2 text-green-400 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ✓
            </motion.div>
          )}
          {showResult && selected === true && question.answer !== true && (
            <motion.div
              className="mt-2 text-red-400 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ✗
            </motion.div>
          )}
        </motion.button>
        <motion.button
          className={getButtonClass(false)}
          onClick={() => handleSelect(false)}
          whileHover={!showResult ? { scale: 1.05 } : {}}
          whileTap={!showResult ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, x: 30, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className="text-6xl mb-3"
            animate={selected === false ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6 }}
          >
            ❌
          </motion.div>
          <div className="text-2xl font-bold">錯誤</div>
          {showResult && selected === false && question.answer === false && (
            <motion.div
              className="mt-2 text-green-400 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ✓
            </motion.div>
          )}
          {showResult && selected === false && question.answer !== false && (
            <motion.div
              className="mt-2 text-red-400 font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ✗
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
