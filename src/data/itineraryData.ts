import { DayItinerary, HotelInfo } from '../types';

export const ITINERARY_DAYS: DayItinerary[] = [
  {
    dayNumber: 1,
    date: '13 Agt 2026',
    dateFull: 'Kamis, 13 Agustus 2026',
    title: 'Palembang – Singapura',
    subtitle: 'Jewel & Kampong Glam',
    countries: ['Indonesia', 'Singapura'],
    flags: '🇮🇩 ✈️ 🇸🇬',
    hotelName: 'HOTEL JJH',
    hotelArea: 'Kampong Glam / Bugis',
    items: [
      {
        id: 'd1-1',
        time: '07.00 WIB',
        activity: 'Berangkat dari Palembang',
        transportMode: 'FLIGHT',
        transportLabel: 'FLIGHT',
        routeDetails: 'Scoot TR 255 dari Bandara Sultan Mahmud Badaruddin II (PLM) menuju Singapura (SIN).',
        location: 'Bandara Sultan Mahmud Badaruddin II (PLM)'
      },
      {
        id: 'd1-2',
        time: '09.30 SGT',
        activity: 'Tiba di Changi Airport Terminal 1 (T1)',
        transportMode: 'TRANSIT',
        transportLabel: 'IMIGRASI & BAGASI',
        routeDetails: 'Proses imigrasi di Terminal 1, klaim bagasi, dan persiapan kartu transportasi (EZ-Link / Smart Card / Contactless Card).',
        location: 'Changi Airport Terminal 1'
      },
      {
        id: 'd1-3',
        time: '10.20 – 11.30',
        activity: 'Eksplorasi Jewel Changi',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berjalan menuju komplek Jewel Changi (terhubung langsung dari T1) untuk menikmati dan berfoto di HSBC Rain Vortex & Shiseido Forest Valley.',
        location: 'Jewel Changi Airport',
        highlights: ['HSBC Rain Vortex', 'Shiseido Forest Valley']
      },
      {
        id: 'd1-4',
        time: '11.30 – 12.15',
        activity: 'Perjalanan ke Hotel JJH',
        transportMode: 'MRT_HIJAU',
        transportLabel: 'MRT JALUR HIJAU',
        routeDetails: 'Dari Stasiun MRT Changi Airport (T2/T3), naik MRT Jalur Hijau → Transit di Tanah Merah (pindah peron seberang arah Tuas Link) → Turun di Stasiun MRT Bugis (EW12). Jalan kaki santai 5 menit (400 m) menyusuri North Bridge Road menuju Hotel JJH (747 North Bridge Rd) untuk titip koper / check-in.',
        location: 'Hotel JJH (747 North Bridge Rd)'
      },
      {
        id: 'd1-5',
        time: '12.30 – 14.00',
        activity: 'Kampong Glam & Makan Siang',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Hotel JJH berlokasi tepat di Kampong Glam. Menikmati makan siang kuliner halal (Nasi Padang Hj Maimunah, Zam Zam, atau resto Arab Street) persis di sekitar hotel.',
        location: 'Kampong Glam',
        isHalalFood: true,
        highlights: ['Nasi Padang Hj Maimunah', 'Singapore Zam Zam', 'Arab Street Resto']
      },
      {
        id: 'd1-6',
        time: '14.00 – 16.00',
        activity: 'Haji Lane, Arab Street & Masjid Sultan',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Jalan kaki 2–3 menit (Masjid Sultan hanya 80 meter dari Hotel JJH!). Menyusuri gang estetik Haji Lane dan atmosfer budaya Arab-Melayu.',
        location: 'Haji Lane & Masjid Sultan',
        highlights: ['Masjid Sultan (80m dari hotel)', 'Gang Estetik Haji Lane', 'Budaya Arab-Melayu']
      },
      {
        id: 'd1-7',
        time: '16.00 – 16.30',
        activity: 'Bugis Street Shopping',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berjalan kaki 5 menit (400 m) ke Bugis Street Market untuk berbelanja suvenir ringan dan oleh-oleh.',
        location: 'Bugis Street Market',
        highlights: ['Oleh-oleh murah', 'Suvenir ringan']
      },
      {
        id: 'd1-8',
        time: '16.30 – 18.30',
        activity: 'Merlion Park & Marina Bay',
        transportMode: 'MRT_BIRU',
        transportLabel: 'MRT JALUR BIRU',
        routeDetails: 'Dari Stasiun MRT Bugis (DT14), naik Downtown Line → Turun di Stasiun MRT Telok Ayer / Downtown (atau Raffles Place via Jalur Hijau). Jalan kaki singkat menuju ikon Patung Merlion.',
        location: 'Merlion Park',
        highlights: ['Patung Merlion', 'Marina Bay Waterfront']
      },
      {
        id: 'd1-9',
        time: '18.30 – 20.30',
        activity: 'Gardens by the Bay',
        transportMode: 'MRT_COKELAT',
        transportLabel: 'MRT JALUR COKELAT',
        routeDetails: 'Dari area Merlion/Raffles Place, naik MRT ke Stasiun Marina Bay → Transit ke Thomson-East Coast Line (TEL) → Turun di Stasiun MRT Gardens by the Bay. Nikmati Supertree Grove malam hari.',
        location: 'Gardens by the Bay',
        highlights: ['Supertree Grove Malam Hari']
      },
      {
        id: 'd1-10',
        time: '20.45 – 22.30',
        activity: 'Clarke Quay',
        transportMode: 'MRT_UNGU',
        transportLabel: 'MRT JALUR UNGU',
        routeDetails: 'Dari Gardens by the Bay, naik TEL ke Outram Park → Transit ke North East Line (NEL) → Turun di Stasiun MRT Clarke Quay untuk suasana santai tepi sungai.',
        location: 'Clarke Quay',
        highlights: ['Suasana santai tepi sungai Riverside']
      },
      {
        id: 'd1-11',
        time: '22.45',
        activity: 'Kembali ke Hotel JJH',
        transportMode: 'MRT_BIRU',
        transportLabel: 'MRT JALUR BIRU',
        routeDetails: 'Dari Clarke Quay, naik MRT ke Chinatown → Transit ke Downtown Line → Turun di Stasiun MRT Bugis (DT14). Jalan kaki 5 menit kembali ke Hotel JJH.',
        location: 'Hotel JJH'
      }
    ]
  },
  {
    dayNumber: 2,
    date: '14 Agt 2026',
    dateFull: 'Jumat, 14 Agustus 2026',
    title: 'Belanja & Atraksi Singapura',
    subtitle: 'Orchard, Chinatown & Marina Bay Sands',
    countries: ['Singapura'],
    flags: '🇸🇬',
    hotelName: 'HOTEL JJH',
    hotelArea: 'Kampong Glam / Bugis',
    items: [
      {
        id: 'd2-1',
        time: '08.00',
        activity: 'Sarapan Pagi',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'KULINER LOKAL',
        routeDetails: 'Menikmati sarapan lokal di sekitar Kampong Glam / North Bridge Road dekat hotel.',
        location: 'Kampong Glam / North Bridge Rd',
        isHalalFood: true
      },
      {
        id: 'd2-2',
        time: '09.00 – 12.00',
        activity: 'Orchard Road (ION & Takashimaya)',
        transportMode: 'MRT_BIRU',
        transportLabel: 'MRT JALUR BIRU & MERAH',
        routeDetails: 'Dari Stasiun MRT Bugis (DT14), naik Downtown Line → Transit di Newton ke North South Line (Jalur Merah) → Turun di Stasiun MRT Orchard. (Alternatif bus: Naik Bus Kota No. 7 / 130 dari halte bus persis depan Hotel JJH langsung ke Orchard Road!).',
        location: 'Orchard Road',
        highlights: ['ION Orchard', 'Takashimaya Department Store', 'Opsi Bus Kota No. 7 / 130']
      },
      {
        id: 'd2-3',
        time: '12.00 – 13.00',
        activity: 'Makan Siang Halal',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'FOOD COURT HALAL',
        routeDetails: 'Makan siang di kawasan Orchard Road (banyak pilihan kedai / food court bersertifikasi halal).',
        location: 'Orchard Road Food Court',
        isHalalFood: true
      },
      {
        id: 'd2-4',
        time: '13.00 – 15.00',
        activity: 'Chinatown Singapore',
        transportMode: 'MRT_UNGU',
        transportLabel: 'MRT JALUR UNGU',
        routeDetails: 'Dari Stasiun MRT Orchard, naik Jalur Merah → Transit di Dhoby Ghaut ke North East Line → Turun di Stasiun MRT Chinatown untuk wisata budaya dan suvenir murah.',
        location: 'Chinatown Singapore',
        highlights: ['Wisata budaya', 'Pasar suvenir murah']
      },
      {
        id: 'd2-5',
        time: '15.00 – 17.00',
        activity: 'Marina Bay Sands & Belanja',
        transportMode: 'MRT_BIRU',
        transportLabel: 'MRT JALUR BIRU',
        routeDetails: 'Dari Stasiun MRT Chinatown, langsung naik Downtown Line (Jalur Biru - Tanpa Transit) → Turun di Stasiun MRT Bayfront (terhubung langsung ke The Shoppes at Marina Bay Sands).',
        location: 'The Shoppes at Marina Bay Sands',
        highlights: ['Bayfront Station direct', 'The Shoppes Mall']
      },
      {
        id: 'd2-6',
        time: '17.00 – 20.00',
        activity: 'Makan Malam & Santai',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'DINING & RELAX',
        routeDetails: 'Makan malam santai di food court Rasapura Masters MBS / Makansutra Gluttons Bay sambil menunggu pertunjukan malam.',
        location: 'Rasapura Masters / Makansutra Gluttons Bay',
        isHalalFood: true,
        highlights: ['Rasapura Masters MBS', 'Makansutra Gluttons Bay']
      },
      {
        id: 'd2-7',
        time: '20.00 – 20.30',
        activity: 'Spectra Light & Water Show',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berjalan ke pelataran luar (Event Plaza) Marina Bay Sands untuk menonton pertunjukan air mancur, efek laser, dan lampu visual.',
        location: 'Event Plaza Marina Bay Sands',
        highlights: ['Pertunjukan air mancur gratis', 'Laser & lampu visual']
      },
      {
        id: 'd2-8',
        time: '21.00',
        activity: 'Kembali ke Hotel JJH',
        transportMode: 'MRT_BIRU',
        transportLabel: 'MRT JALUR BIRU',
        routeDetails: 'Dari Stasiun MRT Bayfront, langsung naik Downtown Line → Turun di Stasiun MRT Bugis (DT14). Jalan kaki 5 menit ke Hotel JJH. Istirahat dan mencicil persiapan bagasi.',
        location: 'Hotel JJH'
      }
    ]
  },
  {
    dayNumber: 3,
    date: '15 Agt 2026',
    dateFull: 'Sabtu, 15 Agustus 2026',
    title: 'Singapura – Johor – Kuala Lumpur',
    subtitle: 'Lintas Batas Bus CW2, UTM Skudai, JPO & Flight ke KL',
    countries: ['Singapura', 'Malaysia'],
    flags: '🇸🇬 🚌 🇲🇾 ✈️ 🇲🇾',
    hotelName: 'Ibis KLCC',
    hotelArea: 'Kuala Lumpur (Area KLCC)',
    items: [
      {
        id: 'd3-1',
        time: '07.00',
        activity: 'Check-out Hotel JJH',
        transportMode: 'TRANSIT',
        transportLabel: 'CHECK-OUT',
        routeDetails: 'Proses check-out pagi dari Hotel JJH.',
        location: 'Hotel JJH'
      },
      {
        id: 'd3-2',
        time: '07.30 – 10.00',
        activity: 'Perjalanan Bus ke Johor Bahru',
        transportMode: 'BUS',
        transportLabel: 'BUS CW2',
        routeDetails: 'Dari Hotel JJH, berjalan kaki sangat dekat (±350 m) menuju Queen Street Bus Terminal → Naik bus lintas batas Causeway Link (CW2) langsung menuju Pos Imigrasi Woodlands & CIQ JB Sentral, Malaysia.',
        location: 'Queen Street Bus Terminal → CIQ JB Sentral',
        highlights: ['Jalan kaki 350m ke Terminal Bus Queen Street', 'Bus Lintas Batas Causeway Link CW2', 'Imigrasi Woodlands & JB CIQ']
      },
      {
        id: 'd3-3',
        time: '10.00 – 12.00',
        activity: 'Perjalanan Grab & Kunjungan ke Kolej 10 UTM Skudai',
        transportMode: 'GRAB',
        transportLabel: 'GRABCAR (±25–35 MENIT)',
        routeDetails: 'Dari JB CIQ / JB Sentral, pesan GrabCar langsung ke Kolej 10 UTM Skudai (±23 km, 25–35 menit, RM 25–35). Praktis dan langsung turun di lokasi.',
        location: 'Kolej 10, Universiti Teknologi Malaysia (UTM) Skudai',
        highlights: [
          'GrabCar langsung dari JB Sentral / JB CIQ ke Kolej 10 UTM',
          'Estimasi durasi: 25 – 35 menit (~23 km)',
          'Estimasi tarif Grab: RM 25 – RM 35',
          'Langsung tiba di lokasi Kolej 10 tanpa repot transit'
        ]
      },
      {
        id: 'd3-4',
        time: '12.00 – 13.00',
        activity: 'Makan Siang',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'KULINER LOKAL / KANTIN UTM',
        routeDetails: 'Makan siang kuliner lokal di kantin kampus UTM Skudai / Kolej 10 atau cafe sekitar area Skudai.',
        location: 'Kantin UTM / Kolej 10 Skudai',
        isHalalFood: true
      },
      {
        id: 'd3-5',
        time: '13.00 – 17.00',
        activity: 'Johor Premium Outlets (JPO)',
        transportMode: 'GRAB',
        transportLabel: 'GRAB MALAYSIA',
        routeDetails: 'Demi efisiensi waktu perjalanan, disarankan menggunakan aplikasi Grab Malaysia dari UTM Skudai langsung menuju JPO. Lanjut agenda belanja produk branded.',
        location: 'Johor Premium Outlets (JPO)',
        highlights: ['Grab Car dari UTM ke JPO', 'Belanja branded outlet discount']
      },
      {
        id: 'd3-6',
        time: '17.30',
        activity: 'Menuju Bandara Senai (JHB)',
        transportMode: 'GRAB',
        transportLabel: 'GRAB (±20 Menit)',
        routeDetails: 'Dari JPO, gunakan layanan Grab langsung menuju Senai International Airport (JHB). Estimasi perjalanan ±20 menit.',
        location: 'Senai International Airport (JHB)'
      },
      {
        id: 'd3-7',
        time: '19.00 – 20.00',
        activity: 'Penerbangan ke Kuala Lumpur',
        transportMode: 'FLIGHT',
        transportLabel: 'FLIGHT AIRASIA',
        routeDetails: 'AirAsia AK-6033 Penerbangan domestik dari Johor Bahru (Senai - JHB) menuju Kuala Lumpur International Airport Terminal 2 (KLIA T2).',
        location: 'Senai (JHB) → KLIA T2',
        highlights: ['AirAsia AK-6033', 'Penerbangan Domestik 1 Jam']
      },
      {
        id: 'd3-8',
        time: '21.00',
        activity: 'Check-in Ibis KLCC',
        transportMode: 'GRAB',
        transportLabel: 'GRAB / KLIA EKSPRES',
        routeDetails: 'Dari KLIA T2, opsi paling praktis langsung naik Grab Car menuju Ibis KLCC (Jalan Yap Kwan Seng). Opsi alternatif: Naik kereta cepat KLIA Ekspres ke KL Sentral, sambung LRT Jalur Kelana Jaya ke Stasiun LRT KLCC.',
        location: 'Ibis KLCC (Jalan Yap Kwan Seng)',
        highlights: ['Opsi 1: Grab Car langsung ke hotel', 'Opsi 2: KLIA Ekspres + LRT KLCC']
      }
    ]
  },
  {
    dayNumber: 4,
    date: '16 Agt 2026',
    dateFull: 'Minggu, 16 Agustus 2026',
    title: 'Eksplorasi Kawasan KLCC',
    subtitle: 'Twin Towers, Suria KLCC, Saloma Link & Symphony Lake',
    countries: ['Malaysia'],
    flags: '🇲🇾',
    hotelName: 'Ibis KLCC',
    hotelArea: 'Kuala Lumpur (Area KLCC)',
    items: [
      {
        id: 'd4-1',
        time: '08.00 – 09.00',
        activity: 'Sarapan Pagi',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'SARAPAN HOTEL',
        routeDetails: 'Sarapan di restoran Ibis KLCC (Kampung Kitchen) atau area food court sekitar Jalan Yap Kwan Seng.',
        location: 'Ibis KLCC Kampung Kitchen',
        isHalalFood: true
      },
      {
        id: 'd4-2',
        time: '09.00 – 10.30',
        activity: 'Petronas Twin Towers (Foto Sesi)',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI 6-8 MIN',
        routeDetails: 'Berjalan santai ±6–8 menit dari Ibis KLCC ke area plaza depan luar menara kembar. Pencahayaan pagi hari sangat optimal untuk dokumentasi foto terbaik.',
        location: 'Petronas Twin Towers Plaza',
        highlights: ['Spot foto ikonik pagi hari', 'Pencahayaan foto optimal']
      },
      {
        id: 'd4-3',
        time: '10.30 – 12.30',
        activity: 'Eksplorasi Suria KLCC',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berbelanja dan jalan-jalan di dalam pusat perbelanjaan Suria KLCC yang terletak tepat di bawah menara.',
        location: 'Suria KLCC Mall',
        highlights: ['Mall kelas dunia di bawah Twin Towers']
      },
      {
        id: 'd4-4',
        time: '12.30 – 14.00',
        activity: 'Makan Siang Halal',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'SIGNATURES FOOD COURT',
        routeDetails: 'Makan siang di Signatures Food Court Suria KLCC lantai atas yang memiliki aneka opsi kuliner halal terpercaya.',
        location: 'Signatures Food Court Suria KLCC',
        isHalalFood: true
      },
      {
        id: 'd4-5',
        time: '14.00 – 15.30',
        activity: 'Relaksasi di KLCC Park',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Keluar menuju bagian belakang mall untuk menikmati suasana asri taman kota, jembatan foto, dan kolam air mancur raksasa.',
        location: 'KLCC Park',
        highlights: ['Taman kota asri', 'Jembatan foto', 'Kolam air mancur raksasa']
      },
      {
        id: 'd4-6',
        time: '15.30 – 17.00',
        activity: 'Kembali ke Ibis KLCC (Istirahat Sore)',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berjalan kembali ke Ibis KLCC (sangat dekat) untuk menaruh barang bawaan belanja, mandi sore, dan bersiap untuk agenda malam.',
        location: 'Ibis KLCC'
      },
      {
        id: 'd4-7',
        time: '17.00 – 18.30',
        activity: 'Kunjungan ke Saloma Link',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI 8 MIN',
        routeDetails: 'Berjalan kaki santai ±8 menit menyusuri jalur pedestrian khusus menuju jembatan arsitektur ikonik Saloma Link (Pintasan Saloma) menjelang senja.',
        location: 'Saloma Link (Pintasan Saloma)',
        highlights: ['Jembatan arsitektur futuristik', 'Lampu hias senja hari']
      },
      {
        id: 'd4-8',
        time: '18.30 – 20.00',
        activity: 'Makan Malam Kuliner Lokal',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'KULINER KAMPUNG BARU',
        routeDetails: 'Menyeberangi jembatan Saloma menuju kawasan kuliner Melayu tradisional legendaris di Kampung Baru untuk makan malam, atau kembali ke Suria KLCC.',
        location: 'Kampung Baru / Suria KLCC',
        isHalalFood: true,
        highlights: ['Kuliner Melayu tradisional Kampung Baru']
      },
      {
        id: 'd4-9',
        time: '20.00 – 21.00',
        activity: 'Menonton Symphony Lake Show',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Menuju kolam utama KLCC Park untuk menikmati pertunjukan air mancur menari berpadu musik dan tata lampu cahaya yang spektakuler.',
        location: 'KLCC Lake Symphony',
        highlights: ['Air mancur menari spektakuler', 'Musik & tata lampu visual']
      },
      {
        id: 'd4-10',
        time: '21.00',
        activity: 'Kembali ke Ibis KLCC',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'JALAN KAKI',
        routeDetails: 'Berjalan santai kembali menuju Ibis KLCC dan beristirahat.',
        location: 'Ibis KLCC'
      }
    ]
  },
  {
    dayNumber: 5,
    date: '17 Agt 2026',
    dateFull: 'Senin, 17 Agustus 2026',
    title: 'Sejarah, Budaya & Belanja Bukit Bintang',
    subtitle: 'Batu Caves, Chinatown, Pasar Seni, Dataran Merdeka & Pavilion KL',
    countries: ['Malaysia'],
    flags: '🇲🇾',
    hotelName: 'Ibis KLCC',
    hotelArea: 'Kuala Lumpur (Area KLCC)',
    items: [
      {
        id: 'd5-1',
        time: '07.30 – 08.15',
        activity: 'Sarapan Pagi di ibis KLCC',
        transportMode: 'JALAN_KAKI',
        transportLabel: 'SARAPAN HOTEL',
        routeDetails: 'Persiapan fisik dengan sarapan pagi di Ibis KLCC sebelum rute eksplorasi budaya dan sejarah KL.',
        location: 'Ibis KLCC'
      },
      {
        id: 'd5-2',
        time: '08.15 – 11.00',
        activity: 'Mengeksplorasi Batu Caves',
        transportMode: 'LRT_KTM',
        transportLabel: 'LRT + KTM KOMUTER',
        routeDetails: 'Dari Stasiun LRT KLCC, naik Jalur Kelana Jaya (Merah) menuju KL Sentral → Pindah peron KTM Komuter (Line Biru Tua) → Naik kereta tujuan akhir Stasiun Batu Caves (persis di depan tangga pelangi).',
        location: 'Batu Caves',
        highlights: ['Kereta KTM Komuter langsung', 'Tangga Pelangi 272 anak tangga', 'Patung Lord Murugan']
      },
      {
        id: 'd5-3',
        time: '11.00 – 14.30',
        activity: 'Eksplorasi Heritage: Chinatown (Petaling Street / Kwai Chai Hong), Pasar Seni, Dataran Merdeka & Sholat/Makan Siang Halal',
        transportMode: 'LRT_KTM',
        transportLabel: 'KTM / LRT / GRAB',
        routeDetails: 'Dari Batu Caves, naik KTM Komuter ke Stasiun Pasar Seni / Kuala Lumpur. Jelajahi Chinatown (Petaling Street & lorong seni Kwai Chai Hong), Pasar Seni (Central Market), Dataran Merdeka & Masjid Negara. Dilanjutkan sholat & makan siang kuliner halal lokal.',
        location: 'Chinatown (Petaling Street & Kwai Chai Hong), Pasar Seni, Dataran Merdeka & Masjid Negara',
        isHalalFood: true,
        highlights: [
          'Chinatown & Kwai Chai Hong (spot foto legendaris)',
          'Pasar Seni (Central Market) cenderamata',
          'Dataran Merdeka & Bangunan Sultan Abdul Samad',
          'Masjid Negara & Makan Siang Halal'
        ]
      },
      {
        id: 'd5-4',
        time: '14.30 – 17.30',
        activity: 'Istirahat Sore & Rooftop Pool di ibis KLCC',
        transportMode: 'LRT_KTM',
        transportLabel: 'LRT KELANA JAYA',
        routeDetails: 'Dari Stasiun LRT Pasar Seni, naik LRT Jalur Kelana Jaya langsung menuju Stasiun LRT KLCC. Berjalan kaki kembali ke Ibis KLCC untuk istirahat, mandi, dan santai menikmati rooftop pool.',
        location: 'Ibis KLCC',
        highlights: ['Rooftop Pool & santai sore', 'Mandi & recharge energi']
      },
      {
        id: 'd5-5',
        time: '17.30 – 21.30',
        activity: 'Menuju Bukit Bintang via Grab Car & Eksplorasi Pavilion KL & Kuliner Malam',
        transportMode: 'GRAB',
        transportLabel: 'GRAB CAR (±10 MENIT)',
        routeDetails: 'Pesan Grab Car langsung dari lobi Ibis KLCC menuju Mall Pavilion KL di kawasan Bukit Bintang (±10 menit). Lanjutkan berbelanja, berfoto di penyeberangan mini-Shibuya, dan makan malam kuliner malam.',
        location: 'Pavilion KL & Bukit Bintang Crossing',
        isHalalFood: true,
        highlights: [
          'Grab Car langsung dari lobi Ibis KLCC',
          'Eksplorasi Pavilion KL & Bukit Bintang',
          'Kuliner malam & mini-Shibuya crossing'
        ]
      },
      {
        id: 'd5-6',
        time: '21.30',
        activity: 'Kembali ke Hotel via Grab Car & Packing',
        transportMode: 'GRAB',
        transportLabel: 'GRAB CAR (±10 MENIT)',
        routeDetails: 'Pesan Grab Car dari Pavilion KL / Bukit Bintang kembali langsung ke lobi Ibis KLCC. Beristirahat dan melakukan finalisasi packing koper untuk persiapan kepulangan besok.',
        location: 'Ibis KLCC',
        highlights: [
          'Grab Car kembali ke Ibis KLCC',
          'Finalisasi packing koper untuk penerbangan besok'
        ]
      }
    ]
  },
  {
    dayNumber: 6,
    date: '18 Agt 2026',
    dateFull: 'Selasa, 18 Agustus 2026',
    title: 'Kuala Lumpur – Kepulangan ke Palembang',
    subtitle: 'Check-out Ibis KLCC, Transportasi ke KLIA T2 & Flight AK-462',
    countries: ['Malaysia', 'Indonesia'],
    flags: '🇲🇾 ✈️ 🇮🇩',
    hotelName: 'Ibis KLCC',
    hotelArea: 'Check-out & Bandara KLIA T2',
    items: [
      {
        id: 'd6-1',
        time: 'Pagi Hari',
        activity: 'Check-out Hotel & Menuju Bandara (KLIA T2)',
        transportMode: 'GRAB',
        transportLabel: 'GRAB / KLIA EKSPRES',
        routeDetails: 'Melakukan proses check-out ekspres dari Ibis KLCC dan sarapan pagi. Pilihan Transportasi Utama Ke Bandara:\n• Opsi Praktis (Disarankan untuk Rombongan): Menggunakan Grab Car dari lobi Ibis KLCC langsung menuju KLIA Terminal 2 (KLIA T2) (durasi ±1 jam tergantung lalu lintas).\n• Opsi Kereta Cepat Bebas Macet: Naik LRT dari Stasiun LRT KLCC ke stasiun transit KL Sentral → Pindah ke loket kereta bandara KLIA Ekspres (waktu tempuh kereta non-stop 28 menit ke KLIA T2).',
        location: 'Ibis KLCC → KLIA T2',
        notes: '⚠️ Pastikan jadwal keberangkatan Anda terhitung aman dan sudah tiba di terminal keberangkatan internasional KLIA T2 minimal 3 jam sebelum jadwal flight.',
        highlights: ['Opsi Grab Car (±1 jam)', 'Opsi KLIA Ekspres (28 menit dari KL Sentral)', 'Hadir minimal 3 jam sebelum flight!']
      },
      {
        id: 'd6-2',
        time: 'Siang / Sore',
        activity: 'Penerbangan Internasional ke Tanah Air',
        transportMode: 'FLIGHT',
        transportLabel: 'FLIGHT AIRASIA',
        routeDetails: 'AirAsia AK-462 Melakukan proses boarding dan terbang dengan rute penerbangan langsung Kuala Lumpur (KLIA T2) menuju Palembang (PLM). Perjalanan wisata selesai dengan lancar.',
        location: 'KLIA T2 → Palembang (PLM)',
        highlights: ['Penerbangan Langsung AirAsia AK-462', 'Tiba Kembali di Palembang']
      }
    ]
  }
];

