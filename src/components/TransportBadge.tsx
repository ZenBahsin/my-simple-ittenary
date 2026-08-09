import React from 'react';
import { TransportMode } from '../types';
import { 
  Plane, 
  Train, 
  Bus, 
  Car, 
  Footprints, 
  ArrowRightLeft, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

interface Props {
  mode: TransportMode;
  label: string;
}

export const TransportBadge: React.FC<Props> = ({ mode, label }) => {
  let styleClasses = 'bg-slate-100 text-slate-700 border-slate-200';
  let IconComponent = Footprints;

  switch (mode) {
    case 'FLIGHT':
      styleClasses = 'bg-blue-600 text-white border-blue-700 shadow-sm';
      IconComponent = Plane;
      break;
    case 'MRT_HIJAU':
      styleClasses = 'bg-emerald-600 text-white border-emerald-700';
      IconComponent = Train;
      break;
    case 'MRT_BIRU':
      styleClasses = 'bg-sky-600 text-white border-sky-700';
      IconComponent = Train;
      break;
    case 'MRT_COKELAT':
      styleClasses = 'bg-amber-800 text-white border-amber-900';
      IconComponent = Train;
      break;
    case 'MRT_UNGU':
      styleClasses = 'bg-purple-600 text-white border-purple-700';
      IconComponent = Train;
      break;
    case 'MRT_MERAH':
      styleClasses = 'bg-red-600 text-white border-red-700';
      IconComponent = Train;
      break;
    case 'BUS':
      styleClasses = 'bg-amber-500 text-slate-900 border-amber-600 font-semibold';
      IconComponent = Bus;
      break;
    case 'GRAB':
      styleClasses = 'bg-teal-600 text-white border-teal-700';
      IconComponent = Car;
      break;
    case 'JALAN_KAKI':
      styleClasses = 'bg-emerald-100 text-emerald-800 border-emerald-300';
      IconComponent = Footprints;
      break;
    case 'WALKWAY':
      styleClasses = 'bg-indigo-600 text-white border-indigo-700';
      IconComponent = Building2;
      break;
    case 'LRT_KTM':
      styleClasses = 'bg-rose-600 text-white border-rose-700';
      IconComponent = Train;
      break;
    case 'TRANSIT':
      styleClasses = 'bg-slate-800 text-white border-slate-900';
      IconComponent = ArrowRightLeft;
      break;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${styleClasses} whitespace-nowrap transition-colors`}>
      <IconComponent className="w-3.5 h-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
};
