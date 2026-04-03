import { createContext, useContext, useReducer, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { updateUserData } from '../firebase';

const GameContext = createContext();

// XP needed for each level (exponential curve)
export const XP_PER_LEVEL = [0, 0, 100, 250, 500, 800, 1200, 1700, 2300, 3000, 4000, 5200, 6600, 8200, 10000, 12000, 14500, 17500, 21000, 25000, 30000];

export const LEVEL_TITLES = [
  '', '甲蟲新手', '幼蟲觀察員', '蛹期研究員', '羽化見習生', '甲蟲飼育員',
  '標本收藏家', '野外調查員', '甲蟲分類師', '生態觀察家', '甲蟲博士',
  '鍬形蟲專家', '兜蟲研究員', '金龜子大師', '甲蟲學者', '昆蟲學教授',
  '甲蟲王者', '傳說級蟲師', '自然守護者', '甲蟲之神', '究極蟲王'
];

export const ACHIEVEMENTS = [
  { id: 'first_quiz', name: '初試啼聲', description: '完成第一次測驗', icon: '🎯', condition: (stats) => stats.totalAnswered >= 1 },
  { id: 'perfect_10', name: '十全十美', description: '連續答對10題', icon: '💯', condition: (stats) => stats.currentStreak >= 10 },
  { id: 'beetle_fan', name: '甲蟲迷', description: '累計答對50題', icon: '🪲', condition: (stats) => stats.totalCorrect >= 50 },
  { id: 'beetle_master', name: '甲蟲大師', description: '累計答對200題', icon: '👑', condition: (stats) => stats.totalCorrect >= 200 },
  { id: 'streak_3', name: '三日不懈', description: '連續登入3天', icon: '🔥', condition: (stats) => stats.streak >= 3 },
  { id: 'streak_7', name: '一週達人', description: '連續登入7天', icon: '⚡', condition: (stats) => stats.streak >= 7 },
  { id: 'streak_30', name: '月之蟲師', description: '連續登入30天', icon: '🌙', condition: (stats) => stats.streak >= 30 },
  { id: 'stag_expert', name: '鍬形蟲專家', description: '鍬形蟲類答對30題', icon: '🦌', condition: (stats) => (stats.categoryCorrect?.['鍬形蟲'] || 0) >= 30 },
  { id: 'rhino_expert', name: '獨角仙專家', description: '獨角仙類答對30題', icon: '🦏', condition: (stats) => (stats.categoryCorrect?.['獨角仙'] || 0) >= 30 },
  { id: 'scarab_expert', name: '金龜子專家', description: '金龜子類答對20題', icon: '✨', condition: (stats) => (stats.categoryCorrect?.['金龜子'] || 0) >= 20 },
  { id: 'level_5', name: '甲蟲飼育員', description: '達到等級5', icon: '🎖️', condition: (stats) => stats.level >= 5 },
  { id: 'level_10', name: '甲蟲博士', description: '達到等級10', icon: '🏆', condition: (stats) => stats.level >= 10 },
  { id: 'hard_master', name: '挑戰極限', description: '答對20題困難題', icon: '💎', condition: (stats) => (stats.hardCorrect || 0) >= 20 },
  { id: 'speed_demon', name: '閃電快手', description: '在5秒內答對一題', icon: '⚡', condition: (stats) => stats.fastAnswer },
  { id: 'all_categories', name: '全方位蟲師', description: '三大類各答對至少10題', icon: '🌟', condition: (stats) => (stats.categoryCorrect?.['獨角仙'] || 0) >= 10 && (stats.categoryCorrect?.['鍬形蟲'] || 0) >= 10 && (stats.categoryCorrect?.['金龜子'] || 0) >= 10 },
];

const initialState = {
  currentQuiz: null,
  currentQuestionIndex: 0,
  score: 0,
  xpEarned: 0,
  correctCount: 0,
  wrongCount: 0,
  answers: [],
  quizComplete: false,
  comboCount: 0,
  maxCombo: 0,
  newAchievements: [],
  questionStartTime: null,
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...initialState,
        currentQuiz: action.payload,
        questionStartTime: Date.now(),
      };
    case 'ANSWER_QUESTION': {
      const { isCorrect, questionId } = action.payload;
      const newCombo = isCorrect ? state.comboCount + 1 : 0;
      const baseXP = isCorrect ? 10 : 0;
      const comboBonus = isCorrect ? Math.min(newCombo - 1, 5) * 2 : 0;
      const difficultyBonus = isCorrect ? (action.payload.difficulty - 1) * 5 : 0;
      const xpGained = baseXP + comboBonus + difficultyBonus;

      return {
        ...state,
        correctCount: state.correctCount + (isCorrect ? 1 : 0),
        wrongCount: state.wrongCount + (isCorrect ? 0 : 1),
        xpEarned: state.xpEarned + xpGained,
        comboCount: newCombo,
        maxCombo: Math.max(state.maxCombo, newCombo),
        answers: [...state.answers, { questionId, isCorrect, xpGained }],
        questionStartTime: Date.now(),
      };
    }
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        questionStartTime: Date.now(),
      };
    case 'COMPLETE_QUIZ':
      return { ...state, quizComplete: true };
    case 'ADD_ACHIEVEMENT':
      return { ...state, newAchievements: [...state.newAchievements, action.payload] };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { user, userData, refreshUserData } = useAuth();

  const getLevelFromXP = useCallback((xp) => {
    for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
      if (xp >= XP_PER_LEVEL[i]) return i;
    }
    return 1;
  }, []);

  const calculateStreak = useCallback((lastActiveDate, currentStreak) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastActiveDate === today) return currentStreak;
    if (lastActiveDate === yesterday) return currentStreak + 1;
    return 1;
  }, []);

  const submitQuizResults = useCallback(async () => {
    if (!user || !userData) return;

    const newXP = (userData.xp || 0) + state.xpEarned;
    const newLevel = getLevelFromXP(newXP);
    const newStreak = calculateStreak(userData.lastActiveDate, userData.streak || 0);
    const today = new Date().toISOString().split('T')[0];

    const categoryCorrect = { ...(userData.categoryCorrect || {}) };
    state.answers.forEach((ans) => {
      if (ans.isCorrect && state.currentQuiz) {
        const q = state.currentQuiz.find(qq => qq.id === ans.questionId);
        if (q) {
          categoryCorrect[q.category] = (categoryCorrect[q.category] || 0) + 1;
        }
      }
    });

    const hardCorrect = (userData.hardCorrect || 0) + state.answers.filter((a, i) => a.isCorrect && state.currentQuiz[i]?.difficulty === 3).length;

    const updateData = {
      xp: newXP,
      level: newLevel,
      streak: newStreak,
      lastActiveDate: today,
      totalCorrect: (userData.totalCorrect || 0) + state.correctCount,
      totalAnswered: (userData.totalAnswered || 0) + state.correctCount + state.wrongCount,
      categoryCorrect,
      hardCorrect,
    };

    // Check achievements
    const stats = {
      ...updateData,
      currentStreak: state.maxCombo,
      fastAnswer: state.answers.some((_, i) => {
        const elapsed = 5000; // simplified
        return elapsed <= 5000 && state.answers[i]?.isCorrect;
      }),
    };

    const existingAchievements = userData.achievements || [];
    const newAchievements = [];
    ACHIEVEMENTS.forEach((achievement) => {
      if (!existingAchievements.includes(achievement.id) && achievement.condition(stats)) {
        newAchievements.push(achievement);
        dispatch({ type: 'ADD_ACHIEVEMENT', payload: achievement });
      }
    });

    if (newAchievements.length > 0) {
      updateData.achievements = [...existingAchievements, ...newAchievements.map(a => a.id)];
    }

    await updateUserData(user.uid, updateData);
    await refreshUserData();
  }, [user, userData, state, getLevelFromXP, calculateStreak, refreshUserData]);

  return (
    <GameContext.Provider value={{ ...state, dispatch, submitQuizResults, getLevelFromXP, ACHIEVEMENTS }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