export const HOTELS: HotelInfo[] = [
  {
    id: 'hotel-jjh',
    name: 'HOTEL JJH',
    city: 'Singapura',
    area: 'Kampong Glam / Bugis Area',
    address: '747 North Bridge Road, Singapore',
    features: [
      'Lokasi super strategis tepat di jantung Kampong Glam',
      'Hanya 80 meter dari Masjid Sultan',
      '400m (5 menit jalan kaki) dari Stasiun MRT Bugis (EW12/DT14)',
      '350m dari Queen Street Bus Terminal (Halte Bus CW2 ke Johor Bahru)',
      'Dikelilingi tempat makan halal populer (Hj Maimunah, Zam Zam, Arab St)'
    ],
    distanceHighlights: [
      '80m ke Masjid Sultan',
      '400m ke Stasiun MRT Bugis',
      '350m ke Bus CW2 Queen St',
      '400m ke Bugis Street Market'
    ],
    color: 'emerald'
  },
  {
    id: 'ibis-klcc',
    name: 'Ibis KLCC',
    city: 'Kuala Lumpur',
    area: 'Area KLCC / Yap Kwan Seng',
    address: 'Jalan Yap Kwan Seng, Kuala Lumpur, Malaysia',
    features: [
      'Lokasi premium di pusat kota Kuala Lumpur',
      '6-8 menit jalan kaki ke Petronas Twin Towers & Suria KLCC',
      'Akses mudah ke Stasiun LRT KLCC & Stasiun MRT Persiaran KLCC',
      'Dekat jembatan layang pedestrian ber-AC (Walkway) menuju Bukit Bintang',
      'Akses cepat ke wisata malam jembatan Saloma Link (Pintasan Saloma)',
      'Restoran Kampung Kitchen halal di dalam hotel'
    ],
    distanceHighlights: [
      '±6-8 min jalan ke Petronas Towers',
      'Dekat Suria KLCC Mall',
      'Jalan kaki ke Saloma Link',
      'Walkway AC ke Bukit Bintang'
    ],
    color: 'sky'
  }
];

