export type TransportMode = 
  | 'FLIGHT'
  | 'MRT_HIJAU'
  | 'MRT_BIRU'
  | 'MRT_COKELAT'
  | 'MRT_UNGU'
  | 'MRT_MERAH'
  | 'BUS'
  | 'GRAB'
  | 'JALAN_KAKI'
  | 'WALKWAY'
  | 'LRT_KTM'
  | 'TRANSIT';

export interface ItineraryItem {
  id: string;
  time: string;
  activity: string;
  transportMode: TransportMode;
  transportLabel: string;
  routeDetails: string;
  location?: string;
  highlights?: string[];
  isHalalFood?: boolean;
  notes?: string;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  dateFull: string;
  title: string;
  subtitle: string;
  countries: string[];
  flags: string;
  hotelName: string;
  hotelArea: string;
  items: ItineraryItem[];
}

export interface HotelInfo {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  features: string[];
  distanceHighlights: string[];
  color: string;
}

export interface TransportBadgeInfo {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  iconName: string;
}
