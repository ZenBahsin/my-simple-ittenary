import React from 'react';
import { ItineraryItem } from '../types';
import { TransportBadge } from './TransportBadge';
import { 
  Clock, 
  MapPin, 
  CheckCircle, 
  Circle, 
  UtensilsCrossed, 
  ExternalLink,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

interface Props {
  item: ItineraryItem;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  isDarkMode?: boolean;
}

export const ItineraryCard: React.FC<Props> = ({
  item,
  isCompleted,
  onToggleComplete,
  isDarkMode = true
}) => {
  const mapSearchUrl = item.location 
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}`
    : null;

  return (
    <div 
      className={`group rounded-2xl border transition-all duration-300 p-4 sm:p-5 relative backdrop-blur-xl ${
        isCompleted
          ? isDarkMode
            ? 'bg-slate-900/40 border-white/5 opacity-75'
            : 'bg-slate-50/80 border-slate-200 opacity-80'
          : isDarkMode
            ? 'bg-slate-900/60 border-white/10 hover:border-cyan-400/40 hover:bg-slate-900/80 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]'
            : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 text-slate-800'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Left: Time & Transport Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold font-mono border ${
            isDarkMode 
              ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50' 
              : 'bg-teal-50 text-teal-800 border-teal-200'
          }`}>
            <Clock className={`w-3.5 h-3.5 ${isDarkMode ? 'text-cyan-400' : 'text-teal-600'}`} />
            <span>{item.time}</span>
          </div>

          <TransportBadge mode={item.transportMode} label={item.transportLabel} />

          {item.isHalalFood && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
              isDarkMode 
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' 
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}>
              <UtensilsCrossed className="w-3 h-3 text-emerald-500" />
              Kuliner Halal
            </span>
          )}
        </div>

        {/* Right: Completion Checkbox */}
        <button
          onClick={() => onToggleComplete(item.id)}
          className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-xl border transition-all cursor-pointer shrink-0 ${
            isCompleted
              ? isDarkMode
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-emerald-600 text-white border-emerald-700'
              : isDarkMode
                ? 'bg-white/5 text-slate-400 border-white/10 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400/40'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300'
          }`}
          title={isCompleted ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
        >
          {isCompleted ? (
            <>
              <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-white'}`} />
              <span className="hidden sm:inline">Selesai</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Tandai</span>
            </>
          )}
        </button>
      </div>

      {/* Activity Title */}
      <h3 className={`text-base sm:text-lg font-bold mt-3 ${
        isDarkMode ? 'text-slate-100' : 'text-slate-900'
      } ${isCompleted ? 'line-through text-slate-500' : ''}`}>
        {item.activity}
      </h3>

      {/* Route Details / Instructions */}
      <div className={`mt-2.5 text-xs sm:text-sm leading-relaxed p-3 rounded-xl border ${
        isDarkMode 
          ? 'text-slate-300 bg-slate-950/50 border-white/5' 
          : 'text-slate-700 bg-slate-50 border-slate-100'
      }`}>
        <p className="whitespace-pre-line font-normal">{item.routeDetails}</p>
      </div>

      {/* Highlights & Tags */}
      {item.highlights && item.highlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.highlights.map((h, i) => (
            <span 
              key={i} 
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-lg border ${
                isDarkMode 
                  ? 'bg-white/5 text-slate-300 border-white/10' 
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Special Warnings/Notes if any */}
      {item.notes && (
        <div className={`mt-3 p-2.5 rounded-xl text-xs flex items-start gap-2 border ${
          isDarkMode 
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' 
            : 'bg-amber-50 border-amber-200 text-amber-900'
        }`}>
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span className="font-medium">{item.notes}</span>
        </div>
      )}

      {/* Footer: Location link */}
      {item.location && mapSearchUrl && (
        <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs ${
          isDarkMode ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'
        }`}>
          <div className={`flex items-center gap-1 truncate max-w-[80%] ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-teal-600'}`} />
            <span className="truncate">{item.location}</span>
          </div>

          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 font-semibold hover:underline shrink-0 ${
              isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-teal-700 hover:text-teal-900'
            }`}
          >
            <span>Peta</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};