export const CHECKLIST_ITEMS = [
  { id: 'c1', category: 'Dokumen & Identitas', title: 'Paspor (Masa Berlaku > 6 Bulan)', note: 'Wajib untuk Singapura & Malaysia' },
  { id: 'c2', category: 'Dokumen & Identitas', title: 'Tiket Pesawat (Scoot TR255, AirAsia AK6033 & AK462)', note: 'Cetak & simpan pdf di HP' },
  { id: 'c3', category: 'Dokumen & Identitas', title: 'SG Arrival Card (SGAC)', note: 'Isi online 3 hari sebelum tiba di Singapore' },
  { id: 'c4', category: 'Dokumen & Identitas', title: 'Malaysia Digital Arrival Card (MDAC)', note: 'Isi online sebelum masuk Malaysia' },
  { id: 'c5', category: 'Transportasi & Pembayaran', title: 'Kartu Transportasi SG (EZ-Link / Smart Card / Contactless)', note: 'Dapat dibeli di Changi / MRT Station' },
  { id: 'c6', category: 'Transportasi & Pembayaran', title: 'Aplikasi Grab Malaysia', note: 'Sudah terinstall dan terverifikasi untuk perjalanan Johor & KL' },
  { id: 'c7', category: 'Transportasi & Pembayaran', title: 'Mata Uang SGD (Dolar Singapura)', note: 'Siapkan cash secukupnya & e-wallet/card' },
  { id: 'c8', category: 'Transportasi & Pembayaran', title: 'Mata Uang MYR (Ringgit Malaysia)', note: 'Siapkan cash secukupnya & Touch n Go/Card' },
  { id: 'c9', category: 'Perlengkapan Perjalanan', title: 'Adapter Colokan Listrik Tipe G (Kaki 3)', note: 'Digunakan di Singapura & Malaysia' },
  { id: 'c10', category: 'Perlengkapan Perjalanan', title: 'Payung Lipat & Topi / Kacamata Hitam', note: 'Cuaca tropis bisa panas / hujan mendadak' },
  { id: 'c11', category: 'Perlengkapan Perjalanan', title: 'Powerbank & Kabel Charger', note: 'Penting untuk navigasi Google Maps / Grab' },
  { id: 'c12', category: 'Perlengkapan Perjalanan', title: 'Obat-obatan Pribadi & Botol Minum', note: 'Tetap terhidrasi selama eksplorasi jalan kaki' }
];

