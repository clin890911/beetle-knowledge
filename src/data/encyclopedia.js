export default {
  general: {
    whatAreBeetles: {
      title: '什麼是甲蟲?',
      content: '甲蟲是鞘翅目動物，是世界上數量最多的昆蟲。牠們的前翅已經硬化成保護翅膀，稱為「鞘翅」。台灣的甲蟲種類超過20000種，佔了全球甲蟲種數的十分之一！',
      keyPoints: [
        '全球所有動物物種中，每4種就有1種是甲蟲',
        '甲蟲存在於地球上已超過2億年',
        '台灣是甲蟲的天堂，擁有豐富多樣的甲蟲種類'
      ]
    },

    beetleAnatomy: {
      title: '甲蟲的身體結構',
      description: '甲蟲的身體分為三個主要部分',
      parts: {
        head: {
          name: '頭部',
          features: ['複眼（很難看清楚）', '觸角（用來感受氣味和環境）', '口器（咀嚼式口器）']
        },
        thorax: {
          name: '胸部',
          features: ['6條足（分為前腿、中腿、後腿）', '前翅已硬化成鞘翅', '後翅隱藏在鞘翅下，用來飛行']
        },
        abdomen: {
          name: '腹部',
          features: ['身體最大的部分', '內部有生殖器官和消化器官', '通常由硬化的外骨骼保護']
        }
      },
      specialFeatures: {
        elytra: {
          name: '鞘翅',
          description: '前翅硬化後形成的保護蓋，保護後翅和腹部。鞘翅中間有一條縫線。'
        },
        antennae: {
          name: '觸角',
          description: '用於感受氣味、風、濕度等環境訊息。不同甲蟲的觸角形狀差異很大。'
        },
        legs: {
          name: '足',
          description: '6條腿讓甲蟲可以快速行走和攀爬。有些甲蟲的足上有特殊結構用來挖土。'
        }
      }
    },

    completeMetamorphosis: {
      title: '完全變態',
      description: '甲蟲經歷四個完全不同的生活階段，這個過程叫做「完全變態」',
      stages: [
        {
          name: '卵',
          description: '非常小，通常埋在土中或動物糞便中',
          duration: '數天至數週'
        },
        {
          name: '幼蟲（幼蟲期）',
          description: '看起來和成蟲完全不同。獨角仙和鍬形蟲的幼蟲都是白色的C形蟲。金龜子的幼蟲則取決於種類。',
          duration: '數月至數年'
        },
        {
          name: '蛹',
          description: '在土中的蛹室內。幼蟲的身體在蛹內逐漸改變成成蟲的形狀。',
          duration: '數週至數月'
        },
        {
          name: '成蟲',
          description: '可以飛行、進食、交配和產卵。',
          duration: '數月至數年'
        }
      ],
      why: '這種變態方式讓幼蟲和成蟲可以吃不同的食物，減少競爭，這是甲蟲成功的重要原因。'
    },

    observationEthics: {
      title: '觀察倫理與責任',
      intro: '觀察甲蟲是很有趣的活動，但我們必須尊重牠們和牠們的生活環境。',
      guidelines: [
        {
          title: '輕輕對待',
          detail: '如果要捉甲蟲，使用紙杯或網子，輕輕放在手上觀察。不要擠壓、戳或粗暴對待。'
        },
        {
          title: '及時放回',
          detail: '觀察15-30分鐘後就要放回。甲蟲需要找食物、飲水和交配。'
        },
        {
          title: '不破壞棲地',
          detail: '不要翻動大石頭或樹皮後忘記蓋回。不要挖掘樹根或腐木。'
        },
        {
          title: '遵守法規',
          detail: '台灣的一些珍稀甲蟲受到保護。購買或交易受保護物種是違法的。'
        },
        {
          title: '夜間觀察安全',
          detail: '夜間觀察甲蟲需要成年人陪同，帶手電筒，穿長褲和長袖，小心山地步道。'
        },
        {
          title: '不使用致命誘餌',
          detail: '使用陷阱誘器時，應該能讓甲蟲活著逃脫。'
        }
      ]
    },

    glossary: [
      { term: '鞘翅', definition: '甲蟲前翅已硬化成的保護蓋' },
      { term: '複眼', definition: '由許多小眼睛組成的眼睛，可以看到運動但看不清細節' },
      { term: '觸角', definition: '頭部用來感受氣味和其他環境訊息的器官' },
      { term: '幼蟲', definition: '甲蟲的第二個生活階段，看起來和成蟲完全不同' },
      { term: '蛹', definition: '甲蟲的第三個生活階段，身體在內部改變形狀' },
      { term: '外骨骼', definition: '昆蟲身體外面的硬殼，替代了內骨骼' },
      { term: '變態', definition: '昆蟲生活階段的劇烈改變' },
      { term: '棲地', definition: '生物自然生活的環境或地點' },
      { term: '性二型', definition: '同種動物中，雌性和雄性外表明顯不同' },
      { term: '趨光性', definition: '被光吸引的習性' },
      { term: '領地性', definition: '保護自己的活動範圍，不讓其他同類進入' },
      { term: '腐生', definition: '以死亡生物的殘骸為食' },
      { term: '蛹室', definition: '幼蟲在土中為蛹製造的保護性房間' },
      { term: '孵化', definition: '卵變成幼蟲的過程' },
      { term: '脫皮', definition: '幼蟲為了長大而脫去外骨骼的過程' }
    ]
  },

  // 獨角仙 - Rhinoceros Beetles
  rhinocerosBeetles: {
    overview: '獨角仙是台灣最著名和最受歡迎的甲蟲之一。雄蟲頭部有一根長長的角，用來挖掘和打鬥。牠們只在夏季出現，生活期很短但非常活躍。',

    taxonomy: {
      family: '兜蟲科 (Scarabaeidae)',
      subfamily: '兜蟲亞科 (Dynastinae)',
      genus: '獨角仙屬',
      scientificName: '台灣亞種為 Allomyrina dichotoma taiwana'
    },

    species: [
      {
        emoji: '🪲',
        name: '獨角仙',
        scientificName: 'Allomyrina dichotoma taiwana',
        description: '台灣最常見的獨角仙亞種。雄蟲擁有強大的角用來爭奪雌蟲和領地。',
        size: '雄蟲50-78mm，雌蟲40-50mm',
        habitat: '闊葉林和混生林，海拔300-2000m',
        rarity: '普遍但局部',
        sexualDimorphism: '雄蟲有大角和前胸背板突起；雌蟲沒有角，體型較小'
      }
    ],

    appearance: {
      bodyShape: '寬闊而厚實的身體，呈卵形。頭部和前胸背板在雄蟲上特別發達。',
      color: '黑色到棕黑色，有光澤。前翅上常有金屬綠色或銅色光澤。',
      distinctiveFeatures: '雄蟲的大角是最引人注目的特徵。雄蟲的前胸背板有突起和凹陷，雌蟲則光滑。',
      sexualDimorphism: '雄蟲和雌蟲體型差異極大。雄蟲有角和額頭修飾；雌蟲沒有角。',
      legs: '前腿強大，中後腿較細。足上有爪和吸盤幫助攀爬。',
      specialAdaptations: '頭部的角實際上是變形的頭頂骨，內部是中空的以減輕重量。'
    },

    lifecycle: {
      egg: {
        stage: '卵期',
        description: '雌蟲在腐爛的木屑或堆肥中產卵。卵白色，大約5mm。',
        duration: '7-14天'
      },
      larva: [
        {
          stage: '一齡幼蟲 (L1)',
          description: '身體乳白色，C形。長著強大的口器用來啃咬木屑和堆肥。',
          duration: '2-3週',
          appearance: '長約10-15mm，頭部褐色'
        },
        {
          stage: '二齡幼蟲 (L2)',
          description: '繼續進食木屑和堆肥，快速成長。',
          duration: '1-2個月',
          appearance: '長約30mm，身體更粗壯'
        },
        {
          stage: '三齡幼蟲 (L3)',
          description: '最大的幼蟲階段。貪心地進食，準備進入蛹期。在此期間會換成更大的容器。',
          duration: '2-5個月',
          appearance: '長約70-100mm，體重可達20克，非常肥大'
        }
      ],
      pupa: {
        stage: '蛹期',
        description: '幼蟲停止進食，在土中製造蛹室。身體從白色變成淡棕色，最後變成棕色。',
        duration: '3-4週',
        appearance: '可以清晰看到成蟲的外形，但附肢仍然柔軟'
      },
      adult: {
        stage: '成蟲期',
        description: '出土後5-7天內翅膀變硬。開始尋找配偶和食物。',
        duration: '3-6個月',
        behavior: '主要在夜間活動，白天躲在地上或樹洞中。'
      }
    },

    habitat: {
      distribution: '整個台灣，但主要集中在中部山區',
      altitude: '海拔300-2000m，最常見於600-1500m',
      forestType: '闊葉林、混生林、次生林邊緣',
      specificLocations: [
        '南投中部山區（武陵、梨山、杉林溪）',
        '台中和平區',
        '台北烏來、平溪',
        '宜蘭聖山、棲蘭',
        '新竹五峰、尖石'
      ],
      seasonalPresence: '6月中到8月底，高峰在7月中到7月底',
      preferredConditions: '較涼爽的溫度（22-28°C），濕度高的地區'
    },

    diet: {
      larvae: '腐爛的木屑、樹皮、堆肥、發酵木質纖維。牠們喜歡有黴菌的柔軟材料。',
      adults: '樹汁（樟樹、楠樹、榕樹等），特別是深夜滲出的樹液。有時也吃昆蟲屍體的液體。'
    },

    behavior: {
      nocturnal: '嚴格的夜行性。白天從不活動，躲在地上、倒木下或樹洞中。',
      phototaxis: '強烈的趨光性。路邊的路燈會吸引大量獨角仙。',
      territorial: '雄蟲極具領地性。會用角推、舉起或翻倒敵手。',
      mating: '雄蟲為了配偶激烈競爭。勝者會在樹液處守衛多隻雌蟲。',
      feeding: '在樹液處進食可持續2-4小時。同一地點常有多隻甲蟲同時出現。',
      flight: '體型笨重但能飛行，飛行聲音很大。'
    },

    predators: [
      { animal: '蜘蛛', stage: '幼蟲' },
      { animal: '步甲蟲', stage: '幼蟲、成蟲' },
      { animal: '寄生蒼蠅', stage: '幼蟲' },
      { animal: '寄生蜂', stage: '成蟲卵' },
      { animal: '鼠類', stage: '幼蟲' },
      { animal: '鳥類', stage: '成蟲（但少見）' },
      { animal: '鼬', stage: '成蟲' }
    ],

    observation: {
      bestSeason: '7月中到8月上旬',
      bestTime: '晚上11pm到凌晨3am',
      locations: '樟樹、楠樹、榕樹等滲出樹液的地點',
      howToFind: '沿著山路走，尋找樹液滲出的痕跡。用手電筒照射，可能會看到甲蟲爬行。',
      equipment: [
        '手電筒和備用電池（紅光頭最佳，不會驚嚇甲蟲）',
        '紙杯或透明盒子用於短期觀察',
        '相機/手機（拍照但不要用閃光燈）',
        '筆記本（記錄觀察）',
        '長褲、長袖、登山靴（防止蚊蟲）',
        '防蚊液和防曬'
      ],
      tips: [
        '不要挑選或傷害甲蟲。輕輕放在手上看30秒就放回。',
        '同一地點可能有5-10隻甲蟲，要有耐心。',
        '雨後第二天的夜晚通常甲蟲最活躍。',
        '山路崎嶇，小心腳步，不要單獨行動。',
        '如果看不到甲蟲，就在樹液處等候，牠們會飛來。'
      ]
    },

    breeding: {
      substrate: '發酵木屑混合：70%木屑（樟木、榕木等）+ 30%土壤，濕度60-70%',
      temperature: '20-26°C，不要超過28°C',
      humidity: '60-75%（木屑應該像擰乾的毛巾一樣）',
      container: '10升塑膠盒，深度至少25cm（幼蟲要深深埋入）',
      food: '幼蟲喜歡發酵很久（3-6個月）的木屑',
      mating: '成蟲出土後等待5-7天翅膀變硬才配對',
      eggLaying: '雌蟲會自己找地方產卵，不需要特別處理',
      lifespan: '成蟲飼養3-6個月，每隻雌蟲可產20-50卵',
      commonProblems: [
        '樹屑長黴菌：減少濕度或更換木屑',
        '幼蟲病死：增加通風，不要太濕',
        '成蟲出土後很快死亡：溫度太高'
      ]
    },

    funFacts: [
      '獨角仙的角不是一根骨頭，而是由幾個部分組成的特殊構造。',
      '大的獨角仙角可以長到身體的三分之一。',
      '雄蟲會用角把敵手舉起來，然後翻倒牠們，就像相撲手一樣！',
      '獨角仙的幼蟲可以活2年，整個生活週期是3年。',
      '一隻成蟲獨角仙可以在一個夜晚進食30克樹液——相當於牠體重的一半！',
      '獨角仙會發出叫聲——當牠們打鬥時會摩擦身體發出聲音。',
      '台灣傳統稱獨角仙為「獨角仙」或「甲蟲王」，小孩很喜歡在暑假捕捉牠們。',
      '獨角仙的幼蟲非常喜歡吃木屑，一隻三齡幼蟲一天可以吃掉50克！'
    ],

    conservation: {
      status: '台灣未列為瀕危物種，但局部地區數量下降',
      threats: [
        '棲地破壞：闊葉林砍伐和開發',
        '過度捕集：許多人為了當寵物而大量捕捉',
        '光污染：路燈吸引甲蟲，增加被踩踏或捕捉的風險',
        '農藥使用：殺死樹上的甲蟲和牠們的食物'
      ],
      whatYouCanDo: [
        '不要過度捕捉。每次只觀察不帶走。',
        '如果飼養，不要在野生種群中釋放不同來源的甲蟲（可能傳播疾病）。',
        '支持自然林地保護。',
        '減少夜間戶外照明。',
        '不要使用殺蟲劑。'
      ]
    },

    comparison: {
      title: '如何區分獨角仙和其他甲蟲',
      comparisons: [
        {
          beetle: '鍬形蟲',
          differences: '鍬形蟲有兩個向下的大顎，而不是向上的角。獨角仙體型更大更圓。'
        },
        {
          beetle: '金龜子',
          differences: '金龜子有金屬色光澤且通常較小。獨角仙的身體是純黑色或棕黑色。'
        },
        {
          beetle: '其他兜蟲',
          differences: '台灣只有獨角仙最常見。其他兜蟲種類罕見且體型不同。'
        }
      ]
    }
  },

  // 鍬形蟲 - Stag Beetles
  stagBeetles: {
    overview: '鍬形蟲因其巨大的牙齒狀口部而得名。雄蟲的大顎看起來像鹿的角或鍬子，牠們用這些來挖掘和打鬥。鍬形蟲通常比獨角仙更兇猛。',

    taxonomy: {
      family: '鍬形蟲科 (Lucanidae)',
      subfamily: '鍬形蟲亞科 (Lucaninae)',
      genus: '多個屬，最常見的是锯鍬形蟲屬和角鍬形蟲屬',
      scientificName: '最常見種為 Prosopocoilus astacoides okumai（台灣鬼艷鍬形蟲）'
    },

    species: [
      {
        emoji: '⚔️',
        name: '台灣鬼艷鍬形蟲',
        scientificName: 'Prosopocoilus astacoides okumai',
        description: '台灣最大的鍬形蟲。雄蟲的大顎非常發達，看起來很兇悍。',
        size: '雄蟲35-80mm，雌蟲30-45mm',
        habitat: '低山闊葉林，海拔300-1200m',
        rarity: '普遍但易波動'
      },
      {
        emoji: '⚔️',
        name: '叉角鍬形蟲',
        scientificName: 'Dorcus titanus sika',
        description: '大型鍬形蟲，雄蟲的顎有分叉。牠們會整個夏季出現。',
        size: '雄蟲45-75mm，雌蟲35-45mm',
        habitat: '各種林地，海拔100-2000m',
        rarity: '普遍'
      },
      {
        emoji: '⚔️',
        name: '黑艷鍬形蟲',
        scientificName: 'Dorcus grandis sika',
        description: '台灣的黑色鍬形蟲，體型中等。雄蟲的顎分為上下兩部分。',
        size: '雄蟲35-60mm，雌蟲30-45mm',
        habitat: '闊葉林和次生林，海拔200-1500m',
        rarity: '普遍'
      },
      {
        emoji: '⚔️',
        name: '細身赤鍬形蟲',
        scientificName: 'Cyclommatus metallifer amamianus',
        description: '在台灣高山出現。顎部比較細長。',
        size: '雄蟲35-65mm，雌蟲28-40mm',
        habitat: '高山闊葉林，海拔1500-2500m',
        rarity: '局部，高山地區'
      }
    ],

    appearance: {
      bodyShape: '身體狹長而堅實。頭部和胸部相對較小，腹部較長。',
      color: '大多數鍬形蟲是黑色或棕黑色。有些種類是紅褐色或金屬綠色。',
      distinctiveFeatures: '巨大的牙齒狀大顎是最明顯的特徵。這些大顎通常佔頭部長度的一半。',
      sexualDimorphism: '雄蟲的顎發育完全，有分支；雌蟲的顎小得多，沒有分支。雄蟲體型也更大。',
      legs: '腿比身體相對較長，幫助爬行。足上有爪和吸盤。',
      specialAdaptations: '大顎內部是中空的，由蜂窩狀結構支撐，類似於飛機機翼的結構。'
    },

    lifecycle: {
      egg: {
        stage: '卵期',
        description: '雌蟲在朽木或腐爛的樹根中產卵。卵白色，長約4mm。',
        duration: '1-3週'
      },
      larva: [
        {
          stage: '一齡幼蟲 (L1)',
          description: '白色C形幼蟲。用強大的口器啃咬樹木。',
          duration: '2-3週',
          appearance: '長約8-12mm，褐色頭部'
        },
        {
          stage: '二齡幼蟲 (L2)',
          description: '繼續在朽木中移動和進食。',
          duration: '1-2個月',
          appearance: '長約20-30mm'
        },
        {
          stage: '三齡幼蟲 (L3)',
          description: '最大的幼蟲階段。在朽木中挖出大隧道。',
          duration: '6-18個月（取決於種類和溫度）',
          appearance: '長約40-60mm，非常粗壯'
        }
      ],
      pupa: {
        stage: '蛹期',
        description: '幼蟲停止進食，在木中製造蛹室。身體逐漸硬化變色。',
        duration: '4-8週',
        appearance: '可清楚看到成蟲的外形，但附肢柔軟'
      },
      adult: {
        stage: '成蟲期',
        description: '出現在初夏到秋季。翅膀變硬需要7-10天。',
        duration: '4-12個月（有些甚至活2年！）',
        behavior: '主要夜行性，但有些種類也在白天活動。'
      }
    },

    habitat: {
      distribution: '全台灣，從平地到高山',
      altitude: '海拔0-2500m（不同種類不同）',
      forestType: '各種林地類型，特別喜歡有朽木的地方',
      specificLocations: [
        '南投山區（合歡山、奮起湖附近的朽木）',
        '台中雪山、大安溪流域',
        '苗栗象山地區',
        '新竹尖石、五峰',
        '台北烏來、平溪',
        '宜蘭聖山地區',
        '花蓮大農大富平地森林園區',
        '平地的老公園和廟宇'
      ],
      seasonalPresence: '4月到10月，高峰5月到7月',
      preferredConditions: '有大量朽木和落葉的地方，濕度要求中等'
    },

    diet: {
      larvae: '朽木（特別是樟樹、楠樹、榕樹、櫸樹的木頭）。幼蟲需要至少2-3年才能長大，不斷啃咬同一塊木頭。',
      adults: '樹液、腐爛的水果和昆蟲液體。有時也吃樹皮。'
    },

    behavior: {
      nocturnal: '主要夜行性，但有些種類（如叉角鍬形蟲）也會在日間活動。',
      phototaxis: '中等的趨光性，不如獨角仙強烈。',
      territorial: '雄蟲強烈領地性。會用大顎推、舉起和切割敵手。打鬥可以持續數小時。',
      mating: '雄蟲為配偶激烈競爭。勝者會和多隻雌蟲交配。',
      feeding: '在樹液或朽木進食，時間較短（通常30-60分鐘）。',
      sound: '會發出摩擦聲作為警告。當被拿起時會發出尖叫聲。'
    },

    predators: [
      { animal: '寄生蜂', stage: '成蟲卵' },
      { animal: '肉食甲蟲', stage: '幼蟲' },
      { animal: '鳥類', stage: '成蟲' },
      { animal: '蜥蜴', stage: '成蟲' },
      { animal: '鼠類', stage: '幼蟲' }
    ],

    observation: {
      bestSeason: '5月到7月',
      bestTime: '傍晚6pm到凌晨2am',
      locations: '朽木堆、倒樹、廟宇屋簷、樹液處',
      howToFind: '尋找樹液滲漏或朽木。在朽木附近用手電筒照射地面，鍬形蟲可能在爬行或飛行。',
      equipment: [
        '手電筒（紅光最好）',
        '紙杯或網子',
        '相機',
        '登山靴和長褲',
        '防蚊液'
      ],
      tips: [
        '鍬形蟲會飛，有時會掉在地上。檢查步道兩側。',
        '在廟宇或老建築物周圍找尋，特別是有朽木的地方。',
        '比獨角仙容易觀察，因為牠們出現期間較長。',
        '白天檢查朽木，看是否有孔洞和蟲糞。',
        '小心牠們的大顎——牠們會用力夾。'
      ]
    },

    breeding: {
      substrate: '發酵朽木：樟樹或榕樹的朽木（最好是已發酵1年以上）',
      temperature: '18-24°C（比獨角仙更喜歡溫度低）',
      humidity: '60-70%',
      container: '15升塑膠盒，深度25-30cm（幼蟲會一直往下挖）',
      food: '高質量的朽木很重要。可使用商業甲蟲木屑混合。',
      mating: '成蟲出土後等待1-2週',
      eggLaying: '雌蟲會在朽木中做出產卵槽',
      lifespan: '成蟲可活4-12個月，取決於種類',
      timeline: '從卵到成蟲可能需要2-4年',
      commonProblems: [
        '幼蟲死亡率高：使用高質量的朽木',
        '黴菌問題：確保通風良好',
        '成蟲根本不出現：檢查幼蟲是否真的完成發育'
      ]
    },

    funFacts: [
      '鍬形蟲的大顎可以有驚人的分支和尖刺——看起來像真正的鍬子！',
      '台灣有超過50種鍬形蟲，但只有4-5種常見。',
      '有些鍬形蟲的幼蟲可以活超過3年——可能是世界上最長的甲蟲幼蟲期。',
      '雄蟲打鬥時會發出尖銳的聲音，像「吱吱吱」——這是牠們警告敵手的方式。',
      '鍬形蟲的大顎雖然看起來很可怕，但實際上非常脆弱。如果太用力就會斷裂！',
      '一些罕見的高山鍬形蟲種類只在特定的高度出現，是收藏家追捧的對象。',
      '鍬形蟲的幼蟲可能和人類同時生活在同一棵樹上數年，但我們永遠看不到牠們！',
      '雌蟲鍬形蟲雖然沒有大顎，但仍然非常強壯，可以咬傷手指。'
    ],

    conservation: {
      status: '台灣部分種類受保護，但大多數種類仍普遍',
      threats: [
        '棲地破壞：朽木移除和林地開發',
        '樹木砍伐：移除朽木和老樹',
        '採集壓力：許多珍稀種類被過度採集',
        '林地管理不當：移除朽木破壞幼蟲棲地'
      ],
      whatYouCanDo: [
        '不要過度捕捉。尤其不要採集罕見高山種類。',
        '支持留存朽木的森林管理。',
        '在自己的花園或社區保留朽木堆。',
        '不要購買野生捕捉的鍬形蟲。'
      ]
    },

    comparison: {
      title: '如何區分鍬形蟲和其他甲蟲',
      comparisons: [
        {
          beetle: '獨角仙',
          differences: '獨角仙有一個向上的角。鍬形蟲有兩個向下的牙齒狀大顎。獨角仙體型更圓，鍬形蟲更狹長。'
        },
        {
          beetle: '金龜子',
          differences: '金龜子沒有大顎，有金屬光澤。鍬形蟲有明顯的大顎，通常是啞光黑色。'
        },
        {
          beetle: '其他長角甲蟲',
          differences: '天牛和其他長角甲蟲的觸角很長。鍬形蟲的觸角較短，明顯特徵是大顎。'
        }
      ]
    }
  },

  // 金龜子 - Scarab Beetles
  scarabBeetles: {
    overview: '金龜子是色彩繽紛的甲蟲，許多種類有金屬光澤。牠們白天活動，喜歡在花朵和葉子上進食。台灣的金龜子種類最多，大小也差異很大。',

    taxonomy: {
      family: '金龜子科 (Scarabaeidae)',
      subfamily: '金龜子亞科 (Melolonthinae)',
      genus: '多個屬，最常見的是樟蠹螟屬、銅綠金龜子屬、綠翅金龜子屬',
      scientificName: '常見種包括 Anomala albopilosa（樟蠹螟）和 Chrysochus auratus（綠翅金龜子）'
    },

    species: [
      {
        emoji: '💚',
        name: '樟蠹螟',
        scientificName: 'Anomala albopilosa albopilosa',
        description: '台灣最常見的金龜子。身體光滑，通常綠色帶有紅色邊界。',
        size: '8-13mm',
        habitat: '任何有樟樹或其他植物的地方，海拔0-1500m',
        rarity: '非常普遍'
      },
      {
        emoji: '💛',
        name: '銅綠金龜子',
        scientificName: 'Anomala cupraea',
        description: '銅色或綠色金龜子。稍大於樟蠹螟。',
        size: '10-14mm',
        habitat: '各種灌木和樹木，海拔0-2000m',
        rarity: '普遍'
      },
      {
        emoji: '✨',
        name: '綠翅金龜子',
        scientificName: 'Chrysochus auratus',
        description: '金屬藍綠色，非常美麗。翅膀邊界呈紅銅色。',
        size: '10-14mm',
        habitat: '柳樹和其他濕地樹木，海拔0-1200m',
        rarity: '普遍但局部'
      },
      {
        emoji: '🟣',
        name: '紫金龜子',
        scientificName: 'Anomala cupripennis',
        description: '深紫色或紫褐色金龜子。在特定季節出現。',
        size: '8-12mm',
        habitat: '闊葉樹和灌木，海拔200-1800m',
        rarity: '局部普遍'
      },
      {
        emoji: '🟤',
        name: '黑色金龜子（各種種類）',
        scientificName: '多個種類，如 Anomala oculata',
        description: '黑色或黑褐色金龜子。較小，容易被忽視。',
        size: '6-10mm',
        habitat: '各種植物，海拔0-2000m',
        rarity: '普遍'
      }
    ],

    appearance: {
      bodyShape: '身體小型到中型，卵形或橢圓形。相對來說比較簡單的形狀。',
      color: '多樣化：綠色、紅色、褐色、黑色、紫色，通常帶有金屬光澤。有些種類有條紋或斑點。',
      distinctiveFeatures: '光滑的外殼和金屬光澤。前翅表面通常有細小的點刻或條紋。',
      sexualDimorphism: '性差不明顯，但雄蟲通常稍小。有些種類的雄蟲腳上有特殊的刷毛。',
      legs: '腿細長，足上有爪。中後足有特殊結構用來挖掘。',
      specialAdaptations: '前足有鋸齒狀的邊緣，幫助挖掘和清潔身體。'
    },

    lifecycle: {
      egg: {
        stage: '卵期',
        description: '雌蟲在土中數厘米深處產卵。卵白色橢圓形，1-2mm。',
        duration: '1-2週'
      },
      larva: [
        {
          stage: '一齡幼蟲 (L1)',
          description: '白色C形幼蟲，非常小。進食植物根部。',
          duration: '1-2週',
          appearance: '長約2-4mm'
        },
        {
          stage: '二齡幼蟲 (L2)',
          description: '繼續在土中進食根部。',
          duration: '2-4週',
          appearance: '長約5-8mm'
        },
        {
          stage: '三齡幼蟲 (L3)',
          description: '最大的幼蟲階段。繼續進食植物根部，可能對植物有害。',
          duration: '1-3個月',
          appearance: '長約10-15mm，比較粗壯'
        }
      ],
      pupa: {
        stage: '蛹期',
        description: '幼蟲停止進食，在土中製造蛹室。',
        duration: '2-4週',
        appearance: '白色變成棕色，可見成蟲輪廓'
      },
      adult: {
        stage: '成蟲期',
        description: '出現時間取決於種類，從春季到秋季。',
        duration: '3-9個月',
        behavior: '日行性，在陽光下活動。'
      }
    },

    habitat: {
      distribution: '全台灣，各個海拔',
      altitude: '海拔0-2500m（不同種類不同）',
      forestType: '各種林地、灌木、花園、公園',
      specificLocations: [
        '任何有樟樹的地方（樟蠹螟）',
        '河邊柳樹林（綠翅金龜子）',
        '山區灌木（銅綠金龜子）',
        '花園和公園的花朵上',
        '校園的樹木'
      ],
      seasonalPresence: '4月到10月，不同種類高峰季不同',
      preferredConditions: '多種植物存在的地方，濕度中等'
    },

    diet: {
      larvae: '植物根部，特別喜歡草根、樹根。某些種類專吃特定植物根部。',
      adults: '花粉、花瓣、葉子、嫩芽。有些種類可能危害農作物（如樟樹為害蟲）。'
    },

    behavior: {
      nocturnal: '白天活動（日行性），這與其他大型甲蟲不同。',
      phototaxis: '沒有趨光性。遠離光源。',
      territorial: '不領地性。成蟲共存不打鬥。',
      mating: '配偶尋找在花朵上發生。雌蟲會選擇配偶。',
      feeding: '在花朵和葉子上進食，通常停留較長時間（1-4小時）。',
      flight: '飛行聲音很大。通常傍晚飛行。'
    },

    predators: [
      { animal: '寄生蜂', stage: '成蟲卵' },
      { animal: '鳥類', stage: '成蟲' },
      { animal: '蜘蛛', stage: '成蟲' },
      { animal: '烏鴉', stage: '幼蟲（翻動土壤時）' }
    ],

    observation: {
      bestSeason: '5月到9月（但春季3-4月也有）',
      bestTime: '上午8am到下午5pm（日行性！）',
      locations: '花朵上（特別是白色花、黃色花），樹葉上，草地上',
      howToFind: '找一朵盛開的花，看看上面有沒有甲蟲。慢慢靠近，不要嚇跑牠們。',
      equipment: [
        '放大鏡（看金龜子細節很棒）',
        '相機',
        '筆記本（記錄在哪種花上找到）',
        '網子（可選，用於暫時捕捉觀察）'
      ],
      tips: [
        '金龜子很容易找到。只要有花的地方就去找。',
        '同一朵花上可能有多隻金龜子。',
        '輕輕捏住牠們的翅膀邊缘短暫觀察。牠們會假死。',
        '白色或黃色花特別吸引金龜子。',
        '雨後的早晨通常有最多的金龜子。',
        '不同季節有不同的種類。嘗試全年記錄。'
      ]
    },

    breeding: {
      substrate: '濕潤土壤混合堆肥，濕度60-70%',
      temperature: '20-26°C',
      humidity: '60-70%',
      container: '5升塑膠盒，深度至少15cm（幼蟲要埋入土中）',
      food: '幼蟲：濕潤的土壤和植物根部或商業無脊椎動物食物；成蟲：花粉、花瓣、葉子',
      mating: '成蟲出土後1週內可以配對',
      eggLaying: '雌蟲會自己在土中挖洞產卵',
      lifespan: '成蟲活3-9個月',
      timeline: '從卵到成蟲通常3-6個月',
      difficulty: '相對容易飼養，比大型甲蟲簡單'
    },

    funFacts: [
      '金龜子白天活動，而大多數其他台灣甲蟲都是夜晚活動！',
      '一些金龜子種類有「假死」防禦——被拿起時會縮起腿假裝死亡。',
      '樟蠹螟在樟樹上這麼常見，牠的名字就是「樟樹的蠹蟲」的意思。',
      '綠翅金龜子的金屬綠色會因光線角度改變——有時看起來是藍色或銅色！',
      '有些金龜子幼蟲可能破壞草坪，但數量很少引起問題。',
      '金龜子在世界上被尊為神聖的昆蟲——古埃及人將牠們視為太陽和重生的象徵。',
      '不同種類的金龜子喜歡不同的花——如果你想吸引特定種類，就種牠們喜歡的花！',
      '金龜子是夏天的標誌昆蟲。在台灣，看到第一隻金龜子就知道春天來了。'
    ],

    conservation: {
      status: '台灣大多數金龜子種類不受威脅',
      threats: [
        '農藥使用：殺死成蟲和幼蟲',
        '棲地破壞：減少食物植物',
        '花卉減少：城市化和花園減少',
        '非本地種入侵：某些非本地金龜子可能競爭'
      ],
      whatYouCanDo: [
        '在花園或陽台種植吸引金龜子的花卉。',
        '不要使用殺蟲劑。',
        '讓部分草地自然生長，為幼蟲提供食物。',
        '創建「甲蟲友善」花園。'
      ]
    },

    comparison: {
      title: '如何區分金龜子和其他甲蟲',
      comparisons: [
        {
          beetle: '獨角仙',
          differences: '獨角仙有一個角，只在夜間活動。金龜子沒有角，白天活動。獨角仙體型更大。'
        },
        {
          beetle: '鍬形蟲',
          differences: '鍬形蟲有大顎，夜間活動。金龜子沒有大顎，白天活動。'
        },
        {
          beetle: '瓢蟲',
          differences: '瓢蟲通常較小，紅色帶黑點。金龜子形狀更橢圓，通常有金屬光澤。'
        },
        {
          beetle: '天牛',
          differences: '天牛觸角非常長。金龜子觸角短，只有幾節。'
        }
      ]
    }
  }
}
