import React, { useState, useEffect, useMemo } from 'react';
import { ITINERARY_DAYS } from './data/itineraryData';
import { Header } from './components/Header';
import { DaySelector } from './components/DaySelector';
import { ItineraryCard } from './components/ItineraryCard';
import { HotelSection } from './components/HotelSection';
import { TransitGuide } from './components/TransitGuide';
import { ChecklistSection } from './components/ChecklistSection';
import { PrintView } from './components/PrintView';
import { CurrencyModal } from './components/CurrencyModal';
import { 
  Calendar, 
  Search,
  Hotel,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Theme state (Light mode as default)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('sg_jo_kl_theme');
      return saved ? JSON.parse(saved) : false;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sg_jo_kl_theme', JSON.stringify(isDarkMode));
    } catch (e) {
      // ignore
    }
  }, [isDarkMode]);

  // Modals state for quick utilities
  const [activeModal, setActiveModal] = useState<'hotels' | 'transit' | 'checklist' | 'print' | 'currency' | null>(null);

  // Local storage state for completed itinerary items
  const [completedItemIds, setCompletedItemIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('sg_jo_kl_completed_items');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sg_jo_kl_completed_items', JSON.stringify(Array.from(completedItemIds)));
    } catch (e) {
      // ignore
    }
  }, [completedItemIds]);

  const toggleCompleteItem = (id: string) => {
    setCompletedItemIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Total items calculation
  const totalAllItems = useMemo(() => {
    return ITINERARY_DAYS.reduce((acc, day) => acc + day.items.length, 0);
  }, []);

  const completedCount = useMemo(() => {
    return completedItemIds.size;
  }, [completedItemIds]);

  // Search filtering logic
  const filteredDays = useMemo(() => {
    if (!searchQuery.trim()) {
      if (selectedDay === null) return ITINERARY_DAYS;
      return ITINERARY_DAYS.filter(d => d.dayNumber === selectedDay);
    }

    const q = searchQuery.toLowerCase();
    return ITINERARY_DAYS.map(day => {
      const matchingItems = day.items.filter(item => 
        item.activity.toLowerCase().includes(q) ||
        item.routeDetails.toLowerCase().includes(q) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(q))) ||
        item.transportLabel.toLowerCase().includes(q)
      );

      return {
        ...day,
        items: matchingItems
      };
    }).filter(day => day.items.length > 0);
  }, [searchQuery, selectedDay]);

  if (activeModal === 'print') {
    return <PrintView onBack={() => setActiveModal(null)} />;
  }

  return (
    <div className={`min-h-screen font-sans antialiased pb-20 relative overflow-x-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-gradient-to-br from-slate-100 via-teal-50/20 to-slate-100 text-slate-800'
    }`}>
      
      {/* Frosted Glass Mesh Background Ambient Glows */}
      {isDarkMode ? (
        <>
          <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="fixed top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
        </>
      ) : (
        <>
          <div className="fixed -top-40 -left-40 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="fixed top-1/3 -right-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none z-0" />
        </>
      )}

      {/* Main Ultra-Compact Sticky Header */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedCount={completedCount}
        totalCount={totalAllItems}
        onOpenHotels={() => setActiveModal('hotels')}
        onOpenTransit={() => setActiveModal('transit')}
        onOpenChecklist={() => setActiveModal('checklist')}
        onOpenPrint={() => setActiveModal('print')}
        onOpenCurrency={() => setActiveModal('currency')}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(prev => !prev)}
      />

      {/* Currency Converter Modal */}
      <CurrencyModal
        isOpen={activeModal === 'currency'}
        onClose={() => setActiveModal(null)}
        selectedDay={selectedDay}
        isDarkMode={isDarkMode}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 relative z-10">
        
        {/* Day Selector Navigation Pills */}
        <DaySelector 
          selectedDay={selectedDay} 
          setSelectedDay={setSelectedDay} 
          completedItemIds={completedItemIds}
          isDarkMode={isDarkMode}
        />

        {/* Active Day Banner / Info */}
        {searchQuery ? (
          <div className={`p-3.5 rounded-2xl mb-6 text-xs flex items-center justify-between border ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/20 text-amber-200 backdrop-blur-xl' 
              : 'bg-amber-50 border-amber-200 text-amber-900 shadow-sm'
          }`}>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-500" />
              <span>Hasil pencarian untuk: <strong>"{searchQuery}"</strong></span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-600 font-bold hover:underline cursor-pointer"
            >
              Bersihkan Filter
            </button>
          </div>
        ) : selectedDay !== null ? (
          (() => {
            const dayObj = ITINERARY_DAYS.find(d => d.dayNumber === selectedDay);
            if (!dayObj) return null;
            return (
              <div className={`rounded-2xl border p-5 shadow-xl mb-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-slate-900/60 backdrop-blur-xl border-white/10 text-slate-100 shadow-2xl' 
                  : 'bg-white border-slate-200 text-slate-800 shadow-sm'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase border shrink-0 ${
                        isDarkMode 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' 
                          : 'bg-teal-100 text-teal-800 border-teal-200'
                      }`}>
                        Hari {dayObj.dayNumber} ({dayObj.dateFull.split(',')[0]}) dari 6
                      </span>
                      <span className="text-sm select-none font-sans font-semibold whitespace-nowrap shrink-0">{dayObj.flags}</span>
                      <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {dayObj.dateFull}
                      </span>
                    </div>
                    <h2 className={`text-xl sm:text-2xl font-black mt-1 tracking-tight ${
                      isDarkMode ? 'text-slate-100' : 'text-slate-900'
                    }`}>
                      {dayObj.title}
                    </h2>
                    <p className={`text-xs sm:text-sm mt-0.5 font-medium ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {dayObj.subtitle}
                    </p>
                  </div>

                  <div className={`flex items-center gap-2.5 p-3 rounded-xl border shrink-0 ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <Hotel className="w-4 h-4 text-emerald-500" />
                    <div className="text-xs">
                      <span className={`font-medium block text-[10px] uppercase ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Menginap di
                      </span>
                      <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {dayObj.hotelName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()
        ) : (
          <div className={`rounded-2xl border p-4 shadow-xl mb-6 flex items-center justify-between ${
            isDarkMode 
              ? 'bg-slate-900/60 backdrop-blur-xl border-white/10 text-slate-100' 
              : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}>
            <div>
              <h2 className={`text-base font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                Seluruh Itinerary Perjalanan (Hari 1 – Hari 6)
              </h2>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Menampilkan semua {totalAllItems} aktivitas lengkap.
              </p>
            </div>
            <button
              onClick={() => setSelectedDay(1)}
              className={`text-xs font-bold hover:underline cursor-pointer ${
                isDarkMode ? 'text-cyan-400' : 'text-teal-700'
              }`}
            >
              Tampilkan per Hari →
            </button>
          </div>
        )}

        {/* Itinerary Cards List */}
        {filteredDays.length === 0 ? (
          <div className={`rounded-2xl border p-12 text-center shadow-xl ${
            isDarkMode ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200'
          }`}>
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className={`text-base font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Tidak ada jadwal ditemukan
            </h3>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Coba kata kunci lain atau bersihkan pencarian.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className={`mt-4 px-4 py-2 text-xs font-bold rounded-xl cursor-pointer transition-all ${
                isDarkMode 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30' 
                  : 'bg-teal-600 text-white hover:bg-teal-700'
              }`}
            >
              Bersihkan Pencarian
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredDays.map((day) => (
              <div key={day.dayNumber} className="space-y-4">
                {(selectedDay === null || searchQuery) && (
                  <div className={`sticky top-14 z-20 px-4 py-2.5 rounded-xl shadow-xl flex items-center justify-between border backdrop-blur-md ${
                    isDarkMode 
                      ? 'bg-slate-900/90 border-white/10 text-slate-100' 
                      : 'bg-slate-800 text-white border-slate-700'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                        Hari {day.dayNumber} ({day.dateFull.split(',')[0]}): {day.date}
                      </span>
                      <span className="text-xs text-slate-300 font-medium hidden sm:inline">• {day.title}</span>
                    </div>
                    <span className="text-[11px] text-slate-300 font-medium">
                      Hotel: {day.hotelName}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {day.items.map((item) => (
                    <ItineraryCard
                      key={item.id}
                      item={item}
                      isCompleted={completedItemIds.has(item.id)}
                      onToggleComplete={toggleCompleteItem}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Utility Modal Drawers (Hotel, Transit, Checklist) */}
      <AnimatePresence>
        {activeModal && activeModal !== 'currency' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`rounded-3xl border max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative ${
                isDarkMode 
                  ? 'bg-slate-900 border-white/10 text-slate-100' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              {/* Modal Top Bar */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${
                isDarkMode ? 'border-white/10 bg-slate-950/50' : 'border-slate-100 bg-slate-50'
              }`}>
                <h3 className={`text-base font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  {activeModal === 'hotels' && 'Rekomendasi Hotel Strategis'}
                  {activeModal === 'transit' && 'Panduan Transit & Penerbangan'}
                  {activeModal === 'checklist' && 'Ceklis Dokumen & Persiapan'}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                    isDarkMode 
                      ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-100' 
                      : 'bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[80vh]">
                {activeModal === 'hotels' && <HotelSection />}
                {activeModal === 'transit' && <TransitGuide />}
                {activeModal === 'checklist' && <ChecklistSection />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <footer className={`mt-16 border-t py-8 text-center relative z-10 backdrop-blur-md ${
        isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-200 bg-white/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <p className={`text-xs sm:text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            ✈️ Catatan & Itinerary Liburan Singapura • Johor • Kuala Lumpur 2026
          </p>
          <p className={`text-xs mt-1.5 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Spesial dibuat oleh <span className="font-bold text-amber-500">Zen</span> untuk <span className="font-bold text-amber-500">Maryam</span> ❤️ Dilengkapi rute MRT/Bus, kuliner halal, hotel, dan kalkulator kurs realtime!
          </p>
        </div>
      </footer>
    </div>
  );
}


