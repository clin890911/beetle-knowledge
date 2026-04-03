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
  }
];
