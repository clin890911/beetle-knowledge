import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MultipleChoice({ question, onAnswer, showResult, isCorrect }) {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleOption = (index) => {
    if (showResult) return;
    setSelected(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSubmit = () => {
    if (selected.length === 0 || showResult) return;
    setSubmitted(true);
    onAnswer(selected);
  };

  const getOptionClass = (index) => {
    let base = 'w-full p-4 rounded-xl border-2 flex items-center gap-3 text-lg font-medium transition-all duration-200 cursor-pointer ';
    if (!showResult) {
      if (selected.includes(index)) {
        base += 'border-beetle-400 bg-beetle-500/20';
      } else {
        base += 'border-white/20 bg-white/5 hover:bg-white/10';
      }
      return base;
    }
    // Show result state
    if (question.answer.includes(index)) return base + 'border-green-400 bg-green-500/20';
    if (selected.includes(index) && !question.answer.includes(index)) return base + 'border-red-400 bg-red-500/20 animate-shake';
    return base + 'border-white/20 bg-white/5 opacity-40';
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-2">{question.question}</h3>
      <p className="text-sm text-white/60 mb-6">（可複選，選完後點擊確認）</p>
      {question.options.map((option, index) => (
        <motion.button
          key={index}
          className={getOptionClass(index)}
          onClick={() => toggleOption(index)}
          whileHover={!showResult ? { scale: 1.02 } : {}}
          whileTap={!showResult ? { scale: 0.98 } : {}}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08, duration: 0.3 }}
        >
          <motion.span
            className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 font-bold transition-all duration-200 ${
              selected.includes(index) ? 'bg-beetle-500 border-beetle-400' : 'border-white/40'
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {selected.includes(index) && <span className="text-white text-sm">✓</span>}
          </motion.span>
          <span>{option}</span>
          {showResult && question.answer.includes(index) && (
            <motion.span
              className="ml-auto text-green-400 text-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ✓
            </motion.span>
          )}
          {showResult && selected.includes(index) && !question.answer.includes(index) && (
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
      {!showResult && (
        <motion.button
          className="w-full mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-beetle-500 to-beetle-600 text-white font-bold text-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          whileHover={selected.length > 0 ? { scale: 1.02 } : {}}
          whileTap={selected.length > 0 ? { scale: 0.98 } : {}}
          disabled={selected.length === 0}
        >
          確認答案
        </motion.button>
      )}
    </div>
  );
}
