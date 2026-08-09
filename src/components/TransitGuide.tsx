import React from 'react';
import { TRANSIT_LINES } from '../data/itineraryData';
import { Plane, Bus, Train } from 'lucide-react';

export const TransitGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Flight Summary Card */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2.5 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              Jadwal Penerbangan (Flight Details)
            </h3>
            <p className="text-xs text-slate-400">3 Penerbangan Utama Selama Liburan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Flight 1 */}
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-bold text-blue-300 mb-1">
              <span>FLIGHT 1 (Keberangkatan)</span>
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px]">Scoot TR 255</span>
            </div>
            <div className="text-sm font-bold text-slate-100 mt-2">
              Palembang (PLM) → Singapura (SIN)
            </div>
            <div className="text-xs text-slate-300 mt-1">
              📅 Kamis, 13 Agt 2026 | ⏱️ 07.00 WIB → 09.30 SGT
            </div>
            <div className="text-[11px] text-blue-400 mt-2 font-medium">
              Tiba di Terminal 1 Changi (Imigrasi & Klaim Bagasi)
            </div>
          </div>

          {/* Flight 2 */}
          <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-bold text-teal-300 mb-1">
              <span>FLIGHT 2 (Domestik MY)</span>
              <span className="px-2 py-0.5 rounded bg-teal-600 text-white text-[10px]">AirAsia AK-6033</span>
            </div>
            <div className="text-sm font-bold text-slate-100 mt-2">
              Johor Bahru (JHB) → Kuala Lumpur (KLIA T2)
            </div>
            <div className="text-xs text-slate-300 mt-1">
              📅 Sabtu, 15 Agt 2026 | ⏱️ 19.00 – 20.00
            </div>
            <div className="text-[11px] text-teal-400 mt-2 font-medium">
              Senai Airport (JHB) ke KLIA Terminal 2
            </div>
          </div>

          {/* Flight 3 */}
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1">
              <span>FLIGHT 3 (Kepulangan)</span>
              <span className="px-2 py-0.5 rounded bg-amber-600 text-white text-[10px]">AirAsia AK-462</span>
            </div>
            <div className="text-sm font-bold text-slate-100 mt-2">
              Kuala Lumpur (KLIA T2) → Palembang (PLM)
            </div>
            <div className="text-xs text-slate-300 mt-1">
              📅 Selasa, 18 Agt 2026 | ⏱️ Siang / Sore
            </div>
            <div className="text-[11px] text-amber-400 mt-2 font-medium">
              ⚠️ Tiba di KLIA T2 minimal 3 jam sebelum jadwal flight!
            </div>
          </div>
        </div>
      </div>

      {/* Transit Lines Reference */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-400/30">
            <Train className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              Panduan Jalur MRT, LRT & Bus Publik
            </h3>
            <p className="text-xs text-slate-400">Gunakan EZ-Link / Smart Card di Singapura & Grab / Touch n Go di Malaysia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {TRANSIT_LINES.map((line, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${line.color}`}>
                  {line.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  {line.city}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-100 mb-1">
                {line.name}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {line.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cross Border Protocol Tip */}
      <div className="bg-amber-950/40 rounded-2xl border border-amber-500/30 p-5 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl shrink-0 mt-0.5">
            <Bus className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-200">
              Panduan Penyeberangan Lintas Batas (Singapura → Johor Bahru)
            </h4>
            <div className="mt-2 text-xs text-amber-100/90 space-y-2 leading-relaxed">
              <p>
                1. <strong>Berangkat dari Hotel JJH:</strong> Jalan kaki 350m ke Queen Street Bus Terminal.
              </p>
              <p>
                2. <strong>Naik Bus CW2:</strong> Naik bus Causeway Link (CW2) menuju Pos Imigrasi Woodlands (Singapore Checkpoint).
              </p>
              <p>
                3. <strong>Proses Imigrasi SG:</strong> Turun bus dengan membawa barang bawaan, cap paspor di Woodlands, lalu naik bus CW2 kembali.
              </p>
              <p>
                4. <strong>Imigrasi Malaysia (CIQ JB Sentral):</strong> Cap paspor masuk Malaysia di JB CIQ. Selesai imigrasi, Anda sudah berada di Johor Bahru!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

