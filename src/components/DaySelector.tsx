import React from 'react';
import { ITINERARY_DAYS } from '../data/itineraryData';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';

interface Props {
  selectedDay: number | null; // null means 'All Days'
  setSelectedDay: (day: number | null) => void;
  completedItemIds: Set<string>;
  isDarkMode?: boolean;
}

export const DaySelector: React.FC<Props> = ({
  selectedDay,
  setSelectedDay,
  completedItemIds,
  isDarkMode = true
}) => {
  return (
    <div className={`backdrop-blur-xl border rounded-2xl p-3.5 shadow-xl mb-6 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-slate-900/60 border-white/10' 
        : 'bg-white border-slate-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-teal-600'}`} />
          <h2 className={`text-xs font-bold uppercase tracking-wider ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Pilih Hari Perjalanan
          </h2>
        </div>
        <button
          onClick={() => setSelectedDay(null)}
          className={`text-xs font-semibold px-3 py-1 rounded-xl transition-all cursor-pointer border ${
            selectedDay === null
              ? isDarkMode
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                : 'bg-teal-600 text-white border-teal-700 shadow-xs'
              : isDarkMode
                ? 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-slate-200'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
          }`}
        >
          Semua Hari (Full Itinerary)
        </button>
      </div>

      {/* Grid of 6 Days */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {ITINERARY_DAYS.map((day) => {
          const isSelected = selectedDay === day.dayNumber;
          const dayItemsCount = day.items.length;
          const completedInDay = day.items.filter(item => completedItemIds.has(item.id)).length;
          const isFullyDone = completedInDay === dayItemsCount && dayItemsCount > 0;

          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day.dayNumber)}
              className={`flex flex-col text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                isSelected
                  ? isDarkMode
                    ? 'bg-cyan-500/15 border-cyan-400/60 text-slate-100 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30'
                    : 'bg-teal-50 border-teal-500 text-teal-900 shadow-xs ring-2 ring-teal-500/20'
                  : isDarkMode
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
              }`}
            >
              {isFullyDone && (
                <div className={`absolute top-2 right-2 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              )}

              <div className="flex items-center justify-between gap-1">
                <span className={`text-[11px] font-bold uppercase ${
                  isSelected 
                    ? (isDarkMode ? 'text-cyan-300' : 'text-teal-700') 
                    : (isDarkMode ? 'text-slate-400' : 'text-slate-500')
                }`}>
                  Hari {day.dayNumber}
                </span>
                <span className={`text-[10px] font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {completedInDay}/{dayItemsCount}
                </span>
              </div>

              <div className={`text-xs font-bold truncate mt-1 ${
                isDarkMode ? 'text-slate-100' : 'text-slate-900'
              }`}>
                {day.date.replace(' 2026', '')}
              </div>

              <div className={`text-[11px] truncate mt-0.5 font-medium flex items-center gap-1 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <MapPin className={`w-3 h-3 shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-teal-600'}`} />
                <span className="truncate">{day.title.split('–')[0].trim()}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};