export const TRANSIT_LINES = [
  { name: 'MRT Jalur Hijau (East West Line - EW)', city: 'Singapura', code: 'EW', color: 'bg-emerald-600 text-white', desc: 'Rute dari Changi Airport T2/T3 → Transit Tanah Merah → Stasiun Bugis (EW12).' },
  { name: 'MRT Jalur Biru (Downtown Line - DT)', city: 'Singapura', code: 'DT', color: 'bg-blue-600 text-white', desc: 'Stasiun Bugis (DT14) ke Telok Ayer, Chinatown, dan Bayfront (Marina Bay Sands).' },
  { name: 'MRT Jalur Cokelat (Thomson-East Coast Line - TEL)', city: 'Singapura', code: 'TEL', color: 'bg-amber-800 text-white', desc: 'Akses langsung menuju Stasiun MRT Gardens by the Bay.' },
  { name: 'MRT Jalur Ungu (North East Line - NEL)', city: 'Singapura', code: 'NEL', color: 'bg-purple-600 text-white', desc: 'Akses ke Chinatown dan Stasiun Clarke Quay.' },
  { name: 'MRT Jalur Merah (North South Line - NS)', city: 'Singapura', code: 'NS', color: 'bg-red-600 text-white', desc: 'Akses utama menuju Orchard Road Mall.' },
  { name: 'Bus Causeway Link CW2', city: 'Lintas Batas (SG → MY)', code: 'CW2', color: 'bg-amber-500 text-slate-900', desc: 'Bus lintas negara dari Queen Street Terminal Bugis ke Imigrasi JB CIQ Malaysia.' },
  { name: 'LRT Kelana Jaya (Merah)', city: 'Kuala Lumpur', code: 'KJL', color: 'bg-rose-600 text-white', desc: 'Stasiun LRT KLCC ke KL Sentral dan Pasar Seni.' },
  { name: 'KTM Komuter (Biru Tua)', city: 'Kuala Lumpur', code: 'KTM', color: 'bg-indigo-800 text-white', desc: 'Rute langsung dari KL Sentral ke Stasiun Batu Caves.' },
  { name: 'Walkway AC KLCC – Bukit Bintang', city: 'Kuala Lumpur', code: 'WALK', color: 'bg-teal-700 text-white', desc: 'Jembatan terowongan layang AC 1.2 KM (15 menit) dari Suria KLCC ke Pavilion KL.' }
];
