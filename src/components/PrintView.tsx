import React from 'react';
import { ITINERARY_DAYS, HOTELS } from '../data/itineraryData';
import { Printer, ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrintView: React.FC<Props> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 max-w-5xl mx-auto font-sans text-slate-900">
      {/* Screen action header */}
      <div className="print:hidden mb-6 bg-amber-50 border border-amber-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-amber-900">
            Tampilan Cetak (Print & Export PDF)
          </h2>
          <p className="text-xs text-amber-800">
            Format halaman ringkas dan rapi untuk dicetak fisik atau disimpan sebagai PDF.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-teal-700 hover:bg-teal-800 text-white shadow-2xs cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Document Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <h1 className="text-2xl font-black tracking-tight text-center uppercase text-slate-900">
          PANDUAN PERJALANAN MANDIRI
        </h1>
        <p className="text-center font-bold text-slate-700 text-sm mt-1">
          Singapura • Johor • Kuala Lumpur | 13 – 18 Agustus 2026
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 mb-6 text-xs leading-relaxed space-y-1">
        <div className="font-bold uppercase text-slate-800 mb-1">RINGKASAN RENCANA PERJALANAN</div>
        <p>• <strong>13 – 14 Agustus:</strong> Eksplorasi Singapura (Menginap di HOTEL JJH - Area Kampong Glam / Bugis)</p>
        <p>• <strong>15 Agustus:</strong> Penyeberangan ke Johor (UTM Skudai & JPO), Penerbangan Malam ke Kuala Lumpur (AirAsia AK-6033 ke KLIA T2)</p>
        <p>• <strong>15 – 17 Agustus:</strong> Eksplorasi Kuala Lumpur (Menginap di Ibis KLCC)</p>
        <p>• <strong>18 Agustus:</strong> Penerbangan Kepulangan ke Palembang (AirAsia AK-462 dari KLIA T2)</p>
      </div>

      {/* Daily Tables */}
      <div className="space-y-8">
        {ITINERARY_DAYS.map((day) => (
          <div key={day.dayNumber} className="break-inside-avoid">
            <h3 className="text-sm font-black uppercase tracking-wide bg-teal-900 text-white px-3 py-1.5 rounded-t-md">
              {day.dateFull}: {day.title} ({day.subtitle})
            </h3>
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-200 text-slate-900 font-bold border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300 w-28">Waktu</th>
                  <th className="p-2 border-r border-slate-300 w-48">Aktivitas & Destinasi</th>
                  <th className="p-2 border-r border-slate-300">Rute & Transportasi Umum</th>
                </tr>
              </thead>
              <tbody>
                {day.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-300 hover:bg-slate-50">
                    <td className="p-2 border-r border-slate-300 font-bold text-slate-800 align-top">
                      {item.time}
                    </td>
                    <td className="p-2 border-r border-slate-300 font-semibold text-slate-900 align-top">
                      {item.activity}
                      {item.isHalalFood && (
                        <span className="block text-[10px] text-emerald-700 font-bold mt-0.5">
                          [Kuliner Halal]
                        </span>
                      )}
                    </td>
                    <td className="p-2 align-top text-slate-800 leading-relaxed">
                      <span className="font-bold text-teal-800 mr-1">[{item.transportLabel}]</span>
                      {item.routeDetails}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Recommended Hotels Print Block */}
      <div className="mt-8 pt-6 border-t-2 border-slate-900 break-inside-avoid">
        <h3 className="text-sm font-black uppercase text-slate-900 mb-3">
          REKOMENDASI HOTEL STRATEGIS PILIHAN ANDA
        </h3>
        <div className="space-y-3 text-xs">
          {HOTELS.map((h) => (
            <div key={h.id} className="p-3 bg-slate-50 rounded-md border border-slate-300">
              <strong className="text-slate-900 text-sm">{h.city} ({h.area}): {h.name}</strong> ({h.address})
              <ul className="list-disc list-inside mt-1 text-slate-700 space-y-0.5">
                {h.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-[10px] text-slate-500 border-t border-slate-200 pt-3">
        Panduan Perjalanan SG-JO-KL 2026 • Dicetak secara mandiri
      </div>
    </div>
  );
};
