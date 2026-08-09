import React from 'react';
import { HOTELS } from '../data/itineraryData';
import { Hotel, MapPin, CheckCircle, Navigation } from 'lucide-react';

export const HotelSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 text-white p-5 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-400/30 text-emerald-300">
            <Hotel className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Rekomendasi Hotel Strategis Pilihan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-slate-100">
              Panduan Akomodasi Singapura & Kuala Lumpur
            </h2>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-3xl">
          Hotel dipilih khusus dengan lokasi super strategis untuk memaksimalkan efisiensi jalan kaki, kemudahan akses MRT/LRT, restoran halal terdekat, dan terminal bus lintas batas.
        </p>
      </div>

      {/* Hotel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HOTELS.map((hotel) => (
          <div 
            key={hotel.id}
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Hotel Header Banner */}
              <div className={`p-4 sm:p-5 ${
                hotel.id === 'hotel-jjh' 
                  ? 'bg-gradient-to-r from-emerald-900/80 to-teal-900/80 text-white border-b border-emerald-500/30' 
                  : 'bg-gradient-to-r from-sky-900/80 to-indigo-900/80 text-white border-b border-sky-500/30'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-xs font-bold uppercase bg-white/10 text-white border border-white/20">
                    {hotel.city}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {hotel.area}
                  </span>
                </div>
                <h3 className="text-2xl font-black mt-2 tracking-tight text-white">
                  {hotel.name}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {hotel.address}
                </p>
              </div>

              {/* Distance highlights */}
              <div className="p-4 bg-slate-950/40 border-b border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  Keunggulan Jarak & Aksesibilitas
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {hotel.distanceHighlights.map((dh, idx) => (
                    <div 
                      key={idx}
                      className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span className="truncate">{dh}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Features */}
              <div className="p-4 sm:p-5 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Detail Fasilitas & Lokasi
                </div>
                {hotel.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Button Footer */}
            <div className="p-4 bg-slate-950/40 border-t border-white/10">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.name} ${hotel.address}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold hover:bg-cyan-500/30 transition-all shadow-lg"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Buka Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

