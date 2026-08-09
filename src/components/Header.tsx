import React from 'react';
import { 
  Compass, 
  Calendar, 
  Search, 
  CheckCircle2,
  CheckSquare,
  Hotel,
  Printer,
  Navigation,
  Coins,
  Sun,
  Moon
} from 'lucide-react';

interface Props {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  completedCount: number;
  totalCount: number;
  onOpenChecklist: () => void;
  onOpenHotels: () => void;
  onOpenTransit: () => void;
  onOpenPrint: () => void;
  onOpenCurrency: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  completedCount,
  totalCount,
  onOpenChecklist,
  onOpenHotels,
  onOpenTransit,
  onOpenPrint,
  onOpenCurrency,
  isDarkMode,
  onToggleTheme
}) => {
  const progressPercent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b shadow-2xl transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-slate-950/80 border-white/10 text-slate-100' 
        : 'bg-white/90 border-slate-200 text-slate-800 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Compact Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 sm:p-2 rounded-xl border shrink-0 ${
            isDarkMode 
              ? 'bg-cyan-500/10 border-cyan-400/20 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
              : 'bg-teal-50 border-teal-200 text-teal-700'
          }`}>
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base font-black tracking-tight flex items-center gap-1.5">
                Singapura • Johor • KL
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider hidden sm:inline-block border ${
                  isDarkMode 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' 
                    : 'bg-teal-100 text-teal-800 border-teal-200'
                }`}>
                  2026
                </span>
              </h1>
            </div>
            <p className={`text-[10px] sm:text-xs font-medium flex items-center gap-1 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <Calendar className="w-3 h-3 text-cyan-500 shrink-0" />
              <span>13–18 Agt 2026 (6 Hari 5 Malam)</span>
            </p>
          </div>
        </div>

        {/* Center: Search input */}
        <div className="relative flex-1 max-w-xs min-w-[130px] order-3 sm:order-2">
          <Search className={`w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${
            isDarkMode ? 'text-slate-400' : 'text-slate-400'
          }`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari lokasi, MRT, makan..."
            className={`w-full pl-8 pr-7 py-1.5 text-xs rounded-xl focus:outline-none focus:ring-2 transition-all backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-white/5 border-white/10 text-slate-100 placeholder-slate-400 focus:ring-cyan-400/50 focus:border-cyan-400/60' 
                : 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-teal-500/50 focus:border-teal-500/60'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs font-bold px-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Right: Progress, Currency & Utility Buttons */}
        <div className="flex items-center gap-2 order-2 sm:order-3 ml-auto sm:ml-0">
          {/* Progress pill */}
          <div className={`hidden md:flex items-center gap-2 px-2.5 py-1 rounded-xl border backdrop-blur-md ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
          }`}>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <div className="text-[11px]">
              <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{completedCount}</span>
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>/{totalCount}</span>
            </div>
            <div className={`w-10 h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'}`}>
              <div 
                className="bg-emerald-500 h-full transition-all duration-300" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Currency Button (Kurs) */}
          <button
            onClick={onOpenCurrency}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-xs ${
              isDarkMode 
                ? 'bg-amber-500/10 text-amber-300 border-amber-400/30 hover:bg-amber-500/20' 
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
            title="Kalkulator Kurs Realtime (SGD / MYR / IDR)"
          >
            <Coins className="w-4 h-4 text-amber-500" />
            <span>Kurs</span>
          </button>

          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-white/5 border-white/10 text-amber-300 hover:bg-white/10'
                : 'bg-slate-100 border-slate-300 text-indigo-700 hover:bg-slate-200'
            }`}
            title={isDarkMode ? 'Ganti ke Tema Terang (Light Mode)' : 'Ganti ke Tema Gelap (Dark Mode)'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Utility Icon Buttons (Checklist, Hotel, Transit, Print) */}
          <div className={`flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={onOpenHotels}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDarkMode ? 'text-slate-300 hover:text-emerald-300 hover:bg-white/10' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-200/60'
              }`}
              title="Rekomendasi Hotel"
            >
              <Hotel className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTransit}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDarkMode ? 'text-slate-300 hover:text-cyan-300 hover:bg-white/10' : 'text-slate-600 hover:text-teal-700 hover:bg-slate-200/60'
              }`}
              title="Panduan Transit"
            >
              <Navigation className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenChecklist}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDarkMode ? 'text-slate-300 hover:text-purple-300 hover:bg-white/10' : 'text-slate-600 hover:text-purple-700 hover:bg-slate-200/60'
              }`}
              title="Ceklis Dokumen"
            >
              <CheckSquare className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenPrint}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDarkMode ? 'text-slate-300 hover:text-amber-300 hover:bg-white/10' : 'text-slate-600 hover:text-amber-700 hover:bg-slate-200/60'
              }`}
              title="Cetak Itinerary"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};


