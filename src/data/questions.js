export default [
  // ===== 獨角仙 (Rhinoceros Beetles) - 30 questions =====

  // Single choice questions
  {
    id: "q001",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的學名是什麼？",
    options: [
      "Trypoxylus dichotomus tsunobosonis",
      "Lucanus taiwanus formosanus",
      "Odontolabis hosei",
      "Scarabaeus sacer"
    ],
    answer: 0,
    explanation: "獨角仙的學名為 Trypoxylus dichotomus tsunobosonis，屬於金龜子科兜蟲亞科。"
  },

  {
    id: "q002",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的雄蟲和雌蟲最明顯的外觀差異是什麼？",
    options: [
      "雄蟲有分叉犄角，雌蟲無角",
      "雄蟲體色較淡，雌蟲體色較深",
      "雄蟲體型較小，雌蟲體型較大",
      "雄蟲有光澤，雌蟲無光澤"
    ],
    answer: 0,
    explanation: "獨角仙的雄蟲頭部有分叉的犄角，而雌蟲則完全沒有角，這是區別雌雄最明顯的特徵。"
  },

  {
    id: "q003",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的體長範圍是多少？",
    options: [
      "2-3 cm",
      "4-7 cm",
      "8-10 cm",
      "10-15 cm"
    ],
    answer: 1,
    explanation: "獨角仙的體長為 4-7 公分，是中等大小的甲蟲。"
  },

  {
    id: "q004",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙主要在台灣的哪些月份活動？",
    options: [
      "3-5月",
      "6-8月",
      "9-11月",
      "12-2月"
    ],
    answer: 1,
    explanation: "獨角仙在台灣的活動季節為6-8月，是夏季的代表性昆蟲。"
  },

  {
    id: "q005",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的幼蟲稱為什麼？",
    options: [
      "蛴螬",
      "雞母蟲",
      "蛹",
      "幼體"
    ],
    answer: 1,
    explanation: "獨角仙的幼蟲俗稱為『雞母蟲』，是常見的叫法。蛴螬是金龜子幼蟲的通稱。"
  },

  {
    id: "q006",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的幼蟲生活史中需要經過幾個齡期才能變成成蟲？",
    options: [
      "1個齡期",
      "2個齡期",
      "3個齡期",
      "4個齡期"
    ],
    answer: 2,
    explanation: "獨角仙的完整生活史為：卵→L1→L2→L3→蛹→成蟲，需要經過3個幼蟲齡期。"
  },

  {
    id: "q007",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙幼蟲吃什麼食物？",
    options: [
      "朽木和木屑",
      "新鮮樹葉",
      "腐植土和落葉腐爛物",
      "昆蟲果凍"
    ],
    answer: 2,
    explanation: "獨角仙幼蟲（雞母蟲）吃腐植土，這是它們在土壤中生長的主要食物來源。"
  },

  {
    id: "q008",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙成蟲主要進食的食物是什麼？",
    options: [
      "新鮮樹葉",
      "光臘樹樹液、成熟水果汁液",
      "草食植物",
      "其他昆蟲"
    ],
    answer: 1,
    explanation: "獨角仙成蟲以光臘樹（白雞油）的樹液和成熟水果的汁液為主食。"
  },

  {
    id: "q009",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的成蟲在野外的壽命大約是多久？",
    options: [
      "約1周",
      "約1個月",
      "約3個月",
      "約6個月"
    ],
    answer: 1,
    explanation: "獨角仙成蟲在野外的壽命約為1個月，在人工飼養條件下可存活2-3個月。"
  },

  {
    id: "q010",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙是夜行性昆蟲嗎？",
    options: [
      "是，完全是夜行性",
      "是，有趨光性",
      "否，只在白天活動",
      "否，無明顯日夜習性"
    ],
    answer: 1,
    explanation: "獨角仙是夜行性昆蟲，並且具有趨光性，容易被光吸引。"
  },

  // Multiple choice questions
  {
    id: "q011",
    type: "multiple",
    category: "獨角仙",
    difficulty: 2,
    question: "下列哪些敘述是正確的？(複選)",
    options: [
      "獨角仙屬於金龜子科",
      "獨角仙的肛門開口是橫向的",
      "獨角仙完全沒有進食行為",
      "獨角仙的生活史約為一年"
    ],
    answer: [0, 1, 3],
    explanation: "獨角仙確實屬於金龜子科兜蟲亞科，幼蟲肛門開口橫向是重要的區別特徵，生活史約為一年。獨角仙成蟲有進食行為。"
  },

  {
    id: "q012",
    type: "multiple",
    category: "獨角仙",
    difficulty: 2,
    question: "飼養獨角仙時，以下哪些條件是重要的？(複選)",
    options: [
      "提供深度3-5cm的腐植土",
      "提供昆蟲果凍",
      "維持25-28度的溫度",
      "保持完全黑暗的環境"
    ],
    answer: [0, 1, 2],
    explanation: "獨角仙飼養的關鍵要素包括腐植土、昆蟲果凍和適宜的溫度（25-28度）。昆蟲雖然是夜行性，但並不需要完全黑暗。"
  },

  {
    id: "q013",
    type: "multiple",
    category: "獨角仙",
    difficulty: 3,
    question: "以下哪些是獨角仙的分類特徵？(複選)",
    options: [
      "金龜子科",
      "兜蟲亞科",
      "幼蟲肛門開口橫向",
      "成蟲體色呈現金屬綠色"
    ],
    answer: [0, 1, 2],
    explanation: "獨角仙屬於金龜子科兜蟲亞科，幼蟲肛門開口橫向是重要的分類和區別特徵。獨角仙的體色是深褐至紅褐色，不是金屬綠色。"
  },

  // True/False questions
  {
    id: "q014",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的雌蟲頭部也有犄角。",
    answer: false,
    explanation: "這是錯誤的。獨角仙的雌蟲完全沒有角，只有雄蟲的頭部有分叉的犄角。"
  },

  {
    id: "q015",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙在台灣有兩種。",
    answer: true,
    explanation: "正確。台灣有兩種獨角仙：獨角仙和姬獨角仙。"
  },

  {
    id: "q016",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的幼蟲和成蟲都以腐植土為主食。",
    answer: false,
    explanation: "這是錯誤的。獨角仙的幼蟲以腐植土為食，但成蟲以光臘樹樹液和水果汁液為食。"
  },

  {
    id: "q017",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的成蟲在人工飼養下的壽命會比野外更長。",
    answer: true,
    explanation: "正確。野外成蟲壽命約1個月，但人工飼養條件下可存活2-3個月。"
  },

  {
    id: "q018",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙是白天活動的昆蟲。",
    answer: false,
    explanation: "這是錯誤的。獨角仙是夜行性昆蟲，在夜間活動，並具有趨光性。"
  },

  // Image identification questions
  {
    id: "q019",
    type: "image",
    category: "獨角仙",
    difficulty: 2,
    question: "🪲 這個圖片顯示的甲蟲的特點是什麼？",
    options: [
      "有大顎，像鹿角",
      "頭部有分叉犄角",
      "全身金屬綠色",
      "體型極為巨大"
    ],
    answer: 1,
    explanation: "獨角仙最顯著的特徵是雄蟲頭部的分叉犄角，這使其與其他甲蟲容易區別。"
  },

  {
    id: "q020",
    type: "image",
    category: "獨角仙",
    difficulty: 3,
    question: "🪲 如何從幼蟲時期區別獨角仙和其他金龜子的幼蟲？",
    options: [
      "觀察頭部形狀",
      "觀察肛門開口方向（獨角仙為橫向）",
      "觀察體色深淺",
      "觀察腳的數量"
    ],
    answer: 1,
    explanation: "獨角仙幼蟲的肛門開口是橫向的，這是區別它與其他金龜子幼蟲的重要特徵。"
  },

  // Matching questions
  {
    id: "q021",
    type: "matching",
    category: "獨角仙",
    difficulty: 2,
    question: "將獨角仙的生活史階段與描述配對：",
    pairs: [
      { left: "卵", right: "最初的發育階段" },
      { left: "幼蟲（L1-L3）", right: "吃腐植土，經過3個齡期" },
      { left: "蛹", right: "變態的最後階段" },
      { left: "成蟲", right: "有犄角，進食樹液和果汁" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這是獨角仙完整的生活史順序，從卵開始，經過3個幼蟲齡期、蛹期，最後羽化為成蟲。"
  },

  {
    id: "q022",
    type: "matching",
    category: "獨角仙",
    difficulty: 3,
    question: "將獨角仙的飼養要素與其作用配對：",
    pairs: [
      { left: "腐植土", right: "提供幼蟲食物來源和生活空間" },
      { left: "昆蟲果凍", right: "供成蟲進食使用" },
      { left: "25-28度溫度", right: "促進正常發育和活動" },
      { left: "遮陰環境", right: "模擬自然的夜行性棲息環境" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些要素都是獨角仙飼養的重要條件，共同創造了適合獨角仙生存的環境。"
  },

  // Additional single choice questions
  {
    id: "q023",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的體色通常是什麼樣子？",
    options: [
      "鮮紅色",
      "金屬綠色",
      "深褐至紅褐色",
      "黑色"
    ],
    answer: 2,
    explanation: "獨角仙的體色為深褐至紅褐色，這與其他金龜子的金屬綠色不同。"
  },

  {
    id: "q024",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的生活史約需多長時間才能從卵完成到成蟲？",
    options: [
      "約3個月",
      "約6個月",
      "約一年",
      "約2年"
    ],
    answer: 2,
    explanation: "獨角仙完整的生活史（卵→L1→L2→L3→蛹→成蟲）大約需要一年的時間。"
  },

  {
    id: "q025",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙幼蟲在飼養時，腐植土應該保持多深？",
    options: [
      "1-2 cm深",
      "3-5 cm深",
      "6-8 cm深",
      "10 cm以上深"
    ],
    answer: 1,
    explanation: "飼養獨角仙幼蟲時，應提供3-5公分深的腐植土環境。"
  },

  {
    id: "q026",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "在台灣，獨角仙屬於哪一個科的甲蟲？",
    options: [
      "鍬形蟲科",
      "金龜子科",
      "叩頭蟲科",
      "天牛科"
    ],
    answer: 1,
    explanation: "獨角仙屬於金龜子科（Scarabaeidae），是該科兜蟲亞科的成員。"
  },

  {
    id: "q027",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的犄角主要用途是什麼？",
    options: [
      "用於進食",
      "用於爬行",
      "用於爭奪領域和交配",
      "無特定用途"
    ],
    answer: 2,
    explanation: "獨角仙的犄角是性別信號，主要用於雄蟲之間爭奪領域和交配權。"
  },

  {
    id: "q028",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙和姬獨角仙在台灣的分布是什麼樣的？",
    options: [
      "只有獨角仙分布在台灣",
      "只有姬獨角仙分布在台灣",
      "兩種都分布在台灣",
      "兩種都不分布在台灣"
    ],
    answer: 2,
    explanation: "台灣有兩種獨角仙：獨角仙和姬獨角仙，兩種都是本島的原生種。"
  },

  {
    id: "q029",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙成蟲最活躍的進食時間是什麼時候？",
    options: [
      "上午",
      "下午",
      "晚上和夜間",
      "夜間到清晨"
    ],
    answer: 3,
    explanation: "獨角仙是夜行性昆蟲，主要在夜間到清晨時段活動和進食。"
  },

  {
    id: "q030",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的亞科分類名稱是什麼？",
    options: [
      "Lucaninae",
      "Cerambycinae",
      "Dynastinae",
      "Scarabaeinae"
    ],
    answer: 2,
    explanation: "獨角仙屬於兜蟲亞科（Dynastinae），Lucanus屬於金龜子科鍬形蟲亞科（Lucaninae）。"
  },

  // ===== 鍬形蟲 (Stag Beetles) - 30 questions =====

  {
    id: "q031",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲最明顯的外觀特徵是什麼？",
    options: [
      "頭部有犄角",
      "大顎發達如鹿角",
      "全身金屬色澤",
      "身體極為扁平"
    ],
    answer: 1,
    explanation: "鍬形蟲的最大特徵是大顎發達，形似鹿角，這是其名稱的由來。"
  },

  {
    id: "q032",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "台灣最常見的鍬形蟲種類是哪一種？",
    options: [
      "台灣扁鍬",
      "台灣深山鍬",
      "鬼艷鍬形蟲",
      "台灣大鍬"
    ],
    answer: 0,
    explanation: "台灣扁鍬是台灣最常見的鍬形蟲，分布廣泛且容易飼養。"
  },

  {
    id: "q033",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "台灣扁鍬的身體形狀特點是什麼？",
    options: [
      "身體圓形",
      "身體細長",
      "身體扁平",
      "身體球形"
    ],
    answer: 2,
    explanation: "台灣扁鍬的身體扁平，這是其名稱的由來，也是容易辨識的特徵。"
  },

  {
    id: "q034",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "台灣扁鍬的分布海拔範圍是多少？",
    options: [
      "只分布在低海拔地區",
      "0-2000 m",
      "只分布在高海拔地區",
      "2000-3000 m"
    ],
    answer: 1,
    explanation: "台灣扁鍬分布於0-2000公尺的海拔範圍，分布最廣泛。"
  },

  {
    id: "q035",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣扁鍬的飼養難度如何？",
    options: [
      "非常困難",
      "容易飼養",
      "極為困難",
      "基本無法飼養"
    ],
    answer: 1,
    explanation: "台灣扁鍬是最容易飼養的鍬形蟲之一，很適合初學者。"
  },

  {
    id: "q036",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲幼蟲的主食是什麼？",
    options: [
      "腐植土",
      "朽木和木屑",
      "新鮮樹葉",
      "昆蟲果凍"
    ],
    answer: 1,
    explanation: "鍬形蟲幼蟲以朽木和木屑為食，不像獨角仙幼蟲以腐植土為食。"
  },

  {
    id: "q037",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "飼養鍬形蟲幼蟲時，應該使用什麼材料？",
    options: [
      "腐植土",
      "菌瓶（含朽木和菌類）",
      "純沙土",
      "竹屑"
    ],
    answer: 1,
    explanation: "鍬形蟲幼蟲應飼養在菌瓶中，這些菌瓶含有朽木和菌類，提供適合的生長環境。"
  },

  {
    id: "q038",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "飼養鍬形蟲時應該維持的溫度範圍是多少？",
    options: [
      "10-15度",
      "18-25度",
      "25-30度",
      "30度以上"
    ],
    answer: 1,
    explanation: "鍬形蟲飼養的適宜溫度為18-25度，菌瓶應保持在26度以下。"
  },

  {
    id: "q039",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣深山鍬屬於哪一個屬？",
    options: [
      "Prosopocoilus屬",
      "Lucanus屬",
      "Odontolabis屬",
      "Neolucanus屬"
    ],
    answer: 1,
    explanation: "台灣深山鍬屬於Lucanus屬（深山屬），該屬在台灣有8種。"
  },

  {
    id: "q040",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "在台灣，深山屬（Lucanus）有幾種？",
    options: [
      "3種",
      "5種",
      "8種",
      "10種"
    ],
    answer: 2,
    explanation: "深山屬（Lucanus）在台灣有8種，這是該屬在台灣的主要多樣性。"
  },

  {
    id: "q041",
    type: "multiple",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣常見的鍬形蟲種類有哪些？(複選)",
    options: [
      "台灣扁鍬",
      "台灣深山鍬",
      "鬼艷鍬形蟲",
      "獨角仙"
    ],
    answer: [0, 1, 2],
    explanation: "台灣常見的鍬形蟲包括台灣扁鍬、台灣深山鍬、鬼艷鍬形蟲和台灣大鍬等。獨角仙屬於金龜子科，不是鍬形蟲。"
  },

  {
    id: "q042",
    type: "multiple",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的大顎有哪些用途？(複選)",
    options: [
      "進食木材",
      "爭奪領域和交配權",
      "保護胸部",
      "跳躍"
    ],
    answer: [0, 1, 2],
    explanation: "鍬形蟲的大顎用於進食（啃食樹皮）、雄蟲之間爭奪領域和交配權，以及保護身體前部。"
  },

  {
    id: "q043",
    type: "multiple",
    category: "鍬形蟲",
    difficulty: 3,
    question: "以下關於台灣扁鍬的敘述，哪些是正確的？(複選)",
    options: [
      "可在0-2000公尺海拔生存",
      "身體呈扁平形狀",
      "可越冬",
      "完全無法人工飼養"
    ],
    answer: [0, 1, 2],
    explanation: "台灣扁鍬分布於0-2000公尺，身體扁平，具有越冬能力，且容易人工飼養。"
  },

  {
    id: "q044",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲和獨角仙都屬於金龜子科。",
    answer: false,
    explanation: "這是錯誤的。獨角仙屬於金龜子科，而鍬形蟲屬於鍬形蟲科，是不同的科。"
  },

  {
    id: "q045",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲的大顎是用來進食的工具。",
    answer: true,
    explanation: "正確。鍬形蟲用大顎啃食樹皮和木材，這是其重要的進食工具。"
  },

  {
    id: "q046",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲幼蟲和獨角仙幼蟲吃的食物完全相同。",
    answer: false,
    explanation: "這是錯誤的。鍬形蟲幼蟲吃朽木和木屑，獨角仙幼蟲吃腐植土。"
  },

  {
    id: "q047",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣扁鍬能夠越過冬季並存活。",
    answer: true,
    explanation: "正確。台灣扁鍬具有越冬能力，是台灣冬季仍可見到的鍬形蟲。"
  },

  {
    id: "q048",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲幼蟲需要產卵木來完成生活史。",
    answer: true,
    explanation: "正確。鍬形蟲的繁殖需要產卵木，成蟲會在朽木中產卵。"
  },

  {
    id: "q049",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲的飼養溫度可以超過26度。",
    answer: false,
    explanation: "這是錯誤的。菌瓶飼養的鍬形蟲應保持在26度以下，過高的溫度不適合。"
  },

  {
    id: "q050",
    type: "image",
    category: "鍬形蟲",
    difficulty: 2,
    question: "🪲 這個圖片顯示的是什麼昆蟲的特徵？",
    options: [
      "大顎如鹿角的鍬形蟲",
      "頭部有犄角的獨角仙",
      "金屬綠色的花金龜",
      "小型的蜜蜂"
    ],
    answer: 0,
    explanation: "圖片所示是鍬形蟲最特徵的地方——發達的大顎，形似鹿角。"
  },

  {
    id: "q051",
    type: "image",
    category: "鍬形蟲",
    difficulty: 3,
    question: "🪲 台灣扁鍬相比其他鍬形蟲的特點是什麼？",
    options: [
      "身體最大",
      "身體最小",
      "身體最扁平",
      "大顎最發達"
    ],
    answer: 2,
    explanation: "台灣扁鍬最顯著的特徵是身體相對扁平，這使其與其他種類的鍬形蟲容易區別。"
  },

  {
    id: "q052",
    type: "matching",
    category: "鍬形蟲",
    difficulty: 2,
    question: "將鍬形蟲的常見種類與其特徵配對：",
    pairs: [
      { left: "台灣扁鍬", right: "身體扁平，最常見，易飼養" },
      { left: "台灣深山鍬", right: "屬於Lucanus屬，分布在較高海拔" },
      { left: "鬼艷鍬形蟲", right: "屬於Odontolabis屬，台灣僅1種" },
      { left: "台灣大鍬", right: "體型較大，大顎發達" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些是台灣主要鍬形蟲種類的特徵分類。"
  },

  {
    id: "q053",
    type: "matching",
    category: "鍬形蟲",
    difficulty: 2,
    question: "將鍬形蟲幼蟲的成長階段與特點配對：",
    pairs: [
      { left: "L1期", right: "2-4周的初期幼蟲" },
      { left: "L2期", right: "3-5周的中期幼蟲" },
      { left: "L3期", right: "最後的幼蟲期，持續最長時間" },
      { left: "蛹期", right: "變態成成蟲前的靜止期" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這是鍬形蟲幼蟲的正常生活史階段。"
  },

  {
    id: "q054",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的L1期持續多久？",
    options: [
      "1-2週",
      "2-4週",
      "5-6週",
      "8-10週"
    ],
    answer: 1,
    explanation: "鍬形蟲幼蟲的L1期持續約2-4週。"
  },

  {
    id: "q055",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的L2期持續多久？",
    options: [
      "1-2週",
      "2-4週",
      "3-5週",
      "8週以上"
    ],
    answer: 2,
    explanation: "鍬形蟲幼蟲的L2期持續約3-5週。"
  },

  {
    id: "q056",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲屬於哪一個科？",
    options: [
      "金龜子科",
      "鍬形蟲科",
      "天牛科",
      "叩頭蟲科"
    ],
    answer: 1,
    explanation: "鍬形蟲屬於鍬形蟲科（Lucanidae），這是單獨的科別。"
  },

  {
    id: "q057",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的雄蟲大顎在自然界的主要用途是什麼？",
    options: [
      "進食樹葉",
      "保護卵",
      "爭奪領域和交配權",
      "製造聲音"
    ],
    answer: 2,
    explanation: "雄蟲用發達的大顎進行同性競爭，爭奪領域和交配權。"
  },

  {
    id: "q058",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鬼艷鍬形蟲屬於哪一個屬？",
    options: [
      "Lucanus屬",
      "Prosopocoilus屬",
      "Odontolabis屬",
      "Dorcus屬"
    ],
    answer: 2,
    explanation: "鬼艷鍬形蟲屬於Odontolabis屬（鬼艷屬），台灣僅有1種。"
  },

  {
    id: "q059",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲的飼養環境應該提供什麼？",
    options: [
      "只需昆蟲果凍",
      "樹皮和朽木讓它啃食",
      "濕潤的腐植土",
      "沙土"
    ],
    answer: 1,
    explanation: "鍬形蟲成蟲需要啃食樹皮和朽木，因此應提供這些物質。"
  },

  {
    id: "q060",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣扁鍬為什麼容易飼養？",
    options: [
      "因為它不需要進食",
      "因為它的適應力強，越冬能力好",
      "因為它不需要產卵木",
      "因為它不會逃脫"
    ],
    answer: 1,
    explanation: "台灣扁鍬容易飼養是因為其強大的適應力和越冬能力。"
  },

  // ===== 金龜子 (Scarab Beetles) - 20 questions =====

  {
    id: "q061",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "台灣金龜子科甲蟲約有多少種？",
    options: [
      "約100種",
      "約250種",
      "約500種",
      "約1000種"
    ],
    answer: 2,
    explanation: "台灣金龜子科（Scarabaeidae）約有500種甲蟲，種類繁多。"
  },

  {
    id: "q062",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子的分類特徵是什麼？",
    options: [
      "有分叉犄角",
      "有發達的大顎",
      "觸角末端鰓葉狀",
      "身體呈球形"
    ],
    answer: 2,
    explanation: "金龜子科的分類特徵是觸角末端呈鰓葉狀，這是辨識金龜子的重要特徵。"
  },

  {
    id: "q063",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "花金龜的主要特點是什麼？",
    options: [
      "以糞便為食",
      "有金屬光澤，植食性",
      "無顏色，隱蔽性強",
      "體型極大"
    ],
    answer: 1,
    explanation: "花金龜具有金屬光澤，是植食性的金龜子，常見於花卉上。"
  },

  {
    id: "q064",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "糞金龜的食性是什麼？",
    options: [
      "植食性",
      "肉食性",
      "以動物糞便為食",
      "腐食性"
    ],
    answer: 2,
    explanation: "糞金龜以動物糞便為食，是自然界重要的分解者。"
  },

  {
    id: "q065",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "糞金龜通常分為哪兩種類型？",
    options: [
      "大型和小型",
      "飛行型和步行型",
      "Roller和Tunneler",
      "黑色和棕色"
    ],
    answer: 2,
    explanation: "糞金龜分為Roller（滾糞型）和Tunneler（埋糞型）兩種。"
  },

  {
    id: "q066",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "獨角仙其實屬於哪一個科？",
    options: [
      "鍬形蟲科",
      "天牛科",
      "金龜子科",
      "叩頭蟲科"
    ],
    answer: 2,
    explanation: "獨角仙屬於金龜子科（Scarabaeidae），是該科兜蟲亞科的成員。"
  },

  {
    id: "q067",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "東方白點花金龜的另一個名稱是什麼？",
    options: [
      "綠色金龜",
      "鐵金龜",
      "大型金龜",
      "夜行金龜"
    ],
    answer: 1,
    explanation: "東方白點花金龜也被稱為『鐵金龜』，在都會區很常見。"
  },

  {
    id: "q068",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "台灣角金龜的特點是什麼？",
    options: [
      "無任何武器",
      "只有角",
      "有兩種武器（角和大顎）",
      "只有大顎"
    ],
    answer: 2,
    explanation: "台灣角金龜是裝備有兩種武器的金龜子——既有角又有大顎。"
  },

  {
    id: "q069",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子幼蟲的肛門開口方向可以用來做什麼？",
    options: [
      "判斷性別",
      "判斷年齡",
      "區別不同種類",
      "判斷食性"
    ],
    answer: 2,
    explanation: "金龜子幼蟲肛門開口的方向（橫向或縱向）是區別不同種類的重要特徵。"
  },

  {
    id: "q070",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "長臂金龜在台灣是什麼樣的昆蟲？",
    options: [
      "最常見的金龜子",
      "台灣最大的甲蟲",
      "最小的金龜子",
      "只在高海拔生存"
    ],
    answer: 1,
    explanation: "長臂金龜是台灣最大的甲蟲，也屬於金龜子科。"
  },

  {
    id: "q071",
    type: "multiple",
    category: "金龜子",
    difficulty: 2,
    question: "以下哪些是金龜子的特徵？(複選)",
    options: [
      "觸角末端鰓葉狀",
      "有金屬光澤",
      "都是植食性",
      "幼蟲被稱為雞母蟲"
    ],
    answer: [0, 3],
    explanation: "金龜子科的特徵是觸角末端鰓葉狀，幼蟲確實被稱為雞母蟲。但並非所有金龜子都有金屬光澤或都是植食性。"
  },

  {
    id: "q072",
    type: "multiple",
    category: "金龜子",
    difficulty: 2,
    question: "以下關於台灣金龜子的敘述，哪些是正確的？(複選)",
    options: [
      "台灣約有500種金龜子",
      "所有金龜子都有金屬色澤",
      "東方白點花金龜在都會區常見",
      "獨角仙屬於金龜子科"
    ],
    answer: [0, 2, 3],
    explanation: "台灣確實約有500種金龜子，東方白點花金龜在都會區常見，獨角仙屬於金龜子科。但不是所有金龜子都有金屬色澤。"
  },

  {
    id: "q073",
    type: "multiple",
    category: "金龜子",
    difficulty: 3,
    question: "糞金龜的行為特徵有哪些？(複選)",
    options: [
      "將糞便滾成球狀並推動（Roller類型）",
      "將糞便埋入土壤（Tunneler類型）",
      "以新鮮樹葉為食",
      "在糞便球內產卵"
    ],
    answer: [0, 1, 3],
    explanation: "糞金龜分為滾糞型（Roller）和埋糞型（Tunneler），它們都會在糞便球內產卵以提供幼蟲食物。"
  },

  {
    id: "q074",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "所有金龜子都具有金屬光澤。",
    answer: false,
    explanation: "這是錯誤的。雖然花金龜有金屬光澤，但糞金龜和許多其他金龜子則沒有明顯的金屬色澤。"
  },

  {
    id: "q075",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "獨角仙屬於金龜子科兜蟲亞科。",
    answer: true,
    explanation: "正確。獨角仙的學名為Trypoxylus dichotomus tsunobosonis，屬於金龜子科兜蟲亞科。"
  },

  {
    id: "q076",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "花金龜和糞金龜都是植食性昆蟲。",
    answer: false,
    explanation: "這是錯誤的。花金龜是植食性，但糞金龜是以動物糞便為食。"
  },

  {
    id: "q077",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "長臂金龜是台灣最大的甲蟲。",
    answer: true,
    explanation: "正確。長臂金龜是台灣最大的甲蟲，屬於金龜子科。"
  },

  {
    id: "q078",
    type: "image",
    category: "金龜子",
    difficulty: 2,
    question: "🪲 這個圖片顯示的是什麼金龜子的特徵？",
    options: [
      "具有金屬綠色光澤的花金龜",
      "以糞便為食的糞金龜",
      "無金屬光澤的普通金龜子",
      "體型巨大的長臂金龜"
    ],
    answer: 0,
    explanation: "花金龜最顯著的特徵是其美麗的金屬光澤和鮮艷的顏色。"
  },

  {
    id: "q079",
    type: "matching",
    category: "金龜子",
    difficulty: 2,
    question: "將金龜子的類型與其特點配對：",
    pairs: [
      { left: "花金龜", right: "有金屬光澤，植食性" },
      { left: "糞金龜", right: "以動物糞便為食，分Roller和Tunneler" },
      { left: "東方白點花金龜", right: "也稱鐵金龜，都會區常見" },
      { left: "台灣角金龜", right: "有角和大顎兩種武器" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些是台灣主要金龜子的特徵分類。"
  },

  {
    id: "q080",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "金龜子科在分類學上的學名是什麼？",
    options: [
      "Lucanidae",
      "Scarabaeidae",
      "Cerambycidae",
      "Buprestidae"
    ],
    answer: 1,
    explanation: "金龜子科的學名是Scarabaeidae，包括獨角仙、鍬形蟲以及各種花金龜。"
  },

  // Additional questions to reach comprehensive coverage
  {
    id: "q081",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "台灣金龜子科中，植食性的金龜子主要吃什麼？",
    options: [
      "糞便",
      "朽木",
      "花朵和葉子",
      "其他昆蟲"
    ],
    answer: 2,
    explanation: "植食性的金龜子（如花金龜）主要取食花朵和葉子。"
  },

  {
    id: "q082",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "如何從生活習性區別獨角仙和鍬形蟲？",
    options: [
      "獨角仙不進食，鍬形蟲進食",
      "獨角仙以樹液為食，鍬形蟲啃食朽木",
      "獨角仙只在白天活動，鍬形蟲只在夜間活動",
      "獨角仙無翅，鍬形蟲有翅"
    ],
    answer: 1,
    explanation: "獨角仙成蟲以光臘樹樹液和水果汁液為食，而鍬形蟲用發達的大顎啃食樹皮和朽木。"
  },

  {
    id: "q083",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲的L3期相比L1和L2期的特點是什麼？",
    options: [
      "持續時間最短",
      "持續時間最長",
      "食量最小",
      "會自動離開朽木"
    ],
    answer: 1,
    explanation: "鍬形蟲的L3期（最後幼蟲期）持續時間最長，是幼蟲期中最重要的生長階段。"
  },

  {
    id: "q084",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的飼養環境中，昆蟲果凍主要是提供給什麼蟲的？",
    options: [
      "提供給幼蟲",
      "提供給成蟲",
      "提供給蛹",
      "所有階段都需要"
    ],
    answer: 1,
    explanation: "昆蟲果凍主要是供獨角仙成蟲進食使用，幼蟲則以腐植土為主食。"
  },

  {
    id: "q085",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "在區別金龜子幼蟲和獨角仙幼蟲時，最可靠的特徵是什麼？",
    options: [
      "體色深淺",
      "身體大小",
      "肛門開口方向",
      "腳的形狀"
    ],
    answer: 2,
    explanation: "肛門開口的方向是區別不同金龜子科昆蟲幼蟲的最可靠特徵。"
  },

  // ===== q086-q120: 獨角仙 Additional Questions (35 questions) =====

  {
    id: "q086",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙在台灣最常見的亞種是什麼？",
    options: [
      "日本獨角仙",
      "台灣獨角仙（津野伏亞種）",
      "中國獨角仙",
      "南洋獨角仙"
    ],
    answer: 1,
    explanation: "台灣的獨角仙為津野伏亞種（Trypoxylus dichotomus tsunobosonis），分布於台灣全島低海拔山區。"
  },

  {
    id: "q087",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙成蟲最喜歡在什麼樹上聚集進食？",
    options: [
      "相思樹",
      "光臘樹",
      "榕樹",
      "樟樹"
    ],
    answer: 1,
    explanation: "光臘樹（白雞油）是獨角仙成蟲最重要的食料樹，分泌的樹液特別受獨角仙喜愛。"
  },

  {
    id: "q088",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的卵孵化需要多久？",
    options: [
      "3-5天",
      "1-2週",
      "2-3週",
      "1個月"
    ],
    answer: 2,
    explanation: "獨角仙的卵通常需要2-3週才能孵化成幼蟲（L1）。"
  },

  {
    id: "q089",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙幼蟲的整個發育期（從卵到成蟲）大約需要多長時間？",
    options: [
      "3-4個月",
      "6-8個月",
      "1-2年",
      "2-3年"
    ],
    answer: 2,
    explanation: "獨角仙的完整生活史需要約1-2年，取決於溫度和飼養條件。"
  },

  {
    id: "q090",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "在人工飼養獨角仙幼蟲時，最適合的養殖介質是什麼？",
    options: [
      "純細沙",
      "發酵腐植土",
      "朽木屑",
      "樹皮碎片"
    ],
    answer: 1,
    explanation: "發酵腐植土（發酵木屑）是飼養獨角仙幼蟲的最佳介質，保持適當濕度和營養。"
  },

  {
    id: "q091",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的犄角大小與什麼因素最相關？",
    options: [
      "獨角仙的年齡",
      "獨角仙的父系遺傳",
      "幼蟲期的營養狀況",
      "成蟲期的進食量"
    ],
    answer: 2,
    explanation: "獨角仙的犄角大小與幼蟲期的營養狀況密切相關，營養充足的幼蟲會發育出更大的犄角。"
  },

  {
    id: "q092",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙成蟲在什麼時間段最活躍？",
    options: [
      "凌晨2-4點",
      "晌午時分",
      "傍晚6-8點",
      "午夜時分"
    ],
    answer: 0,
    explanation: "獨角仙在夜間活動，特別是在凌晨2-4點達到活動高峰，這時候對光源的趨光性最強。"
  },

  {
    id: "q093",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的犄角是用來破壞樹皮取食樹液的。",
    answer: true,
    explanation: "正確。獨角仙的犄角可以幫助破壞樹皮和挖掘樹液，這是其主要功能之一。"
  },

  {
    id: "q094",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙可以飛行。",
    answer: true,
    explanation: "正確。獨角仙雖然體型龐大，但具有發達的翅膀，能夠飛行移動。"
  },

  {
    id: "q095",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的雌蟲在土壤中產卵時會築造特殊的產卵室。",
    answer: true,
    explanation: "正確。獨角仙的雌蟲會在腐植土中挖掘並築造產卵室，為卵提供保護。"
  },

  {
    id: "q096",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙與姬獨角仙是同一種蟲，只是大小不同。",
    answer: false,
    explanation: "這是錯誤的。獨角仙和姬獨角仙是兩個不同的種，不只是大小不同，生態和習性也有差異。"
  },

  {
    id: "q097",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙幼蟲的L3期（最後齡期）會停止進食以準備化蛹。",
    answer: true,
    explanation: "正確。在L3期末期，幼蟲會停止進食，開始製造蛹室準備化蛹。"
  },

  {
    id: "q098",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的蛹期大約需要多久？",
    options: [
      "5-10天",
      "2-3週",
      "1-2個月",
      "3-4個月"
    ],
    answer: 1,
    explanation: "獨角仙的蛹期通常需要2-3週，溫度會影響發育速度。"
  },

  {
    id: "q099",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "發現獨角仙卡在樹皮中，如何正確救援？",
    options: [
      "用力拉扯",
      "澆冷水讓牠放鬆",
      "輕輕轉動身體，不使用蠻力",
      "等待牠自己掙脫"
    ],
    answer: 2,
    explanation: "遇到卡住的獨角仙應該輕輕轉動身體協助，不要用蠻力避免傷害蟲體。"
  },

  {
    id: "q100",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的身體顏色通常是什麼？",
    options: [
      "鮮艷的綠色",
      "深褐色至紅褐色",
      "黑色",
      "金黃色"
    ],
    answer: 1,
    explanation: "獨角仙成蟲的身體通常呈現深褐色至紅褐色，具有適度光澤。"
  },

  {
    id: "q101",
    type: "matching",
    category: "獨角仙",
    difficulty: 2,
    question: "將獨角仙的特徵與其對應的說明配對：",
    pairs: [
      { left: "大顎", right: "退化，不明顯" },
      { left: "體型", right: "中等大小（4-7公分）" },
      { left: "活動時間", right: "夜間活動，具趨光性" },
      { left: "成蟲壽命", right: "約1-3個月" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些是獨角仙成蟲的主要特徵，幫助區別於其他甲蟲。"
  },

  {
    id: "q102",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "在擁擠的飼養環境中，獨角仙幼蟲會發生什麼？",
    options: [
      "更快速地生長",
      "互相殘殺",
      "停止進食",
      "集體進入蛹期"
    ],
    answer: 1,
    explanation: "獨角仙幼蟲具有領域性，擁擠環境會導致互相殘殺，因此需要分開飼養。"
  },

  {
    id: "q103",
    type: "image",
    category: "獨角仙",
    difficulty: 2,
    question: "🪲 這個獨角仙的分叉犄角說明牠最可能是什麼性別？",
    options: [
      "雌蟲（已成熟）",
      "雄蟲",
      "未成熟的雄蟲",
      "畸形個體"
    ],
    answer: 1,
    explanation: "只有獨角仙的雄蟲才具有分叉犄角，這是判斷雌雄性別的最直接特徵。"
  },

  {
    id: "q104",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙與昆蟲世界中的哪個物種不屬於金龜子科？",
    options: [
      "長臂金龜",
      "鍬形蟲",
      "花金龜",
      "姬獨角仙"
    ],
    answer: 1,
    explanation: "鍬形蟲屬於鍬形蟲科，不是金龜子科。獨角仙、長臂金龜、花金龜等都屬於金龜子科。"
  },

  {
    id: "q105",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的幼蟲若無法找到合適的脫皮位置，可能會發生什麼？",
    options: [
      "自動尋找新位置",
      "在原地脫皮失敗，導致蛻殼不遂",
      "停止進食等待",
      "永久停留在當前齡期"
    ],
    answer: 1,
    explanation: "獨角仙幼蟲需要有足夠空間脫皮，若空間不足可能導致蛻殼不遂而死亡。"
  },

  {
    id: "q106",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的幼蟲具有毒性。",
    answer: false,
    explanation: "這是錯誤的。獨角仙幼蟲（雞母蟲）無毒，可以安全觸摸和觀察。"
  },

  {
    id: "q107",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙成蟲進食樹液時，會與其他昆蟲競爭同一食源。",
    answer: true,
    explanation: "正確。光臘樹等樹液也會吸引其他甲蟲、蠅類和昆蟲，形成競爭。"
  },

  {
    id: "q108",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "在教導小朋友觀察獨角仙時，最危險的行為是什麼？",
    options: [
      "用手輕輕觸摸蟲體",
      "觀察蟲的移動",
      "用力捏住蟲體",
      "近距離觀察犄角"
    ],
    answer: 2,
    explanation: "用力捏住獨角仙會傷害牠的身體，可能導致蟲體受傷甚至死亡。應教導小朋友溫柔對待。"
  },

  {
    id: "q109",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙幼蟲最害怕什麼環境因素？",
    options: [
      "黑暗環境",
      "過度乾燥",
      "適度濕度",
      "低溫環境"
    ],
    answer: 1,
    explanation: "獨角仙幼蟲需要濕潤的腐植土環境，過度乾燥會導致脫水和死亡。"
  },

  {
    id: "q110",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的犄角越大，證明這隻蟲越老。",
    answer: false,
    explanation: "這是錯誤的。犄角大小主要取決於幼蟲期的營養，與年齡無直接關係。同齡的成蟲犄角可能相差很大。"
  },

  {
    id: "q111",
    type: "multiple",
    category: "獨角仙",
    difficulty: 2,
    question: "以下哪些因素會影響獨角仙幼蟲的發育速度？",
    options: [
      "飼養溫度",
      "介質濕度",
      "介質營養水準",
      "容器顏色"
    ],
    answer: [0, 1, 2],
    explanation: "溫度、濕度和營養都是影響幼蟲發育的重要因素。容器顏色對發育影響不大。"
  },

  {
    id: "q112",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙在自然界中的天敵主要是什麼？",
    options: [
      "蜘蛛",
      "老鼠和烏鴉等捕食者",
      "寄生性昆蟲",
      "同種個體"
    ],
    answer: 1,
    explanation: "獨角仙成蟲的主要天敵包括老鼠、烏鴉等捕食性動物，特別是在夜間活動時容易被捕獲。"
  },

  {
    id: "q113",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的幼蟲在什麼情況下會停止進食？",
    options: [
      "食物不足時",
      "準備脫皮或化蛹時",
      "感到害怕時",
      "白天來臨時"
    ],
    answer: 1,
    explanation: "獨角仙幼蟲在準備脫皮和準備化蛹時會停止進食，這是正常的生理現象。"
  },

  {
    id: "q114",
    type: "image",
    category: "獨角仙",
    difficulty: 3,
    question: "🪲 從這個獨角仙幼蟲的肛門開口方向，可以判斷出什麼重要信息？",
    options: [
      "判斷幼蟲的性別",
      "判斷幼蟲的齡期",
      "確認這是獨角仙幼蟲（橫向開口）",
      "判斷幼蟲的年齡"
    ],
    answer: 2,
    explanation: "獨角仙幼蟲的肛門開口是橫向的，這是區別於其他金龜子幼蟲的最可靠特徵。"
  },

  {
    id: "q115",
    type: "single",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的雌蟲通常比雄蟲大嗎？",
    options: [
      "是的，明顯更大",
      "否，通常更小",
      "體型相近",
      "體型變異很大，無法比較"
    ],
    answer: 0,
    explanation: "獨角仙的雌蟲通常比雄蟲體型更大，雄蟲的體重更多用於發育犄角。"
  },

  {
    id: "q116",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙幼蟲可以在完全乾燥的泥土中存活。",
    answer: false,
    explanation: "這是錯誤的。獨角仙幼蟲需要適度濕潤的環境，完全乾燥的泥土會導致幼蟲脫水死亡。"
  },

  {
    id: "q117",
    type: "single",
    category: "獨角仙",
    difficulty: 2,
    question: "獨角仙的蛹具有什麼顏色？",
    options: [
      "白色至淡黃色",
      "深褐色",
      "綠色",
      "透明"
    ],
    answer: 0,
    explanation: "獨角仙的蛹呈白色至淡黃色，在黑暗的蛹室中慢慢變硬並著色。"
  },

  {
    id: "q118",
    type: "matching",
    category: "獨角仙",
    difficulty: 3,
    question: "將獨角仙人工飼養的關鍵步驟與其重要性配對：",
    pairs: [
      { left: "分開飼養幼蟲", right: "防止互相殘殺" },
      { left: "保持介質濕度", right: "幼蟲正常生長發育" },
      { left: "提供充足空間", right: "幼蟲能夠正常脫皮" },
      { left: "定期更換介質", right: "防止腐敗和霉菌滋生" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些都是獨角仙人工飼養的關鍵步驟，缺少任何一項都會影響飼養成功率。"
  },

  {
    id: "q119",
    type: "single",
    category: "獨角仙",
    difficulty: 3,
    question: "獨角仙的成蟲在人工飼養下，應該給予什麼樣的容器環境？",
    options: [
      "密閉容器避免逃脫",
      "提供樹枝和樹皮，模擬天然環境",
      "光滑的玻璃容器便於觀察",
      "完全黑暗的容器模擬樹洞"
    ],
    answer: 1,
    explanation: "獨角仙成蟲應該提供樹枝、樹皮等自然環境，讓牠們能夠自然行動和進食。"
  },

  {
    id: "q120",
    type: "truefalse",
    category: "獨角仙",
    difficulty: 1,
    question: "獨角仙的成蟲可以在自來水中游泳。",
    answer: false,
    explanation: "這是錯誤的。獨角仙成蟲雖然健壯，但長時間浸水會導致死亡，應避免浸水。"
  },

  // ===== q121-q160: 鍬形蟲 Additional Questions (40 questions) =====

  {
    id: "q121",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "台灣產的鍬形蟲中，哪一種是最容易飼養的？",
    options: [
      "深山鍬形蟲",
      "台灣扁鍬",
      "鬼艷鍬形蟲",
      "台灣大鍬"
    ],
    answer: 1,
    explanation: "台灣扁鍬形蟲是台灣最容易飼養的鍬形蟲，適應性強，初學者最佳選擇。"
  },

  {
    id: "q122",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲的幼蟲以什麼作為主要食物？",
    options: [
      "樹液",
      "朽木和樹皮",
      "花粉",
      "糞便"
    ],
    answer: 1,
    explanation: "鍬形蟲的幼蟲（木棲幼蟲）啃食朽木、樹皮和木屑，這是其主要營養來源。"
  },

  {
    id: "q123",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的大顎在什麼時期特別發達？",
    options: [
      "幼蟲期",
      "蛹期",
      "成蟲期",
      "所有時期"
    ],
    answer: 2,
    explanation: "鍬形蟲的大顎在成蟲期特別發達和有用，是成蟲啃食木材的重要工具。"
  },

  {
    id: "q124",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲的活動季節與獨角仙相比如何？",
    options: [
      "完全相同",
      "更早出現，活動期較長",
      "更晚出現，活動期較短",
      "完全不同，無規律"
    ],
    answer: 1,
    explanation: "鍬形蟲的活動季節通常比獨角仙更長，春季即可開始見到，秋冬期間某些種類仍活躍。"
  },

  {
    id: "q125",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲幼蟲飼養時，為什麼需要定期更換飼養瓶？",
    options: [
      "防止幼蟲逃脫",
      "幼蟲喜歡新環境",
      "防止介質腐敗和霉菌滋生",
      "增加幼蟲的活動空間"
    ],
    answer: 2,
    explanation: "鍬形蟲幼蟲飼養需定期更換飼養瓶，防止介質腐敗產生有害氣體和霉菌。"
  },

  {
    id: "q126",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲的飼養溫度應該保持在多少度以下？",
    options: [
      "20度",
      "23度",
      "26度",
      "30度"
    ],
    answer: 2,
    explanation: "鍬形蟲（特別是用菌瓶飼養時）最適溫度在26度以下，過高溫度會危害幼蟲。"
  },

  {
    id: "q127",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "所有的鍬形蟲都具有發達的大顎。",
    answer: true,
    explanation: "正確。發達的大顎是鍬形蟲的標誌特徵，用於啃食木材和競爭。"
  },

  {
    id: "q128",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲與獨角仙的幼蟲食性完全相同。",
    answer: false,
    explanation: "這是錯誤的。鍬形蟲幼蟲吃朽木和木屑，獨角仙幼蟲吃腐植土，食性不同。"
  },

  {
    id: "q129",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的生活史中，哪個階段持續時間最長？",
    options: [
      "卵期",
      "L1幼蟲期",
      "L3幼蟲期",
      "蛹期"
    ],
    answer: 2,
    explanation: "鍬形蟲的L3期（最後幼蟲期）持續時間最長，通常為數個月，是主要生長階段。"
  },

  {
    id: "q130",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲的成蟲通常在什麼時間活動？",
    options: [
      "白天活動",
      "中午最活躍",
      "夜間活動",
      "全天活動"
    ],
    answer: 2,
    explanation: "鍬形蟲是夜行性昆蟲，夜間活動並具有趨光性。"
  },

  {
    id: "q131",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的成蟲可以在完全乾燥的環境中飼養。",
    answer: false,
    explanation: "這是錯誤的。鍬形蟲成蟲需要適度濕潤的環境，過度乾燥會導致死亡。"
  },

  {
    id: "q132",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "台灣的哪種鍬形蟲能夠越冬？",
    options: [
      "姬兜蟲",
      "台灣扁鍬",
      "南洋大兜",
      "沙漠金龜"
    ],
    answer: 1,
    explanation: "台灣扁鍬具有越冬能力，是台灣冬季仍可見到的鍬形蟲物種。"
  },

  {
    id: "q133",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲成蟲的大顎大小反映了什麼？",
    options: [
      "蟲的年齡",
      "幼蟲期的營養狀況",
      "成蟲的進食量",
      "蟲的飛行能力"
    ],
    answer: 1,
    explanation: "鍬形蟲大顎的大小主要取決於幼蟲期的營養狀況，營養充足則大顎更發達。"
  },

  {
    id: "q134",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "雄性鍬形蟲的大顎比雌性明顯發達。",
    answer: true,
    explanation: "正確。鍬形蟲的性二型明顯，雄性個體的大顎遠比雌性發達。"
  },

  {
    id: "q135",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "在野外觀察鍬形蟲時，最常在哪裡發現牠們？",
    options: [
      "花朵上",
      "朽木和樹幹上",
      "土壤中",
      "水邊"
    ],
    answer: 1,
    explanation: "鍬形蟲成蟲通常在朽木、樹幹和樹根部活動，尋找食物和產卵位置。"
  },

  {
    id: "q136",
    type: "image",
    category: "鍬形蟲",
    difficulty: 2,
    question: "🪲 這隻鍬形蟲發達的大顎最可能用來做什麼？",
    options: [
      "吸取花蜜",
      "啃食木材和樹皮",
      "過濾土壤",
      "防禦天敵"
    ],
    answer: 1,
    explanation: "鍬形蟲的發達大顎主要用於啃食木材、樹皮，也用於打鬥競爭。"
  },

  {
    id: "q137",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲的L3幼蟲若進入木屑瓶後，一般需要多久才能羽化？",
    options: [
      "1-2週",
      "1-2個月",
      "3-6個月",
      "6-12個月"
    ],
    answer: 2,
    explanation: "鍬形蟲L3幼蟲進入木屑瓶後，通常需要3-6個月左右完成化蛹和羽化過程。"
  },

  {
    id: "q138",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲產卵時需要什麼？",
    options: [
      "細沙",
      "腐植土",
      "朽木（產卵木）",
      "純水"
    ],
    answer: 2,
    explanation: "鍬形蟲的繁殖和產卵需要朽木，成蟲會在朽木中挖掘坑洞並產卵。"
  },

  {
    id: "q139",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲可以在光臘樹上找到。",
    answer: false,
    explanation: "這是錯誤的。獨角仙在光臘樹上聚集，但鍬形蟲主要在朽木和樹幹上活動。"
  },

  {
    id: "q140",
    type: "multiple",
    category: "鍬形蟲",
    difficulty: 2,
    question: "以下哪些是正確的鍬形蟲飼養方法？",
    options: [
      "使用菌瓶飼養L3幼蟲",
      "保持溫度在26度以下",
      "提供充足的朽木給成蟲產卵",
      "將多隻幼蟲飼養在同一容器"
    ],
    answer: [0, 1, 2],
    explanation: "前三項都是正確的飼養方法。將多隻幼蟲飼養在同一容器是錯誤的，會導致互相殘殺。"
  },

  {
    id: "q141",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲幼蟲的齡期與大顎的發育有什麼關係？",
    options: [
      "每個齡期大顎發育相同",
      "越往後齡期大顎越發達（特別是在雄蟲）",
      "只有最後齡期才有大顎",
      "大顎在蛹期發育"
    ],
    answer: 1,
    explanation: "鍬形蟲幼蟲的大顎隨著齡期增加逐漸發達，特別是在L3期和成蟲時最為發達。"
  },

  {
    id: "q142",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲通常在何時開始進食和活動？",
    options: [
      "羽化後立即活動",
      "羽化後需要1-2週的調適期",
      "羽化後需要1個月以上的調適期",
      "從不活動和進食"
    ],
    answer: 1,
    explanation: "鍬形蟲羽化後需要1-2週的調適期，之後才能開始正常進食和活動。"
  },

  {
    id: "q143",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲成蟲可以用昆蟲果凍飼養。",
    answer: true,
    explanation: "正確。昆蟲果凍是飼養鍬形蟲成蟲的方便食物，提供必要的營養。"
  },

  {
    id: "q144",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲的科名是什麼？",
    options: [
      "金龜子科",
      "鍬形蟲科",
      "天牛科",
      "脊甲蟲科"
    ],
    answer: 1,
    explanation: "鍬形蟲屬於鍬形蟲科（Lucanidae），不同於獨角仙所屬的金龜子科。"
  },

  {
    id: "q145",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "在教導小朋友觀察鍬形蟲時，應該特別注意什麼？",
    options: [
      "注意鍬形蟲的大顎可能夾傷手指",
      "注意鍬形蟲可能飛走",
      "注意鍬形蟲夜間活動",
      "注意鍬形蟲的毒液"
    ],
    answer: 0,
    explanation: "鍬形蟲的大顎強有力，可能夾傷手指，需要教導小朋友謹慎對待。"
  },

  {
    id: "q146",
    type: "matching",
    category: "鍬形蟲",
    difficulty: 2,
    question: "將鍬形蟲的生活階段與其特點配對：",
    pairs: [
      { left: "卵期", right: "約2-3週，產在朽木中" },
      { left: "幼蟲期", right: "啃食木材，持續多個月" },
      { left: "蛹期", right: "不進食，準備羽化" },
      { left: "成蟲期", right: "進食樹液，競爭和繁殖" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這是鍬形蟲完整的生活史，每個階段都有其特定的特點和需求。"
  },

  {
    id: "q147",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "不同鍬形蟲物種的幼蟲飼養時間相差多少？",
    options: [
      "基本相同，都是3-6個月",
      "相差不大，都在1-2年內",
      "差異很大，可能從半年到2年以上",
      "完全不規則，無法預測"
    ],
    answer: 2,
    explanation: "不同鍬形蟲物種的發育時間差異很大，取決於物種、溫度和飼養條件。"
  },

  {
    id: "q148",
    type: "image",
    category: "鍬形蟲",
    difficulty: 2,
    question: "🪲 觀察這隻鍬形蟲的大顎形狀，可以判斷牠最可能是什麼種類？",
    options: [
      "無法從大顎判斷種類",
      "扁平的大顎表示可能是台灣扁鍬",
      "彎曲的大顎表示一定是鬼艷鍬",
      "大顎形狀與種類無關"
    ],
    answer: 1,
    explanation: "不同鍬形蟲物種的大顎形狀差異明顯，扁平大顎確實是台灣扁鍬的特徵。"
  },

  {
    id: "q149",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 3,
    question: "鍬形蟲的性二型（雌雄特徵差異）主要表現在大顎和體型上。",
    answer: true,
    explanation: "正確。鍬形蟲的性二型明顯，雄性的大顎發達，整體體型也常比雌性更大。"
  },

  {
    id: "q150",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "發現一隻受傷的鍬形蟲成蟲，最合適的救助方式是什麼？",
    options: [
      "用膠帶固定傷口",
      "置於安靜、濕潤的容器內靜養",
      "立即人工喂食",
      "放回野外讓其自然復原"
    ],
    answer: 1,
    explanation: "受傷的鍬形蟲應置於適當的飼養環境靜養，讓其自然復原，不要強制干預。"
  },

  {
    id: "q151",
    type: "single",
    category: "鍬形蟲",
    difficulty: 1,
    question: "鍬形蟲和獨角仙最主要的區別是什麼？",
    options: [
      "體型大小",
      "大顎的發達程度和科分類",
      "活動時間",
      "食物偏好"
    ],
    answer: 1,
    explanation: "最明顯的區別是大顎的發達程度和科分類。鍬形蟲有發達大顎且屬鍬形蟲科，獨角仙有犄角且屬金龜子科。"
  },

  {
    id: "q152",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "為什麼鍬形蟲成蟲之間會打鬥？",
    options: [
      "為了覓食",
      "為了爭奪配偶和領地",
      "為了自衛",
      "這是遊戲行為"
    ],
    answer: 1,
    explanation: "鍬形蟲成蟲（特別是雄蟲）會為了爭奪配偶和領地而進行打鬥，這是自然行為。"
  },

  {
    id: "q153",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "台灣扁鍬是台灣最常見的鍬形蟲。",
    answer: true,
    explanation: "正確。台灣扁鍬分布廣泛，是台灣最容易見到和飼養的鍬形蟲物種。"
  },

  {
    id: "q154",
    type: "multiple",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲幼蟲的飼養介質應該具備什麼條件？",
    options: [
      "含有發酵木屑或朽木",
      "保持適度濕度",
      "定期更換以防霉菌",
      "添加化學肥料促進生長"
    ],
    answer: [0, 1, 2],
    explanation: "前三項都是重要的飼養條件。添加化學肥料是不必要且可能有害的。"
  },

  {
    id: "q155",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的成蟲壽命通常有多長？",
    options: [
      "1-2週",
      "1-2個月",
      "3-6個月",
      "1年以上"
    ],
    answer: 2,
    explanation: "鍬形蟲成蟲的壽命通常為3-6個月，部分物種可能更長。"
  },

  {
    id: "q156",
    type: "single",
    category: "鍬形蟲",
    difficulty: 3,
    question: "菌瓶對於鍬形蟲飼養的優勢是什麼？",
    options: [
      "更便宜",
      "提供穩定的營養和適宜的飼養環境",
      "不需要日常管理",
      "所有物種都適合"
    ],
    answer: 1,
    explanation: "菌瓶提供穩定的營養、適宜的濕度和溫度環境，是飼養L3幼蟲的優選。"
  },

  {
    id: "q157",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲幼蟲在發育過程中需要完全黑暗的環境。",
    answer: true,
    explanation: "正確。鍬形蟲幼蟲在自然環境中生活在朽木內部的黑暗環境中。"
  },

  {
    id: "q158",
    type: "image",
    category: "鍬形蟲",
    difficulty: 1,
    question: "🪲 這個幼蟲的木屑飼養瓶中出現了白色的菌體，應該怎麼辦？",
    options: [
      "這是正常現象，無需處理",
      "立即更換飼養瓶以防污染",
      "添加殺菌劑",
      "將幼蟲移出容器"
    ],
    answer: 1,
    explanation: "飼養瓶中出現過量的白色菌體表示可能開始腐敗，應該及時更換以防幼蟲受害。"
  },

  {
    id: "q159",
    type: "single",
    category: "鍬形蟲",
    difficulty: 2,
    question: "鍬形蟲的幼蟲何時停止進食？",
    options: [
      "寒冷時停止",
      "準備化蛹時停止",
      "每週規律停止進食",
      "從不停止進食"
    ],
    answer: 1,
    explanation: "鍬形蟲幼蟲準備化蛹時會停止進食，這是正常的生理現象。"
  },

  {
    id: "q160",
    type: "truefalse",
    category: "鍬形蟲",
    difficulty: 1,
    question: "不同鍬形蟲物種可以放在一起飼養。",
    answer: false,
    explanation: "這是錯誤的。不同物種的鍬形蟲幼蟲應分開飼養，防止互相殘殺和混種。"
  },

  // ===== q161-q200: 金龜子 Additional Questions (40 questions) =====

  {
    id: "q161",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "台灣常見的花金龜最主要的特徵是什麼？",
    options: [
      "巨大的體型",
      "發達的犄角",
      "鮮豔的金屬光澤",
      "長鬚毛"
    ],
    answer: 2,
    explanation: "花金龜最主要的特徵是身體具有鮮豔的金屬光澤，顏色多彩。"
  },

  {
    id: "q162",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子的科名是什麼？",
    options: [
      "鍬形蟲科",
      "金龜子科",
      "天牛科",
      "椿象科"
    ],
    answer: 1,
    explanation: "金龜子屬於金龜子科（Scarabaeidae），這是一個龐大的昆蟲科。"
  },

  {
    id: "q163",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "糞金龜主要以什麼為食？",
    options: [
      "花朵",
      "動物糞便",
      "朽木",
      "樹液"
    ],
    answer: 1,
    explanation: "糞金龜的幼蟲和成蟲都以動物糞便為食，具有重要的生態作用。"
  },

  {
    id: "q164",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "長臂金龜有什麼獨特的特徵？",
    options: [
      "具有很長的觸角",
      "身體具有複雜的條紋",
      "前腳特別發達而修長",
      "尾部具有尖刺"
    ],
    answer: 2,
    explanation: "長臂金龜的前腳特別發達和修長，這是其最主要的特徵，因此得名『長臂』。"
  },

  {
    id: "q165",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "花金龜通常在什麼上面活動？",
    options: [
      "朽木上",
      "糞便上",
      "花朵和果實上",
      "土壤中"
    ],
    answer: 2,
    explanation: "花金龜主要在花朵和果實上活動，以花粉、花蜜和果實為食。"
  },

  {
    id: "q166",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "獨角仙屬於金龜子科。",
    answer: true,
    explanation: "正確。獨角仙屬於金龜子科兜蟲亞科（Dynastinae），是金龜子科的一部分。"
  },

  {
    id: "q167",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "所有金龜子的幼蟲都以朽木為食。",
    answer: false,
    explanation: "這是錯誤的。金龜子的食性多樣化，獨角仙幼蟲吃腐植土，花金龜幼蟲吃朽木，糞金龜吃糞便。"
  },

  {
    id: "q168",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子的幼蟲通稱為什麼？",
    options: [
      "蛴螬",
      "雞母蟲",
      "蛹",
      "蟲卵"
    ],
    answer: 0,
    explanation: "金龜子的幼蟲通稱為『蛴螬』。獨角仙幼蟲特別稱為『雞母蟲』。"
  },

  {
    id: "q169",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "糞金龜的習性中，最特別的行為是什麼？",
    options: [
      "飛行能力很強",
      "將糞便滾成球並埋入土壤（Tunneler或Roller類型）",
      "夜間發光",
      "聚集成大群"
    ],
    answer: 1,
    explanation: "糞金龜最著名的行為是將糞便滾成球並埋入土壤，為幼蟲儲備食物。"
  },

  {
    id: "q170",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "在農業生產中，金龜子主要被視為什麼？",
    options: [
      "有益的昆蟲",
      "中立的昆蟲",
      "害蟲",
      "完全無害"
    ],
    answer: 2,
    explanation: "花金龜等植食性金龜子會取食花朵和果實，被視為農業害蟲。"
  },

  {
    id: "q171",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "花金龜對花粉傳播有幫助。",
    answer: true,
    explanation: "正確。花金龜在花朵上活動時會幫助花粉傳播，雖然也會取食，但有一定的授粉作用。"
  },

  {
    id: "q172",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子科中，哪種甲蟲體型最大？",
    options: [
      "花金龜",
      "獨角仙",
      "長臂金龜",
      "糞金龜"
    ],
    answer: 2,
    explanation: "長臂金龜是台灣最大的甲蟲，屬於金龜子科。"
  },

  {
    id: "q173",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子科甲蟲的呼吸孔（氣門）位於身體的哪部分？",
    options: [
      "頭部",
      "腹部",
      "翅膀",
      "腿部"
    ],
    answer: 1,
    explanation: "金龜子科甲蟲的氣門位於腹部，是呼吸系統的重要組成部分。"
  },

  {
    id: "q174",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子都具有金屬光澤。",
    answer: false,
    explanation: "這是錯誤的。雖然很多金龜子（如花金龜）具有金屬光澤，但也有許多種類沒有明顯的光澤。"
  },

  {
    id: "q175",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "金龜子科中，植食性和糞食性物種的分布有什麼特點？",
    options: [
      "完全相同的分布地區",
      "植食性更廣泛分布，糞食性集中在特定區域",
      "兩者都根據食物來源分散分布",
      "無法判斷"
    ],
    answer: 2,
    explanation: "金龜子的分布主要取決於其食物來源和生態環境，植食性、糞食性等不同食性的物種分布各異。"
  },

  {
    id: "q176",
    type: "image",
    category: "金龜子",
    difficulty: 2,
    question: "🪲 觀察這個金龜子身體上的金屬光澤顏色，最可能是什麼物種？",
    options: [
      "獨角仙（無金屬光澤）",
      "花金龜（多彩金屬光澤）",
      "糞金龜（無光澤）",
      "無法判斷"
    ],
    answer: 1,
    explanation: "多彩的金屬光澤是花金龜的標誌特徵，可以用來區別於其他金龜子。"
  },

  {
    id: "q177",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "長臂金龜的前腳特別長有什麼生態意義？",
    options: [
      "用於飛行",
      "用於挖掘和取食",
      "純粹的裝飾特徵",
      "無特殊功能"
    ],
    answer: 1,
    explanation: "長臂金龜的長前腳用於挖掘、攀爬和取食，是適應其生態習性的特化特徵。"
  },

  {
    id: "q178",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子的翅膀（鞘翅）通常分為兩層。",
    answer: true,
    explanation: "正確。甲蟲的特點就是前翅特化為鞘翅，分為左右兩層，保護下面的後翅。"
  },

  {
    id: "q179",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子在台灣的活動季節最主要集中在哪個月份？",
    options: [
      "冬季（12-2月）",
      "春季（3-5月）",
      "夏季（6-8月）",
      "秋季（9-11月）"
    ],
    answer: 2,
    explanation: "台灣金龜子的活動季節主要集中在夏季，這時溫度適宜、食物充足。"
  },

  {
    id: "q180",
    type: "multiple",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子科甲蟲包括以下哪些物種？",
    options: [
      "獨角仙",
      "花金龜",
      "長臂金龜",
      "鍬形蟲"
    ],
    answer: [0, 1, 2],
    explanation: "獨角仙、花金龜和長臂金龜都屬於金龜子科。鍬形蟲屬於鍬形蟲科，不在金龜子科內。"
  },

  {
    id: "q181",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "花金龜的幼蟲生活習性與獨角仙幼蟲相比有什麼不同？",
    options: [
      "完全相同",
      "花金龜幼蟲吃朽木，獨角仙幼蟲吃腐植土",
      "都吃樹液",
      "無法比較"
    ],
    answer: 1,
    explanation: "雖然都屬於金龜子科，但花金龜幼蟲主要以朽木為食，獨角仙幼蟲以腐植土為食。"
  },

  {
    id: "q182",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子的卵通常產在土壤中。",
    answer: true,
    explanation: "正確。大多數金龜子的卵都產在土壤、朽木或適宜的產卵環境中。"
  },

  {
    id: "q183",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "從金龜子幼蟲的肛門開口方向可以區別什麼？",
    options: [
      "幼蟲的大小",
      "幼蟲的齡期",
      "不同物種（如獨角仙的肛門開口為橫向）",
      "幼蟲的性別"
    ],
    answer: 2,
    explanation: "肛門開口的方向是區別不同金龜子科物種幼蟲的重要特徵。"
  },

  {
    id: "q184",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "在自然生態中，糞金龜的作用最主要是什麼？",
    options: [
      "傳播種子",
      "清理和分解動物糞便，循環營養",
      "捕食害蟲",
      "傳播花粉"
    ],
    answer: 1,
    explanation: "糞金龜最重要的生態作用是清理和分解動物糞便，幫助營養循環，對生態環境非常重要。"
  },

  {
    id: "q185",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "花金龜和獨角仙都是夜間活動的昆蟲。",
    answer: false,
    explanation: "這是錯誤的。獨角仙是夜間活動，但花金龜主要在白天活動，在花朵上進食。"
  },

  {
    id: "q186",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "長臂金龜在台灣屬於什麼保護等級？",
    options: [
      "完全無保護",
      "國家保護級別（台灣保育物種）",
      "完全禁止捕捉",
      "無特殊保護"
    ],
    answer: 1,
    explanation: "台灣長臂金龜是台灣的保育物種，受到國家保護，數量稀少。"
  },

  {
    id: "q187",
    type: "image",
    category: "金龜子",
    difficulty: 1,
    question: "🪲 這個金龜子在花朵上活動，最可能是什麼物種？",
    options: [
      "獨角仙",
      "糞金龜",
      "花金龜",
      "鍬形蟲"
    ],
    answer: 2,
    explanation: "在花朵上活動和取食是花金龜的典型行為，其他物種不常出現在花朵上。"
  },

  {
    id: "q188",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子的飛行能力相比鍬形蟲和獨角仙如何？",
    options: [
      "完全無法飛行",
      "飛行能力相似",
      "某些金龜子飛行能力較強，如花金龜",
      "無法比較"
    ],
    answer: 2,
    explanation: "金龜子中，花金龜等物種的飛行能力較強，能够在花朵間活動。獨角仙也能飛行，但鍬形蟲飛行能力較弱。"
  },

  {
    id: "q189",
    type: "truefalse",
    category: "金龜子",
    difficulty: 3,
    question: "金龜子的幼蟲發育時間與成蟲的大顎大小有關。",
    answer: true,
    explanation: "正確。幼蟲期的營養狀況影響成蟲的體型和特徵發育，這對獨角仙等物種尤其明顯。"
  },

  {
    id: "q190",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "觀察到一隻花金龜在果樹上，說明了什麼？",
    options: [
      "這棵樹很健康",
      "這棵樹可能被害蟲危害",
      "花金龜在進食果實和花朵，可能造成農業損失",
      "這是正常的生態現象"
    ],
    answer: 2,
    explanation: "花金龜在果樹上進食果實和花朵，雖然是正常行為，但大量出現會造成農業損失。"
  },

  {
    id: "q191",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子科中，哪種甲蟲具有發達的犄角？",
    options: [
      "花金龜",
      "長臂金龜",
      "獨角仙",
      "糞金龜"
    ],
    answer: 2,
    explanation: "在金龜子科中，獨角仙是具有發達犄角（分叉）的物種。"
  },

  {
    id: "q192",
    type: "matching",
    category: "金龜子",
    difficulty: 2,
    question: "將不同金龜子物種與其主要食物和習性配對：",
    pairs: [
      { left: "獨角仙", right: "成蟲吃樹液，幼蟲吃腐植土" },
      { left: "花金龜", right: "成蟲和幼蟲都吃花朵和果實" },
      { left: "長臂金龜", right: "大型甲蟲，挖掘樹根" },
      { left: "糞金龜", right: "成蟲和幼蟲都以動物糞便為食" }
    ],
    answer: [0, 1, 2, 3],
    explanation: "這些是不同金龜子物種的主要特徵和食性，幫助區別於其他物種。"
  },

  {
    id: "q193",
    type: "truefalse",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子的幼蟲和成蟲的食物偏好通常相同。",
    answer: false,
    explanation: "這是錯誤的。金龜子的幼蟲和成蟲食物常常不同，如獨角仙幼蟲吃腐植土，成蟲吃樹液。"
  },

  {
    id: "q194",
    type: "single",
    category: "金龜子",
    difficulty: 3,
    question: "在台灣，長臂金龜的數量減少主要原因是什麼？",
    options: [
      "氣候變化",
      "棲息地破壞和過度採集",
      "天敵增加",
      "疾病"
    ],
    answer: 1,
    explanation: "長臂金龜數量減少主要由於棲息地（如老樹和森林）被破壞，以及過度採集為主要原因。"
  },

  {
    id: "q195",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "教導小朋友認識金龜子時，應該強調什麼重點？",
    options: [
      "金龜子都有毒性",
      "金龜子的生態重要性和保護意識",
      "金龜子都是害蟲",
      "金龜子可以隨意採集"
    ],
    answer: 1,
    explanation: "教學重點應該是提升小朋友對金龜子的認識和保護意識，特別是對保育物種如長臂金龜。"
  },

  {
    id: "q196",
    type: "truefalse",
    category: "金龜子",
    difficulty: 1,
    question: "金龜子屬於昆蟲中的甲蟲目。",
    answer: true,
    explanation: "正確。金龜子科屬於甲蟲目（鞘翅目），是昆蟲的重要一類。"
  },

  {
    id: "q197",
    type: "single",
    category: "金龜子",
    difficulty: 2,
    question: "金龜子的體內有什麼器官幫助消化和儲存食物？",
    options: [
      "肝臟",
      "腮",
      "嗉囊和腸道",
      "胰臟"
    ],
    answer: 2,
    explanation: "金龜子等昆蟲有嗉囊暫存食物，腸道進行消化，這是昆蟲的典型消化系統。"
  },

  {
    id: "q198",
    type: "image",
    category: "金龜子",
    difficulty: 2,
    question: "🪲 觀察這個金龜子的身體結構，最主要包括什麼部分？",
    options: [
      "頭、胸、腹",
      "頭、脖子、身體",
      "只有身體",
      "無法判斷"
    ],
    answer: 0,
    explanation: "昆蟲的身體結構包括頭部（含口器和觸角）、胸部（含腿和翅膀）和腹部。"
  },

  {
    id: "q199",
    type: "single",
    category: "金龜子",
    difficulty: 1,
    question: "在野外最容易觀察到花金龜的環境是什麼？",
    options: [
      "朽木堆",
      "糞便周圍",
      "開花的花卉和果樹",
      "地下土壤"
    ],
    answer: 2,
    explanation: "花金龜最容易在開花的花卉和果樹上找到，因為牠們在花朵和果實上進食。"
  },

  {
    id: "q200",
    type: "truefalse",
    category: "金龜子",
    difficulty: 3,
    question: "台灣的金龜子科物種多樣性很高，包括超過100種不同的物種。",
    answer: true,
    explanation: "正確。台灣是金龜子的多樣化地區，金龜子科物種超過100種，其中包括許多特有種。"
  }
];
