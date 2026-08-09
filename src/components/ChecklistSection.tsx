import React, { useState, useEffect } from 'react';
import { CHECKLIST_ITEMS } from '../data/itineraryData';
import { CheckSquare, Square, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export const ChecklistSection: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('sg_jo_kl_checklist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sg_jo_kl_checklist', JSON.stringify(Array.from(checkedIds)));
    } catch (e) {
      // ignore
    }
  }, [checkedIds]);

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const resetAll = () => {
    if (window.confirm('Apakah Anda yakin ingin mengulang daftar ceklis?')) {
      setCheckedIds(new Set());
    }
  };

  const categories = Array.from(new Set(CHECKLIST_ITEMS.map(item => item.category)));
  const totalCount = CHECKLIST_ITEMS.length;
  const completedCount = checkedIds.size;
  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 text-white p-5 rounded-2xl shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 text-purple-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Persiapan Mandiri & Keamanan
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-slate-100">
                Ceklis Dokumen & Perlengkapan Perjalanan
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple-950/60 px-4 py-2 rounded-xl border border-purple-500/30 text-right backdrop-blur-md">
              <div className="text-xs text-purple-300 font-medium">Progres Persiapan</div>
              <div className="text-lg font-bold text-white">{completedCount}/{totalCount} ({percent}%)</div>
            </div>
            <button
              onClick={resetAll}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10 transition-colors cursor-pointer"
              title="Reset Ceklis"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-purple-950/60 h-2.5 rounded-full overflow-hidden mt-4 border border-purple-500/30">
          <div 
            className="bg-purple-400 h-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Categorized List */}
      <div className="space-y-6">
        {categories.map((cat, idx) => {
          const catItems = CHECKLIST_ITEMS.filter(item => item.category === cat);
          return (
            <div key={idx} className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
              <h3 className="text-base font-bold text-slate-100 mb-3 pb-2 border-b border-white/10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{cat}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {catItems.map((item) => {
                  const isChecked = checkedIds.has(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all text-left cursor-pointer backdrop-blur-md ${
                        isChecked
                          ? 'bg-purple-950/30 border-purple-500/20 text-slate-400'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-400/40 text-slate-100 shadow-lg'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-purple-400 fill-purple-950/60" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-500" />
                        )}
                      </div>

                      <div>
                        <div className={`text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-100'}`}>
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 font-medium">
                          {item.note}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

