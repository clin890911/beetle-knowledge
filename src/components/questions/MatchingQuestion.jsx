import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PAIR_COLORS = [
  { bg: 'bg-blue-500/20', border: 'border-blue-400' },
  { bg: 'bg-purple-500/20', border: 'border-purple-400' },
  { bg: 'bg-amber-500/20', border: 'border-amber-400' },
  { bg: 'bg-pink-500/20', border: 'border-pink-400' },
  { bg: 'bg-cyan-500/20', border: 'border-cyan-400' },
];

export default function MatchingQuestion({ question, onAnswer, showResult, isCorrect }) {
  const [pairs, setPairs] = useState({}); // { leftIndex: rightIndex }
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [shuffledRight, setShuffledRight] = useState([]);

  useEffect(() => {
    // Shuffle right side using Fisher-Yates
    const indices = question.pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledRight(indices);
    setPairs({});
    setSelectedLeft(null);
  }, [question]);

  const handleLeftClick = (index) => {
    if (showResult) return;
    setSelectedLeft(selectedLeft === index ? null : index);
  };

  const handleRightClick = (shuffledIndex) => {
    if (showResult || selectedLeft === null) return;
    const actualRightIndex = shuffledRight[shuffledIndex];

    // If already paired with something, unpair first
    if (pairs[selectedLeft] === actualRightIndex) {
      const newPairs = { ...pairs };
      delete newPairs[selectedLeft];
      setPairs(newPairs);
      setSelectedLeft(null);
      return;
    }

    // Remove any existing pair for this left or right
    const newPairs = { ...pairs };
    Object.keys(newPairs).forEach(key => {
      if (newPairs[key] === actualRightIndex) delete newPairs[key];
    });
    newPairs[selectedLeft] = actualRightIndex;
    setPairs(newPairs);
    setSelectedLeft(null);
  };

  const handleSubmit = () => {
    if (Object.keys(pairs).length !== question.pairs.length) return;
    // Convert to answer format: for each left index, what right index was it paired with
    const answer = question.pairs.map((_, i) => pairs[i] !== undefined ? pairs[i] : -1);
    onAnswer(answer);
  };

  const getPairColor = (leftIndex) => {
    const pairKeys = Object.keys(pairs).sort((a, b) => parseInt(a) - parseInt(b));
    const idx = pairKeys.indexOf(String(leftIndex));
    return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null;
  };

  const getRightPairColor = (actualRightIndex) => {
    const entry = Object.entries(pairs).find(([, v]) => v === actualRightIndex);
    if (!entry) return null;
    const pairKeys = Object.keys(pairs).sort((a, b) => parseInt(a) - parseInt(b));
    const idx = pairKeys.indexOf(entry[0]);
    return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null;
  };

  const isCorrectPair = (leftIndex) => {
    return showResult && pairs[leftIndex] === leftIndex;
  };

  const isWrongPair = (leftIndex) => {
    return showResult && pairs[leftIndex] !== undefined && pairs[leftIndex] !== leftIndex;
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">{question.question}</h3>
      <p className="text-sm text-white/60 mb-8">點擊左邊項目，再點擊右邊配對</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">項目</div>
          {question.pairs.map((pair, index) => {
            const colorClass = getPairColor(index);
            const isSelected = selectedLeft === index;
            const isPaired = pairs[index] !== undefined;

            return (
              <motion.button
                key={index}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                  showResult
                    ? isCorrectPair(index)
                      ? 'border-green-400 bg-green-500/20'
                      : isWrongPair(index)
                        ? 'border-red-400 bg-red-500/20'
                        : 'border-white/20 bg-white/5 opacity-40'
                    : isSelected
                      ? 'border-beetle-400 bg-beetle-500/30 ring-2 ring-beetle-400/50'
                      : isPaired
                        ? `${colorClass.bg} border-2 ${colorClass.border}`
                        : 'border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer'
                }`}
                onClick={() => handleLeftClick(index)}
                whileHover={!showResult && !isPaired ? { scale: 1.02 } : {}}
                whileTap={!showResult ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <span>{pair.left}</span>
                  {isPaired && (
                    <motion.span
                      className="text-sm text-white/60 ml-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      ↓
                    </motion.span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="space-y-3">
          <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">配對</div>
          {shuffledRight.map((actualIndex, displayIndex) => {
            const colorClass = getRightPairColor(actualIndex);
            const isPaired = Object.values(pairs).includes(actualIndex);

            return (
              <motion.button
                key={displayIndex}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                  isPaired
                    ? `${colorClass.bg} border-2 ${colorClass.border}`
                    : selectedLeft !== null
                      ? 'border-white/40 bg-white/5 cursor-pointer hover:bg-white/10 ring-2 ring-beetle-400/30'
                      : 'border-white/20 bg-white/5'
                }`}
                onClick={() => handleRightClick(displayIndex)}
                whileHover={!showResult && selectedLeft !== null ? { scale: 1.02 } : {}}
                whileTap={!showResult && selectedLeft !== null ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: displayIndex * 0.05 }}
              >
                {question.pairs[actualIndex].right}
              </motion.button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {!showResult && (
          <motion.button
            className="w-full mt-8 py-3 px-4 rounded-xl bg-gradient-to-r from-beetle-500 to-beetle-600 text-white font-bold text-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={Object.keys(pairs).length !== question.pairs.length}
            whileHover={Object.keys(pairs).length === question.pairs.length ? { scale: 1.02 } : {}}
            whileTap={Object.keys(pairs).length === question.pairs.length ? { scale: 0.98 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {Object.keys(pairs).length === question.pairs.length ? '確認配對' : `已配對 ${Object.keys(pairs).length}/${question.pairs.length}`}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
