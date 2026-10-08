export interface LocalizedArticle {
  id: string;
  category: { id: string; en: string };
  readTime: { id: string; en: string };
  date: string;
  title: { id: string; en: string };
  summary: { id: string; en: string };
  content: { id: string[]; en: string[] };
}

export const INSIGHTS_DATA: LocalizedArticle[] = [
  {
    id: 'what-is-ethylene-management',
    category: { id: 'Sains Pascapanen', en: 'Post-Harvest Science' },
    readTime: { id: '4 mnt baca', en: '4 min read' },
    date: 'October 2026',
    title: {
      id: 'Apa Itu Manajemen Etilen pada Penyimpanan Buah Pascapanen?',
      en: 'What Is Ethylene Management in Post-Harvest Storage?'
    },
    summary: {
      id: 'Memahami bagaimana akumulasi gas fitohormon etilen memicu pematangan dini pada buah klimakterik dan bagaimana adsorpsi fisis menjaga mutu jual komersial.',
      en: 'Understanding how trace ethylene concentrations trigger premature senescence in climacteric crops and how active adsorption preserves post-harvest marketability.'
    },
    content: {
      id: [
        'Etilen (C₂H₄) adalah fitohormon gas alami yang mengatur pematangan, pelunakan daging buah, perubahan warna kulit, dan penuaan pada komoditas klimakterik seperti pisang, mangga, alpukat, apel, dan tomat.',
        'Bahkan pada konsentrasi sangat rendah di bawah 0,1 hingga 1,0 part per million (ppm), etilen di udara memicu reaksi biokimia ireversibel. Di dalam ruang pendingin tertutup, etilen terus terakumulasi dari respirasi buah sehingga memicu pembusukan dini.',
        'Manajemen etilen aktif berbeda dengan ventilasi biasa: daripada membuang udara dingin ke luar yang memicu beban pendinginan tinggi dan lonjakan listrik, adsorpsi terarah menyaring etilen dalam siklus tertutup.',
        'Penerapan manajemen etilen terintegrasi memungkinkan operator cold storage memperpanjang masa simpan, menjaga kekerasan buah, dan menekan kerugian susut mutu di sepanjang rantai distribusi.'
      ],
      en: [
        'Ethylene (C₂H₄) is a naturally produced gaseous phytohormone that regulates ripening, fruit softening, color development, and eventual senescence in climacteric fruits such as bananas, mangoes, avocados, apples, and tomatoes.',
        'Even at trace atmospheric concentrations—often below 0.1 to 1.0 parts per million (ppm)—ambient ethylene triggers irreversible biochemical cascades in harvested commodities. In closed cold storage or sealed packing facilities, ethylene continuously accumulates from fruit respiration, causing accelerated ripening, pulp breakdown, and shortened shelf-life.',
        'Active ethylene management differs from basic ventilation: rather than exchanging refrigerated air with outside air—which introduces thermal load, humidity fluctuations, and substantial energy expenditure—targeted adsorption removes ethylene molecules continuously within a closed recirculation loop.',
        'Implementing validated ethylene management protocols allows commercial facility operators to extend storage duration, preserve fruit firmness, and reduce value losses throughout multi-week distribution chains.'
      ]
    }
  },
  {
    id: 'cas-vs-ethylene-management',
    category: { id: 'Teknik & Integrasi', en: 'Engineering & Integration' },
    readTime: { id: '5 mnt baca', en: '5 min read' },
    date: 'September 2026',
    title: {
      id: 'CAS vs Manajemen Etilen: Fungsi Berbeda yang Saling Melengkapi',
      en: 'CAS vs. Ethylene Management: Different Functions, Complementary Systems'
    },
    summary: {
      id: 'Controlled Atmosphere Storage mengontrol gas makro O₂ dan CO₂, sementara penyerap etilen aktif melindunginya dari pemicu hormon pematangan.',
      en: 'Controlled Atmosphere Storage controls oxygen and carbon dioxide, but active ethylene removal serves as an essential complementary layer.'
    },
    content: {
      id: [
        'Controlled Atmosphere Storage (CAS) diakui sebagai standar utama penyimpanan buah jangka panjang dengan menurunkan oksigen (O₂) hingga 1–3% dan mengatur karbon dioksida (CO₂) pada 1–5%.',
        'Namun, peralatan CAS pada dasarnya dirancang untuk mengatur komposisi gas makro dan suhu. Sistem CAS standar tidak secara otomatis menyerap etilen yang terus disintesis oleh buah.',
        'SACETHYX dirancang khusus sebagai lapisan manajemen etilen pelengkap di dalam ruang CAS. SACETHYX tidak mengontrol O₂ atau CO₂, melainkan mengalirkan udara melewati kartrid karbon aktif untuk menyerap etilen volatil.',
        'Dengan memadukan CAS dan SACETHYX, pengelola cold chain memperoleh perlindungan ganda: menghambat respirasi makro sekaligus memotong pemicu penuaan etilen.'
      ],
      en: [
        'Controlled Atmosphere Storage (CAS) is widely acknowledged as the gold standard for long-term commercial fruit preservation. CAS facilities operate by lowering oxygen (O₂) to 1–3% and regulating carbon dioxide (CO₂) to 1–5%, combined with precise temperature and humidity controls.',
        'However, CAS equipment is fundamentally engineered for macro-gas composition and thermal regulation. Standard CAS systems do not automatically include dedicated catalytic or adsorbent-based ethylene scrubbing, particularly for sensitive or mixed-respiration commodities.',
        'SACETHYX was designed specifically to integrate as an ethylene-management layer alongside existing CAS and standard cold storage infrastructure. SACETHYX does not attempt to control O₂ or CO₂ levels; rather, it intercepts storage air to adsorb volatile ethylene and recirculate lower-ethylene air back into the room.',
        'By pairing established CAS atmospheric control with SACETHYX active carbon adsorption, operators achieve a comprehensive post-harvest environment that suppresses both macro-respiration and hormone-driven ripening triggers.'
      ]
    }
  },
  {
    id: 'bagasse-to-activated-carbon',
    category: { id: 'Sains Material', en: 'Materials Science' },
    readTime: { id: '6 mnt baca', en: '6 min read' },
    date: 'August 2026',
    title: {
      id: 'Dari Ampas Tebu Menjadi Karbon Aktif Berpori Tinggi',
      en: 'From Sugarcane Bagasse to High-Surface-Area Activated Carbon'
    },
    summary: {
      id: 'Transformasi termokimia dan aktivasi pori yang mengubah limbah ampas tebu menjadi media penangkap gas etilen berkinerja tinggi.',
      en: 'The chemical activation and carbonization pathways that transform fibrous agro-industrial sugarcane residue into porous ethylene-adsorbent media.'
    },
    content: {
      id: [
        'Ampas tebu (bagasse) adalah produk sampingan serat terbesar setelah ekstraksi nira di pabrik gula. Di Indonesia, jutaan ton ampas tebu dihasilkan setiap tahunnya dan sebagian besar hanya dibakar sebagai bahan bakar boiler beremisi tinggi.',
        'Melalui proses pirolisis terkontrol dan aktivasi kimia/uap, matriks lignoselulosa ampas tebu bertransformasi menjadi struktur karbon aktif berpori mikro dan mesopori dengan luas permukaan spesifik tinggi.',
        'Ukuran pori yang disesuaikan secara khusus memungkinkan penangkapan molekul gas hidrokarbon ringan seperti etilen secara fisis tanpa perlu bahan aditif berbahaya.',
        'Upcycling ampas tebu menjadi kartrid bernilai industri tinggi ini menciptakan rantai ekonomi sirkular yang menurunkan limbah sekaligus menyelamatkan komoditas hortikultura.'
      ],
      en: [
        'Sugarcane bagasse is the primary fibrous byproduct remaining after juice extraction in sugar mills. Globally and regionally across Southeast Asia, millions of metric tons of bagasse are generated annually, frequently burned for low-efficiency boiler fuel or discarded.',
        'Through controlled thermochemical carbonization followed by activating agents, the lignocellulosic matrix of bagasse undergoes structural transformation into high-porosity activated carbon characterized by micro- and mesoporous pore size distributions.',
        'The porous network of engineered bagasse carbon provides high internal specific surface area, tailored to capture low-molecular-weight volatile organic compounds like ethylene via physical adsorption.',
        'By upcycling sugar mill residues into high-performance industrial adsorbent cartridges, SACETHYX creates a circular-economy supply loop that simultaneously reduces industrial waste and addresses post-harvest food loss.'
      ]
    }
  },
  {
    id: 'cartridge-replacement-matters',
    category: { id: 'Praktik Operasional', en: 'Operational Best Practices' },
    readTime: { id: '3 mnt baca', en: '3 min read' },
    date: 'July 2026',
    title: {
      id: 'Mengapa Siklus Penggantian Kartrid Krusial pada Sistem Adsorpsi',
      en: 'Why Cartridge Replacement Matters in Adsorption Systems'
    },
    summary: {
      id: 'Penjelasan mengapa adsorben unggun tetap membutuhkan siklus penggantian terencana dan bagaimana telemetri mencegah terjadinya breakthrough.',
      en: 'Why fixed-bed adsorbents require planned cycle replacement and how telemetry prevents saturation breakthrough.'
    },
    content: {
      id: [
        'Pada sistem adsorpsi fisik, karbon aktif memiliki kapasitas permukaan pori yang terbatas. Seiring berjalannya waktu penyimpanan, molekul etilen akan mengisi pori-pori aktif hingga mendekati titik jenuh.',
        'Setelah mencapai titik breakthrough, daya serap karbon akan menurun drastis sehingga etilen kembali berakumulasi di dalam ruangan.',
        'SACETHYX mengusung arsitektur kartrid modular lepas-pasang (quick-release) yang dipadukan dengan sensor telemetri. Operator mendapatkan peringatan penggantian sebelum titik jenuh tercapai.',
        'Kartrid yang telah terpakai dapat dikembalikan ke SACETHYX melalui program take-back untuk diregenerasi atau dialihkan untuk aplikasi material sekunder.'
      ],
      en: [
        'In any physical adsorption system, porous carbon media has a finite quantity of active surface sites. As ethylene and competing volatile compounds bind to these sites over days and weeks of continuous storage operation, the media steadily approaches its saturation capacity.',
        'Once an adsorbent bed reaches its breakthrough point, ethylene capture efficiency drops significantly, allowing ambient ethylene levels to accumulate undetected unless actively monitored.',
        'SACETHYX incorporates a modular, replaceable cartridge architecture paired with SACETHYX SENSE monitoring. Rather than requiring complex onsite chemical regeneration, operators can quickly swap depleted cartridges for fresh factory-calibrated units during routine maintenance intervals.',
        'Depleted cartridges can be returned via our reverse logistics take-back program for recovery, reactivation, or secondary industrial applications.'
      ]
    }
  },
  {
    id: 'reducing-post-harvest-loss',
    category: { id: 'Dampak Finansial', en: 'Economic Impact' },
    readTime: { id: '4 mnt baca', en: '4 min read' },
    date: 'June 2026',
    title: {
      id: 'Menekan Kerugian Pascapanen Melalui Pengelolaan Ruang Simpan',
      en: 'Reducing Post-Harvest Loss Through Better Storage Management'
    },
    summary: {
      id: 'Menganalisis kebocoran ekonomi pada rantai pasok hortikultura dan keuntungan investasi dari preservasi mutu panen.',
      en: 'Examining the economic leakage in commercial horticulture cold chains and the return on investment of targeted preservation.'
    },
    content: {
      id: [
        'Menurut laporan pertanian pangan, antara 30% hingga 40% hasil hortikultura segar di negara berkembang mengalami penyusutan nilai sebelum sampai ke konsumen akhir.',
        'Sebagian besar kebocoran nilai terjadi pada masa tunggu gudang, staging packhouse, dan transportasi jarak jauh saat lonjakan etilen memicu pelunakan cepat dan kerentanan terhadap jamur.',
        'Ketika buah ekspor Grade A terdegradasi menjadi Grade B, margin keuntungan distributor terpangkas tajam. Memperpanjang kesegaran buah bahkan 5 hingga 10 hari memberikan fleksibilitas logistik krusial.',
        'Pengelolaan etilen terarah melindungi konsistensi kelas mutu buah dan menjaga harga jual komersial tertinggi.'
      ],
      en: [
        'According to global and regional agricultural reports, between 25% and 40% of fresh horticultural produce is lost or downgraded between harvest and final consumption in emerging economies.',
        'Much of this value leakage occurs during interim storage, packhouse staging, and long-distance transport where unexpected ethylene surges cause premature softening, rot vulnerability, and cosmetic degradation.',
        'When commercial fruit batches are downgraded from Class A export specification to local market liquidation, operating margins contract severely. Protecting shelf-life by even 5 to 10 additional days grants packhouses and exporters critical scheduling flexibility.',
        'Targeted ethylene management directly protects product grade consistency, contract fulfillment reliability, and bottom-line commercial returns for growers and facility operators.'
      ]
    }
  },
  {
    id: 'smart-monitoring-cold-chain',
    category: { id: 'Sistem Digital IoT', en: 'Digital Systems' },
    readTime: { id: '4 mnt baca', en: '4 min read' },
    date: 'May 2026',
    title: {
      id: 'Peran Monitoring Cerdas dalam Operasional Cold-Chain Modern',
      en: 'Smart Monitoring in Modern Cold-Chain Operations'
    },
    summary: {
      id: 'Bagaimana sensor lingkungan terhubung menutup celah visibilitas antara manajemen cold storage dan risiko biologis buah.',
      en: 'How connected environmental sensing bridges the visibility gap between cold storage management and post-harvest biological risk.'
    },
    content: {
      id: [
        'Cold storage tradisional umumnya memiliki sensor suhu dan kelembapan, namun tidak memiliki pemantau untuk gas fitohormon seperti etilen.',
        'SACETHYX SENSE menggabungkan deteksi etilen terarah dengan pencatatan suhu dan kelembapan untuk memberikan visibilitas penuh kondisi fisiologis ruang simpan.',
        'Saat terjadi lonjakan etilen abnormal—misalnya akibat masuknya buah yang sudah matang—sistem mengirimkan sinyal peringatan langsung sehingga tindakan korektif dapat segera diambil.',
        'Digitalisasi atmosfer ruang simpan mengubah fasilitas pendingin pasif menjadi aset jaminan mutu yang aktif dan terukur.'
      ],
      en: [
        'Traditional cold storage facilities maintain reliable temperature and humidity loggers, but lack visibility into volatile organic phytohormones like ethylene.',
        'SACETHYX SENSE pairs multi-parameter environmental sensing with a centralized controller to capture real-time ethylene trends alongside ambient temperature, relative humidity, and cartridge status.',
        'When storage air exhibits anomalous ethylene spikes—such as from a ripening pallet or an unsealed door—the system flags immediate operational notifications, allowing staff to inspect commodities or initiate air recirculation before quality degrades.',
        'Integrating telemetry directly into cold-chain management workflows transforms storage from a passive refrigerated room into a proactive quality-assurance asset.'
      ]
    }
  }
];

