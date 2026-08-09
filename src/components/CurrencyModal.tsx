import React, { useState, useEffect } from 'react';
import { Coins, RefreshCw, X, ArrowRightLeft, DollarSign, Calculator, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedDay: number | null;
  isDarkMode: boolean;
}

// Default fallback exchange rates if offline or API fails
const FALLBACK_RATES = {
  SGD_TO_IDR: 11950,
  MYR_TO_IDR: 3600,
  SGD_TO_MYR: 3.32,
};

export const CurrencyModal: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedDay,
  isDarkMode
}) => {
  // Auto select default tab based on day location:
  // Days 1, 2, 3 -> Singapore (SGD)
  // Days 4, 5, 6 -> Malaysia (MYR)
  const defaultTab = (selectedDay && selectedDay >= 4) ? 'MYR' : 'SGD';
  const [activeCurrency, setActiveCurrency] = useState<'SGD' | 'MYR'>(defaultTab);

  // Sync tab if selectedDay changes when modal opens
  useEffect(() => {
    if (isOpen) {
      if (selectedDay && selectedDay >= 4) {
        setActiveCurrency('MYR');
      } else {
        setActiveCurrency('SGD');
      }
    }
  }, [isOpen, selectedDay]);

  const [amount, setAmount] = useState<string>('50');
  const [direction, setDirection] = useState<'FOREIGN_TO_IDR' | 'IDR_TO_FOREIGN'>('FOREIGN_TO_IDR');
  
  // Realtime exchange rate state
  const [rates, setRates] = useState<{
    SGD: number;
    MYR: number;
    lastUpdated: string | null;
    isLoading: boolean;
    isError: boolean;
  }>({
    SGD: FALLBACK_RATES.SGD_TO_IDR,
    MYR: FALLBACK_RATES.MYR_TO_IDR,
    lastUpdated: null,
    isLoading: false,
    isError: false
  });

  // Fetch realtime exchange rates from public API
  const fetchRealtimeRates = async () => {
    setRates(prev => ({ ...prev, isLoading: true, isError: false }));
    try {
      // Primary API: ExchangeRate-API (free endpoint)
      const resSGD = await fetch('https://open.er-api.com/v6/latest/SGD');
      const dataSGD = await resSGD.json();

      const resMYR = await fetch('https://open.er-api.com/v6/latest/MYR');
      const dataMYR = await resMYR.json();

      if (dataSGD?.rates?.IDR && dataMYR?.rates?.IDR) {
        setRates({
          SGD: Math.round(dataSGD.rates.IDR),
          MYR: Math.round(dataMYR.rates.IDR),
          lastUpdated: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          isLoading: false,
          isError: false
        });
      } else {
        throw new Error('Invalid rate response');
      }
    } catch (err) {
      console.warn('Using fallback exchange rates:', err);
      setRates(prev => ({
        ...prev,
        isLoading: false,
        isError: true,
        lastUpdated: 'Mode Offline (Nilai Estimasi)'
      }));
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchRealtimeRates();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentRate = activeCurrency === 'SGD' ? rates.SGD : rates.MYR;
  const numAmount = parseFloat(amount.replace(/[^0-9.]/g, '')) || 0;

  // Calculation
  const convertedAmount = direction === 'FOREIGN_TO_IDR' 
    ? numAmount * currentRate 
    : (currentRate > 0 ? numAmount / currentRate : 0);

  const formatCurrency = (val: number, cur: 'IDR' | 'SGD' | 'MYR') => {
    if (cur === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(val);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: cur,
        minimumFractionDigits: cur === 'SGD' || cur === 'MYR' ? 2 : 0,
        maximumFractionDigits: 2
      }).format(val);
    }
  };

  // Common quick amounts
  const quickAmounts = activeCurrency === 'SGD' ? [5, 10, 20, 50, 100, 200] : [10, 20, 50, 100, 250, 500];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col relative max-h-[92vh] ${
          isDarkMode 
            ? 'bg-slate-900 border-white/10 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header Bar */}
        <div className={`flex items-center justify-between px-5 py-3.5 border-b ${
          isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-400">
              <Coins className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-tight">
                Kalkulator Kurs Realtime
              </h3>
              <p className={`text-[11px] font-medium flex items-center gap-1 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <span>Auto-select berdasarkan hari aktif</span>
                {rates.lastUpdated && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-400/20">
                    {rates.lastUpdated}
                  </span>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
              isDarkMode 
                ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-100' 
                : 'bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
            }`}
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-4">

          {/* Location / Country Currency Tabs */}
          <div className="space-y-1">
            <label className={`text-[11px] font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Pilih Negara / Mata Uang
            </label>
            <div className={`grid grid-cols-2 p-1 rounded-2xl border ${
              isDarkMode ? 'bg-slate-950/80 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              {/* Left Tab: Singapore */}
              <button
                onClick={() => setActiveCurrency('SGD')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeCurrency === 'SGD'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="text-base">🇸🇬</span>
                <span>Singapura (SGD)</span>
                {selectedDay && selectedDay <= 3 && (
                  <span className="text-[9px] px-1 rounded bg-amber-950/20 text-slate-900 font-black">
                    Hari {selectedDay}
                  </span>
                )}
              </button>

              {/* Right Tab: Malaysia */}
              <button
                onClick={() => setActiveCurrency('MYR')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeCurrency === 'MYR'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="text-base">🇲🇾</span>
                <span>Malaysia (MYR)</span>
                {selectedDay && selectedDay >= 4 && (
                  <span className="text-[9px] px-1 rounded bg-amber-950/20 text-slate-900 font-black">
                    Hari {selectedDay}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Current Rate Display & Refresh Button */}
          <div className={`p-3 rounded-2xl border flex items-center justify-between ${
            isDarkMode ? 'bg-slate-950/40 border-white/10' : 'bg-amber-50/60 border-amber-200/60'
          }`}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 font-medium">Kurs Live: </span>
                <span className="font-bold text-amber-400">
                  1 {activeCurrency} = Rp {currentRate.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <button
              onClick={fetchRealtimeRates}
              disabled={rates.isLoading}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 text-slate-300' 
                  : 'bg-white hover:bg-amber-100 text-amber-900 border border-amber-200'
              }`}
              title="Perbarui Kurs Realtime"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${rates.isLoading ? 'animate-spin text-amber-400' : ''}`} />
              <span className="hidden sm:inline">Update</span>
            </button>
          </div>

          {/* Direction Toggle & Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className={`text-xs font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {direction === 'FOREIGN_TO_IDR' 
                  ? `Nominal dalam ${activeCurrency} (${activeCurrency === 'SGD' ? 'Dolar Singapura' : 'Ringgit Malaysia'})` 
                  : 'Nominal dalam Rupiah (IDR)'}
              </label>

              <button
                onClick={() => setDirection(prev => prev === 'FOREIGN_TO_IDR' ? 'IDR_TO_FOREIGN' : 'FOREIGN_TO_IDR')}
                className="text-[11px] font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <ArrowRightLeft className="w-3 h-3" />
                <span>Tukar Arah Conversi</span>
              </button>
            </div>

            {/* Input field */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-amber-400 text-sm">
                {direction === 'FOREIGN_TO_IDR' ? (activeCurrency === 'SGD' ? 'S$' : 'RM') : 'Rp'}
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className={`w-full pl-11 pr-4 py-3 rounded-2xl text-lg font-black tracking-wide border focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                  isDarkMode 
                    ? 'bg-slate-950 border-white/10 text-white placeholder-slate-600' 
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            {/* Quick Amount Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className={`text-[10px] font-semibold uppercase mr-1 ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Cepat:
              </span>
              {quickAmounts.map((q) => (
                <button
                  key={q}
                  onClick={() => setAmount(q.toString())}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    amount === q.toString()
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                      : isDarkMode
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  +{q}
                </button>
              ))}
            </div>
          </div>

          {/* Conversion Output Result Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-orange-500/20 border border-amber-500/30 text-center space-y-1 shadow-lg">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Hasil Konversi Rupiah:
            </span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
              {formatCurrency(convertedAmount, direction === 'FOREIGN_TO_IDR' ? 'IDR' : activeCurrency)}
            </div>
            <p className="text-[11px] text-slate-300 font-medium pt-1">
              {direction === 'FOREIGN_TO_IDR' 
                ? `${numAmount} ${activeCurrency} × Rp ${currentRate.toLocaleString('id-ID')}`
                : `Rp ${numAmount.toLocaleString('id-ID')} ÷ Rp ${currentRate.toLocaleString('id-ID')}`}
            </p>
          </div>

          {/* Quick Conversion Reference List */}
          <div className="space-y-2 pt-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Tabel Referensi Cepat {activeCurrency} → IDR
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[1, 5, 10, 20, 50, 100].map((val) => (
                <div 
                  key={val}
                  className={`p-2 rounded-xl border text-xs flex items-center justify-between ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="font-bold text-amber-400">{val} {activeCurrency}</span>
                  <span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Rp {(val * currentRate).toLocaleString('id-ID')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Action / Close */}
        <div className={`p-4 border-t flex items-center justify-between ${
          isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-100 bg-slate-50'
        }`}>
          <span className="text-[11px] text-slate-400 font-medium">
            💡 Tips: Simpan halaman ini offline di HP
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer"
          >
            Tutup (Close)
          </button>
        </div>
      </motion.div>
    </div>
  );
};
