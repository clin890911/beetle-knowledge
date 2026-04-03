import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import encyclopediaData from '../data/encyclopedia.js';

const categoryMeta = [
  { key: 'general', name: '甲蟲入門', emoji: '🔬', color: 'from-blue-600 to-blue-800' },
  { key: 'rhinocerosBeetles', name: '獨角仙', emoji: '🦏', color: 'from-amber-600 to-amber-800' },
  { key: 'stagBeetles', name: '鍬形蟲', emoji: '🦌', color: 'from-emerald-600 to-emerald-800' },
  { key: 'scarabBeetles', name: '金龜子', emoji: '✨', color: 'from-purple-600 to-purple-800' },
];

function SectionCard({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      className="card mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span>{icon}</span> {title}
        </h3>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/60"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-white/80 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InfoTag({ label, value }) {
  return (
    <div className="inline-flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1 text-sm mr-2 mb-2">
      <span className="text-white/50">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function GeneralSection({ data }) {
  return (
    <div>
      {/* What Are Beetles */}
      <SectionCard title={data.whatAreBeetles.title} icon="🪲" defaultOpen={true}>
        <p className="mb-3">{data.whatAreBeetles.content}</p>
        <div className="flex flex-wrap gap-2">
          {data.whatAreBeetles.keyPoints.map((p, i) => (
            <div key={i} className="bg-beetle-500/20 border border-beetle-400/30 rounded-lg px-3 py-2 text-sm">
              💡 {p}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Anatomy */}
      <SectionCard title={data.beetleAnatomy.title} icon="🔍">
        <p className="mb-4">{data.beetleAnatomy.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {Object.values(data.beetleAnatomy.parts).map((part) => (
            <div key={part.name} className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-beetle-400 mb-2">{part.name}</h4>
              <ul className="space-y-1 text-sm">
                {part.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {data.beetleAnatomy.specialFeatures && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.values(data.beetleAnatomy.specialFeatures).map((sf) => (
              <div key={sf.name} className="bg-bark-700/50 rounded-lg p-3">
                <span className="font-bold text-amber-400">{sf.name}</span>
                <p className="text-sm mt-1">{sf.description}</p>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      {/* Complete Metamorphosis */}
      <SectionCard title={data.completeMetamorphosis.title} icon="🔄">
        <p className="mb-4">{data.completeMetamorphosis.description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {data.completeMetamorphosis.stages.map((stage, i) => (
            <div key={i} className="flex-1 relative">
              <div className="bg-white/5 rounded-xl p-4 h-full">
                <div className="text-2xl font-bold text-beetle-400 mb-1">{i + 1}</div>
                <h4 className="font-bold mb-1">{stage.name}</h4>
                <p className="text-sm mb-2">{stage.description}</p>
                <span className="text-xs bg-beetle-500/20 px-2 py-1 rounded-full">⏱ {stage.duration}</span>
              </div>
              {i < data.completeMetamorphosis.stages.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 text-beetle-400 text-xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-beetle-300 bg-beetle-500/10 rounded-lg p-3">
          🌟 {data.completeMetamorphosis.why}
        </p>
      </SectionCard>

      {/* Observation Ethics */}
      <SectionCard title={data.observationEthics.title} icon="🤝">
        <p className="mb-4">{data.observationEthics.intro}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.observationEthics.guidelines.map((g, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-amber-400 mb-1">{g.title}</h4>
              <p className="text-sm">{g.detail}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Glossary */}
      <SectionCard title="專有名詞表" icon="📖">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {data.glossary.map((item, i) => (
            <div key={i} className="flex items-start gap-2 bg-white/5 rounded-lg px-3 py-2">
              <span className="font-bold text-beetle-400 whitespace-nowrap">{item.term}</span>
              <span className="text-sm text-white/70">{item.definition}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function BeetleCategorySection({ data, colorClass }) {
  return (
    <div>
      {/* Overview */}
      <motion.div
        className={`card mb-4 bg-gradient-to-r ${colorClass} border-white/30`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-lg">{data.overview}</p>
        {data.taxonomy && (
          <div className="flex flex-wrap gap-2 mt-3">
            <InfoTag label="科" value={data.taxonomy.family} />
            <InfoTag label="亞科" value={data.taxonomy.subfamily} />
            <InfoTag label="學名" value={data.taxonomy.scientificName} />
          </div>
        )}
      </motion.div>

      {/* Species */}
      {data.species && data.species.length > 0 && (
        <SectionCard title="台灣常見種類" icon="🗂️" defaultOpen={true}>
          <div className="space-y-3">
            {data.species.map((sp, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{sp.emoji || '🪲'}</span>
                  <div>
                    <h4 className="font-bold text-lg">{sp.name}</h4>
                    <p className="text-xs text-white/50 italic">{sp.scientificName}</p>
                  </div>
                  {sp.rarity && (
                    <span className="ml-auto text-xs bg-white/10 rounded-full px-2 py-1">{sp.rarity}</span>
                  )}
                </div>
                <p className="text-sm mb-2">{sp.description}</p>
                <div className="flex flex-wrap">
                  {sp.size && <InfoTag label="體型" value={sp.size} />}
                  {sp.habitat && <InfoTag label="棲地" value={sp.habitat} />}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Appearance */}
      {data.appearance && (
        <SectionCard title="外觀特徵" icon="👀">
          <div className="space-y-2">
            {data.appearance.bodyShape && <p><strong className="text-beetle-400">體型：</strong>{data.appearance.bodyShape}</p>}
            {data.appearance.color && <p><strong className="text-beetle-400">體色：</strong>{data.appearance.color}</p>}
            {data.appearance.distinctiveFeatures && <p><strong className="text-beetle-400">特徵：</strong>{data.appearance.distinctiveFeatures}</p>}
            {data.appearance.sexualDimorphism && <p><strong className="text-beetle-400">雌雄差異：</strong>{data.appearance.sexualDimorphism}</p>}
            {data.appearance.specialAdaptations && <p><strong className="text-beetle-400">特殊構造：</strong>{data.appearance.specialAdaptations}</p>}
          </div>
        </SectionCard>
      )}

      {/* Life Cycle */}
      {data.lifecycle && (
        <SectionCard title="生活史" icon="🔄">
          <div className="space-y-3">
            {data.lifecycle.egg && (
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold">🥚 {data.lifecycle.egg.stage}</h4>
                  <span className="text-xs bg-beetle-500/20 px-2 py-1 rounded-full">⏱ {data.lifecycle.egg.duration}</span>
                </div>
                <p className="text-sm">{data.lifecycle.egg.description}</p>
              </div>
            )}
            {data.lifecycle.larva && (Array.isArray(data.lifecycle.larva) ? data.lifecycle.larva : [data.lifecycle.larva]).map((l, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold">🐛 {l.stage}</h4>
                  <span className="text-xs bg-beetle-500/20 px-2 py-1 rounded-full">⏱ {l.duration}</span>
                </div>
                <p className="text-sm">{l.description}</p>
                {l.appearance && <p className="text-xs text-white/50 mt-1">{l.appearance}</p>}
              </div>
            ))}
            {data.lifecycle.pupa && (
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold">🫘 {data.lifecycle.pupa.stage}</h4>
                  <span className="text-xs bg-beetle-500/20 px-2 py-1 rounded-full">⏱ {data.lifecycle.pupa.duration}</span>
                </div>
                <p className="text-sm">{data.lifecycle.pupa.description}</p>
              </div>
            )}
            {data.lifecycle.adult && (
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold">🪲 {data.lifecycle.adult.stage}</h4>
                  <span className="text-xs bg-beetle-500/20 px-2 py-1 rounded-full">⏱ {data.lifecycle.adult.duration}</span>
                </div>
                <p className="text-sm">{data.lifecycle.adult.description}</p>
              </div>
            )}
          </div>
        </SectionCard>
      )}

      {/* Habitat */}
      {data.habitat && (
        <SectionCard title="棲息環境" icon="🌲">
          <div className="space-y-2">
            {data.habitat.distribution && <p><strong className="text-beetle-400">分布：</strong>{data.habitat.distribution}</p>}
            {data.habitat.altitude && <p><strong className="text-beetle-400">海拔：</strong>{data.habitat.altitude}</p>}
            {data.habitat.forestType && <p><strong className="text-beetle-400">林相：</strong>{data.habitat.forestType}</p>}
            {data.habitat.seasonalPresence && <p><strong className="text-beetle-400">活動季節：</strong>{data.habitat.seasonalPresence}</p>}
            {data.habitat.preferredConditions && <p><strong className="text-beetle-400">偏好環境：</strong>{data.habitat.preferredConditions}</p>}
            {data.habitat.specificLocations && (
              <div className="mt-3">
                <p className="font-bold text-beetle-400 mb-2">推薦觀察地點：</p>
                <div className="flex flex-wrap gap-2">
                  {data.habitat.specificLocations.map((loc, i) => (
                    <span key={i} className="bg-beetle-500/20 border border-beetle-400/30 rounded-lg px-3 py-1 text-sm">📍 {loc}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionCard>
      )}

      {/* Diet */}
      {data.diet && (
        <SectionCard title="食性" icon="🍽️">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-amber-400 mb-2">🐛 幼蟲食物</h4>
              <p className="text-sm">{data.diet.larvae}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-beetle-400 mb-2">🪲 成蟲食物</h4>
              <p className="text-sm">{data.diet.adults}</p>
            </div>
          </div>
        </SectionCard>
      )}

      {/* Behavior */}
      {data.behavior && (
        <SectionCard title="行為特性" icon="🎭">
          <div className="space-y-2">
            {Object.entries(data.behavior).map(([key, val]) => {
              const labels = {
                nocturnal: '晝夜習性', diurnal: '晝夜習性', phototaxis: '趨光性',
                territorial: '領地行為', mating: '交配行為', fighting: '打鬥行為',
                flying: '飛行能力', communication: '溝通方式'
              };
              return (
                <p key={key}>
                  <strong className="text-beetle-400">{labels[key] || key}：</strong>
                  {typeof val === 'string' ? val : JSON.stringify(val)}
                </p>
              );
            })}
          </div>
        </SectionCard>
      )}

      {/* Predators */}
      {data.predators && (
        <SectionCard title="天敵" icon="⚠️">
          {typeof data.predators === 'string' ? (
            <p>{data.predators}</p>
          ) : Array.isArray(data.predators) ? (
            <div className="flex flex-wrap gap-2">
              {data.predators.map((p, i) => (
                <span key={i} className="bg-red-500/20 border border-red-400/30 rounded-lg px-3 py-2 text-sm">{typeof p === 'string' ? p : p.name || JSON.stringify(p)}</span>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(data.predators).map(([key, val]) => (
                <p key={key}><strong className="text-red-400">{key}：</strong>{val}</p>
              ))}
            </div>
          )}
        </SectionCard>
      )}

      {/* Observation Tips */}
      {data.observation && (
        <SectionCard title="觀察指南" icon="🔭">
          <div className="space-y-2">
            {typeof data.observation === 'string' ? (
              <p>{data.observation}</p>
            ) : (
              Object.entries(data.observation).map(([key, val]) => {
                const labels = {
                  bestSeason: '最佳季節', bestTime: '最佳時段', equipment: '建議裝備',
                  locations: '推薦地點', tips: '實用技巧', safety: '安全提醒'
                };
                if (Array.isArray(val)) {
                  return (
                    <div key={key}>
                      <p className="font-bold text-beetle-400 mb-1">{labels[key] || key}：</p>
                      <div className="flex flex-wrap gap-2">
                        {val.map((v, i) => (
                          <span key={i} className="bg-white/10 rounded-lg px-3 py-1 text-sm">{v}</span>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <p key={key}><strong className="text-beetle-400">{labels[key] || key}：</strong>{val}</p>
                );
              })
            )}
          </div>
        </SectionCard>
      )}

      {/* Breeding */}
      {data.breeding && (
        <SectionCard title="飼養指南" icon="🏠">
          <div className="space-y-2">
            {typeof data.breeding === 'string' ? (
              <p>{data.breeding}</p>
            ) : (
              Object.entries(data.breeding).map(([key, val]) => {
                const labels = {
                  substrate: '底材', temperature: '溫度', humidity: '濕度',
                  food: '食物', container: '容器', tips: '飼養技巧', cleaning: '清潔'
                };
                if (Array.isArray(val)) {
                  return (
                    <div key={key}>
                      <p className="font-bold text-beetle-400 mb-1">{labels[key] || key}：</p>
                      <ul className="space-y-1 text-sm ml-4">
                        {val.map((v, i) => <li key={i}>• {v}</li>)}
                      </ul>
                    </div>
                  );
                }
                return (
                  <p key={key}><strong className="text-beetle-400">{labels[key] || key}：</strong>{val}</p>
                );
              })
            )}
          </div>
        </SectionCard>
      )}

      {/* Fun Facts */}
      {data.funFacts && (
        <SectionCard title="趣味小知識" icon="🤩" defaultOpen={true}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.funFacts.map((fact, i) => (
              <div key={i} className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <p className="text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Conservation */}
      {data.conservation && (
        <SectionCard title="保育與倫理" icon="🌍">
          {typeof data.conservation === 'string' ? (
            <p>{data.conservation}</p>
          ) : (
            <div className="space-y-2">
              {Object.entries(data.conservation).map(([key, val]) => (
                <p key={key}><strong className="text-beetle-400">{key}：</strong>{typeof val === 'string' ? val : JSON.stringify(val)}</p>
              ))}
            </div>
          )}
        </SectionCard>
      )}

      {/* Comparison */}
      {data.comparison && (
        <SectionCard title="如何分辨" icon="🔎">
          {typeof data.comparison === 'string' ? (
            <p>{data.comparison}</p>
          ) : Array.isArray(data.comparison) ? (
            <div className="space-y-2">
              {data.comparison.map((c, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  {typeof c === 'string' ? c : <p><strong className="text-beetle-400">{c.vs || c.title}：</strong>{c.detail || c.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(data.comparison).map(([key, val]) => (
                <p key={key}><strong className="text-beetle-400">{key}：</strong>{val}</p>
              ))}
            </div>
          )}
        </SectionCard>
      )}
    </div>
  );
}

export default function EncyclopediaPage() {
  const [activeCategory, setActiveCategory] = useState('general');

  const currentData = encyclopediaData[activeCategory];
  const currentMeta = categoryMeta.find(c => c.key === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">📚 甲蟲小百科</h1>
        <p className="text-white/60">系統性認識台灣三大甲蟲家族</p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categoryMeta.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeCategory === cat.key
                ? `bg-gradient-to-r ${cat.color} border-2 border-white/30 shadow-lg`
                : 'bg-white/10 border-2 border-transparent hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-1">{cat.emoji}</span> {cat.name}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeCategory === 'general' ? (
            <GeneralSection data={currentData} />
          ) : (
            <BeetleCategorySection data={currentData} colorClass={currentMeta.color} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