export interface FaqItem {
  q: { id: string; en: string };
  a: { id: string; en: string };
}

export const FAQ_DATA: FaqItem[] = [
  {
    q: {
      id: 'Apakah SACETHYX menggantikan CAS (Controlled Atmosphere Storage)?',
      en: 'Does SACETHYX replace CAS (Controlled Atmosphere Storage)?'
    },
    a: {
      id: 'Tidak. SACETHYX tidak menggantikan CAS. CAS adalah infrastruktur utama pelanggan yang mengatur O₂, CO₂, suhu, dan kelembapan. SACETHYX berfungsi sebagai lapisan manajemen etilen yang melengkapi CAS untuk menyerap gas etilen dan memantau kualitas udara.',
      en: 'No. SACETHYX does not replace CAS. CAS is the customer\'s or partner\'s existing controlled-atmosphere infrastructure responsible for regulating O₂, CO₂, temperature, and humidity. SACETHYX functions as an ethylene-management layer that integrates with existing storage or CAS infrastructure to adsorb volatile ethylene and monitor air quality.'
    }
  },
  {
    q: {
      id: 'Apa senyawa yang diserap oleh kartrid SACETHYX?',
      en: 'What does the cartridge remove?'
    },
    a: {
      id: 'Target utama kartrid SACETHYX adalah gas etilen (C₂H₄) yang dilepaskan oleh buah klimakterik. Media karbon aktif dirancang berpori mikro/meso untuk mengikat molekul etilen secara fisis. Kinerja kapasitas adsorpsi spesifik ditentukan melalui validasi uji laboratorium.',
      en: 'The core target of the SACETHYX cartridge is volatile ethylene (C₂H₄) emitted by ripening climacteric fruits. Its activated carbon porous media is optimized for ethylene adsorption. Specific adsorption performance metrics are currently under laboratory and prototype validation.'
    }
  },
  {
    q: {
      id: 'Apakah SACETHYX dapat dipasang pada cold storage biasa?',
      en: 'Can it work with existing standard cold storage facilities?'
    },
    a: {
      id: 'Ya. Sistem SACETHYX dirancang untuk integrasi retrofit non-invasif pada cold storage konvensional maupun fasilitas CAS tingkat lanjut, didahului dengan penilaian teknis volume ruangan dan alur sirkulasi udara.',
      en: 'Yes. The SACETHYX system is designed specifically for non-invasive retrofit and integration with both standard cold-storage rooms and advanced CAS facilities, subject to a preliminary technical assessment of room volume, layout, and air recirculation configuration.'
    }
  },
  {
    q: {
      id: 'Seberapa sering kartrid perlu diganti?',
      en: 'How often does the cartridge need replacement?'
    },
    a: {
      id: 'Interval penggantian kartrid bergantung pada kapasitas adsorpsi teruji, volume dan laju respirasi buah yang disimpan, beban etilen ruangan, serta kondisi operasional. Modul sensor dan controller SACETHYX akan memantau durasi dan memperingatkan operator saat kartrid mendekati ambang batas penggantian.',
      en: 'The cartridge replacement interval depends on the validated adsorption capacity of the activated carbon media, the volume and respiration rate of stored fruit, room ethylene load, airflow rates, and ambient operating conditions. The SACETHYX SENSE and controller modules monitor operations and alert operators when a cartridge approaches its replacement threshold.'
    }
  },
  {
    q: {
      id: 'Apakah SACETHYX mengatur kadar oksigen dan karbon dioksida?',
      en: 'Does SACETHYX control oxygen and carbon dioxide?'
    },
    a: {
      id: 'Tidak. Gas atmosfer makro seperti O₂ dan CO₂ tetap berada di bawah kendali sistem CAS atau mesin pendingin utama. SACETHYX secara khusus berfokus pada adsorpsi etilen dan resirkulasi udara melintasi unggun karbon.',
      en: 'No. Macro-atmospheric gases such as oxygen (O₂) and carbon dioxide (CO₂) remain under the control of the facility\'s primary CAS or ventilation systems. SACETHYX primarily focuses on ethylene adsorption, controlled recirculation through the adsorbent bed, and ethylene monitoring.'
    }
  },
  {
    q: {
      id: 'Apakah sistem monitoring sensor wajib digunakan?',
      en: 'Is the monitoring system mandatory?'
    },
    a: {
      id: 'Sistem monitoring (SACETHYX SENSE dan CONTROLLER) dapat dipasang sebagai satu paket terintegrasi atau sebagai modul tambahan opsional sesuai dengan kebutuhan fasilitas dan infrastruktur telemetri yang telah dimiliki pelanggan.',
      en: 'The monitoring system (SACETHYX SENSE and CONTROLLER) can be deployed as a fully integrated package or customized as a modular addition based on customer requirements and existing facility telemetry capabilities.'
    }
  }
];
