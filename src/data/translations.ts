export const TRANSLATIONS = {
  id: {
    nav: {
      technology: 'Teknologi',
      solution: 'Solusi',
      components: 'Komponen',
      cas: 'Integrasi CAS',
      simulation: 'Simulator',
      dashboard: 'Dashboard',
      market: 'Peluang Pasar',
      impact: 'Ekonomi Sirkular',
      roadmap: 'Roadmap',
      insights: 'Artikel',
      faq: 'FAQ',
      partnerBtn: 'Bermitra Dengan Kami',
      demoBtn: 'Ajukan Demo',
    },
    hero: {
      eyebrow: 'MANAJEMEN ETILEN CERDAS UNTUK SISTEM PASCAPANEN',
      headline1: 'Kelola Etilen.',
      headline2: 'Jaga Nilai Panen.',
      supporting: 'Solusi cerdas manajemen etilen untuk penyimpanan pascapanen.',
      body: 'SACETHYX mengintegrasikan adsorpsi karbon aktif berbasis ampas tebu, resirkulasi udara terkontrol, dan monitoring cerdas untuk mengelola akumulasi etilen dalam ruang penyimpanan buah komersial.',
      demoCta: 'Ajukan Demo',
      exploreCta: 'Pelajari Teknologi',
      trust: {
        b2b: 'B2B Agritech',
        cas: 'Kompatibel CAS',
        modular: 'Sistem Modular',
        monitoring: 'Monitoring Cerdas'
      },
      diagram: {
        title: 'Arsitektur Siklus Resirkulasi Udara',
        subtitle: 'Simulasi Partikel Adsorpsi Tertutup',
        fruitBay: 'Ruang Simpan Buah',
        emission: 'Emisi gas etilen (C₂H₄)',
        intake: 'Aliran Udara Masuk',
        cartridgeUnit: 'UNIT KARTRID SACETHYX',
        cartridgeSubtitle: 'Adsorben Ampas Tebu',
        adsorbing: 'Partikel etilen diserap...',
        cleanReturn: 'Udara Rendah Etilen Dikembalikan ke Ruang Simpan',
        particleCaption: 'Visualisasi aliran partikel etilen (kuning) bertabrakan dan menyusut ke dalam mikropori karbon aktif ampas tebu, menyisakan udara bersih untuk dialirkan kembali.',
        collisionTag: 'EFEK TABRAKAN & ADSORPSI PARTIKEL',
        collisionDesc: 'Molekul C₂H₄ menyusut drastis dan terserap saat membentur mikropori karbon ampas tebu.',
        moleculesCaptured: 'Molekul C₂H₄ Diserap',
        adsorptionRate: 'Efisiensi Adsorpsi',
        speedSlow: '0.4x Lambat',
        speedNormal: '1.0x Normal',
        receptorsActive: 'Titik Reseptor Pori Aktif'
      }
    },
    problem: {
      eyebrow: 'TANTANGAN PASCAPANEN',
      title: 'Kehilangan pascapanen berakar dari kondisi ruang simpan.',
      subtitle: 'Mutu buah terus berubah setelah panen. Gas etilen memicu pematangan dini, pelunakan, dan penurunan nilai jual komersial.',
      sliderLabel: 'SIMULASI KONSENTRASI ETILEN RUANG SIMPAN',
      sliderLow: 'RENDAH (Terkontrol)',
      sliderHigh: 'TINGGI (Akumulasi Kritis)',
      conditionLabel: 'Status Ruang Simpan',
      ethyleneLabel: 'Tingkat Etilen',
      windowLabel: 'Estimasi Jendela Mutu Penjualan',
      rotRiskLabel: 'Tingkat Risiko Pelunakan/Pembusukan',
      disclaimer: '* Simulasi konseptual ilustratif untuk menjelaskan dinamika fisiologis etilen pada komoditas klimakterik.',
      cards: [
        {
          index: '01',
          title: 'Akumulasi Etilen',
          tag: 'Pemicu Fisiologis',
          desc: 'Etilen mempercepat pematangan dan penuaan dini pada buah klimakterik meski dalam konsentrasi rendah di ruang tertutup.'
        },
        {
          index: '02',
          title: 'Jendela Jual Menyempit',
          tag: 'Kerugian Komersial',
          desc: 'Penurunan mutu yang cepat memangkas waktu distribusi logistik dan memaksa penjualan obral dengan harga diskon.'
        },
        {
          index: '03',
          title: 'Keterbatasan Ruang Simpan',
          tag: 'Celah Infrastruktur',
          desc: 'Cold storage dan CAS standar fokus pada suhu serta O₂/CO₂, namun tidak otomatis menyerap akumulasi gas etilen.'
        },
        {
          index: '04',
          title: 'Kebocoran Ekonomi',
          tag: 'Dampak Finansial',
          desc: 'Penurunan kelas mutu (Grade A ke B) atau pembusukan langsung memangkas margin laba distributor dan operator cold store.'
        }
      ]
    },
    solution: {
      eyebrow: 'ARSITEKTUR RETROFIT MODULAR',
      title: 'Lapisan manajemen etilen untuk sistem penyimpanan yang sudah ada.',
      subtitle: 'Dirancang untuk melengkapi infrastruktur cold storage dan CAS tanpa perlu renovasi ruangan secara menyeluruh.',
      corePrinciple: 'Prinsip B2B Utama: “Dirancang untuk Mengintegrasi, Bukan Menggantikan.”',
      pipeline: [
        {
          step: '01',
          name: 'EXISTING STORAGE / CAS',
          desc: 'Ruang cold storage atau CAS yang menyimpan buah dengan gas etilen.',
          hover: 'Existing cold storage or controlled-atmosphere environment.'
        },
        {
          step: '02',
          name: 'RESIRKULASI UDARA',
          desc: 'Blower mengarahkan udara ruang simpan melewati kartrid adsorpsi.',
          hover: 'Mengarahkan udara ruang simpan melewati kartrid adsorpsi.'
        },
        {
          step: '03',
          name: 'KARTRID SACETHYX',
          desc: 'Komponen inti adsorpsi etilen berbahan karbon aktif ampas tebu.',
          hover: 'Komponen inti adsorpsi etilen berbasis karbon aktif ampas tebu.'
        },
        {
          step: '04',
          name: 'ADSORPSI ETILEN',
          desc: 'Pori mikro/meso mengikat molekul etilen tanpa bahan kimia sintetis.',
          hover: 'Mengikat molekul etilen pada struktur pori karbon secara fisik.'
        },
        {
          step: '05',
          name: 'UDARA TERKONDISI',
          desc: 'Udara bersih dengan konsentrasi etilen lebih rendah kembali ke ruangan.',
          hover: 'Mengembalikan udara rendah etilen ke ruang simpan.'
        }
      ]
    },
    cas: {
      eyebrow: 'KOMPATIBILITAS INFRASTRUKTUR',
      title: 'CAS mengontrol atmosfer. SACETHYX mengelola etilen.',
      subtitle: 'SACETHYX tidak menggantikan CAS. Sistem ini menambahkan fungsi adsorpsi etilen secara spesifik untuk perlindungan komprehensif.',
      toggleLabel: 'PILIH MODE SIMULASI SISTEM:',
      casOnlyBtn: 'Hanya CAS Standar',
      casPlusBtn: 'CAS + SACETHYX Terintegrasi',
      casBox: {
        tag: 'Infrastruktur Pengguna',
        title: 'CAS (Controlled Atmosphere Storage)',
        items: [
          'Pengaturan Oksigen (O₂) 1–3%',
          'Pengaturan Karbon Dioksida (CO₂) 1–5%',
          'Pengaturan Suhu Dingin Presisi',
          'Pengaturan Kelembapan Relatif (RH)',
          'Penyekatan Gas Ruangan'
        ],
        note: 'Fokus pada gas makro dan suhu ruangan.'
      },
      sacethyxBox: {
        tag: 'Lapisan Khusus Terintegrasi',
        title: 'SACETHYX Ethylene Layer',
        items: [
          'Adsorpsi Selektif Etilen (C₂H₄)',
          'Resirkulasi Udara Melewati Bed Karbon',
          'Monitoring Telemetri Etilen Real-Time',
          'Siklus Penggantian Kartrid Cepat',
          'Peringatan Dini Kejenuhan Adsorben'
        ],
        note: 'Fokus pada adsorpsi hormon etilen dan telemetri.'
      },
      synergy: {
        badge: 'PERSAMAAN ATMOSFER LENGKAP',
        headline: 'CAS + SACETHYX = Pengelolaan Atmosfer Pascapanen Lebih Komprehensif',
        text: 'Menghambat laju respirasi makro sekaligus memotong pemicu hormon pematangan etilen secara simultan.'
      }
    },
    components: {
      eyebrow: 'ARSITEKTUR PERANGKAT KERAS MODULAR',
      title: 'Komponen utama SACETHYX.',
      subtitle: 'Satu platform terpadu dengan 5 sub-komponen terintegrasi yang berpusat pada kartrid adsorben ampas tebu.',
      clickPrompt: 'Klik komponen untuk melihat rincian teknis dan visual resolusi tinggi:',
      list: [
        {
          id: 'cartridge',
          num: '01',
          name: 'SACETHYX CARTRIDGE',
          role: 'PRODUK UTAMA (CORE PRODUCT)',
          desc: 'Kartrid modular isi ulang berisi karbon aktif ampas tebu yang dirancang untuk adsorpsi etilen dan penggantian cepat tanpa henti operasional.',
          techFunction: 'Adsorpsi fisis etilen pada pori karbon spesifik',
          systemRole: 'Menyaring molekul etilen dari sirkulasi udara ruang simpan.'
        },
        {
          id: 'flow',
          num: '02',
          name: 'SACETHYX FLOW',
          role: 'MODUL RESIRKULASI UDARA',
          desc: 'Unit blower sentrifugal bergetaran rendah yang mengalirkan udara ruang simpan melewati unggun kartrid secara seragam.',
          techFunction: 'Kontrol debit dan kecepatan kontak udara',
          systemRole: 'Memastikan sirkulasi udara tertutup tanpa mengganggu stratifikasi suhu.'
        },
        {
          id: 'sense',
          num: '03',
          name: 'SACETHYX SENSE',
          role: 'MODUL SENSOR & TELEMETRI',
          desc: 'Probe multi-parameter industri untuk mengukur tren gas etilen, temperatur ruang simpan, dan kelembapan relatif secara kontinu.',
          techFunction: 'Deteksi gas etilen, temperatur, dan RH ruangan',
          systemRole: 'Mengirimkan data mentah atmosfer ke unit kontrol.'
        },
        {
          id: 'controller',
          num: '04',
          name: 'SACETHYX CONTROLLER',
          role: 'UNIT KONTROL & LOGIKA EDGE',
          desc: 'Mikrokontroler industri yang mengolah data sensor, mengatur durasi kipas, menghitung estimasi kapasitas kartrid, dan mengirim sinyal peringatan.',
          techFunction: 'Pemrosesan logika algoritma saturasi dan gateway IoT',
          systemRole: 'Mengendalikan operasional sistem dan memicu notifikasi pemeliharaan.'
        },
        {
          id: 'integration',
          num: '05',
          name: 'INTEGRATION LAYER',
          role: 'ANTARMUKA RETROFIT FASILITAS',
          desc: 'Duktus adaptor, braket pemasangan, dan flens kedap udara untuk integrasi non-invasif ke dinding cold storage atau ruang CAS.',
          techFunction: 'Koneksi kedap udara tanpa kebocoran atmosfer',
          systemRole: 'Menghubungkan unit SACETHYX dengan envelope ruangan pelanggan.'
        }
      ]
    },
    cutaway: {
      eyebrow: 'ANATOMI PERANGKAT',
      title: 'Bedah struktur modular kartrid SACETHYX.',
      subtitle: 'Eksplorasi lapisan internal kartrid adsorben etilen berbasis ampas tebu.',
      badge: 'PROTOTIPE KONSEPTUAL',
      layers: [
        {
          id: 'housing',
          name: 'Casing / Housing Eksternal',
          desc: 'Rangka polimer/aluminium dengan rel geser cepat (quick-release) yang dirancang untuk penggantian kartrid dalam hitungan menit.'
        },
        {
          id: 'filter',
          name: 'Penyaring Partikulat & Penahan Unggun',
          desc: 'Lapisan kasa mikron yang menahan butiran karbon dan menyaring debu ruangan tanpa menghambat laju alir udara.'
        },
        {
          id: 'carbon',
          name: 'Karbon Aktif Ampas Tebu (Adsorben Inti)',
          desc: 'Karbon berpori mikro/meso hasil pirolisis dan aktivasi ampas tebu (Saccharum) yang bertindak sebagai material penangkap molekul etilen.'
        },
        {
          id: 'channel',
          name: 'Kanal Distribusi Udara',
          desc: 'Saluran aerodinamis internal untuk memastikan aliran udara melintasi seluruh penampang unggun karbon secara merata.'
        },
        {
          id: 'outlet',
          name: 'Saluran Pembuangan Udara Bersih',
          desc: 'Port keluar yang menyalurkan udara dengan kadar etilen tereduksi kembali ke dalam sirkulasi cold storage.'
        }
      ]
    },
    dashboard: {
      eyebrow: 'TELEMETRI REAL-TIME PROTOTIPE',
      title: 'Lihat apa yang dipantau sistem penyimpanan Anda.',
      subtitle: 'Pengolahan kondisi atmosfer ruang simpan menjadi data operasional yang dapat ditindaklanjuti.',
      simulationTag: 'DATA SIMULASI / PROTOTIPE',
      simulationSub: 'Bukan hasil eksperimen statis',
      timeframes: ['6 JAM', '12 JAM', '24 JAM'],
      states: {
        normal: 'NORMAL',
        warning: 'WARNING',
        replacement: 'PENGGANTIAN KARTRID'
      },
      alertReplacement: 'Rekomendasi penggantian kartrid: Kapasitas adsorpsi mendekati batas ambang tervalidasi.',
      alertWarning: 'Peringatan: Kenaikan etilen terdeteksi pada Zona 2. Kecepatan resirkulasi dinaikkan.',
      metrics: {
        status: 'Status Ruang Simpan',
        temp: 'Temperatur',
        rh: 'Kelembapan Relatif',
        ethylene: 'Konsentrasi Etilen',
        airflow: 'Debit Udara Resirkulasi',
        cartridge: 'Status Kartrid',
        controller: 'Koneksi Controller'
      }
    },
    simulator: {
      eyebrow: 'SIMULASI KONSEPTUAL INTERAKTIF',
      title: 'SACETHYX Simulation Lab',
      subtitle: 'Uji respons sistem SACETHYX terhadap parameter volume ruangan, tingkat etilen awal, dan kapasitas kartrid.',
      disclaimerBadge: 'SIMULASI KONSEPTUAL INTERAKTIF',
      volLabel: 'Volume Ruang Simpan (m³)',
      ethLabel: 'Konsentrasi Etilen Awal (ppm)',
      flowLabel: 'Laju Alir Blower (m³/h)',
      cartridgeLabel: 'Kondisi Kartrid',
      cartridgeFresh: 'Baru (100% Kapasitas)',
      cartridgeUsed: 'Terpakai (Kapasitas Sebagian)',
      initialEth: 'Etilen Sebelum Melewati Kartrid',
      scrubbedEth: 'Etilen Setelah Melewati Kartrid',
      reductionRate: 'Estimasi Pengurangan per Siklus Aliran',
      note: '* Nilai merupakan pemodelan konseptual untuk visualisasi interaktif sistem, bukan klaim performa laboratorium terisolasi.'
    },
    techJourney: {
      eyebrow: 'PERJALANAN MATERIAL & TEKNOLOGI',
      title: 'Dari ampas tebu hingga manajemen pascapanen.',
      subtitle: 'Alur ilmiah terintegrasi yang mentransformasi limbah biomassa menjadi solusi bernilai industri tinggi.',
      stages: [
        {
          num: '01',
          name: 'Ampas Tebu (Bagasse)',
          desc: 'Residu serat lignoselulosa hasil penggilingan tebu yang melimpah di pabrik gula.'
        },
        {
          num: '02',
          name: 'Karbonisasi & Aktivasi',
          desc: 'Proses pirolisis terkontrol dan aktivasi kimia/termal untuk membuka rongga pori-pori.'
        },
        {
          num: '03',
          name: 'Struktur Karbon Berpori',
          desc: 'Pembentukan jaringan mikro dan mesopori dengan luas permukaan spesifik tinggi.'
        },
        {
          num: '04',
          name: 'Enkapsulasi Kartrid',
          desc: 'Pengisian karbon aktif ke dalam modul kartrid siap pakai berstandar industri.'
        },
        {
          num: '05',
          name: 'Adsorpsi Etilen Fisis',
          desc: 'Penangkapan molekul gas etilen dari udara sirkulasi tanpa zat kimia berbahaya.'
        },
        {
          num: '06',
          name: 'Monitoring Telemetri',
          desc: 'Sensor digital memantau tren gas dan durasi operasional secara terus-menerus.'
        },
        {
          num: '07',
          name: 'Manajemen Pascapanen',
          desc: 'Perpanjangan kesegaran buah komoditas ekspor dan penekanan kerugian susut bobot.'
        }
      ]
    },
    circular: {
      eyebrow: 'EKONOMI SIRKULAR INDUSTRI',
      title: 'Dari limbah pertanian menjadi teknologi bernilai.',
      subtitle: 'Membangun rantai nilai tertutup yang mengurangi limbah pabrik gula sekaligus menyelamatkan hasil panen hortikultura.',
      steps: [
        'Tanaman Tebu',
        'Pabrik Gula',
        'Ampas Tebu (Bagasse)',
        'Karbon Aktif Berpori',
        'Kartrid SACETHYX',
        'Adsorpsi Etilen Ruang Simpan',
        'Program Take-back Kartrid',
        'Pemulihan & Regenerasi Material'
      ]
    },
    supplyChain: {
      eyebrow: 'RANTAI PASOK HORTIKULTURA',
      title: 'Dirancang untuk rantai pasok buah komersial.',
      subtitle: 'Identifikasi titik rawan akumulasi etilen dari perkebunan hingga pasar ekspor.',
      steps: [
        {
          id: 'farm',
          title: 'Kebun / Panen',
          challenge: 'Respirasi awal buah pascapetik memicu sintesis etilen internal.',
          application: 'Penanganan awal dan pra-pendinginan cepat (pre-cooling).'
        },
        {
          id: 'packhouse',
          title: 'Packhouse',
          challenge: 'Sortasi dan pengemasan dalam ruang tertutup mengkonsentrasikan gas.',
          application: 'Menjaga kekerasan daging buah sebelum dikirim ke distributor.'
        },
        {
          id: 'coldstorage',
          title: 'Cold Storage & CAS',
          challenge: 'Penyimpanan berhari-hari hingga berminggu-minggu dengan risiko penumpukan etilen.',
          application: 'Lapisan adsorpsi kontinu untuk memperpanjang batas simpan.'
        },
        {
          id: 'distribution',
          title: 'Distribusi / Grosir',
          challenge: 'Pencampuran berbagai komoditas di gudang memicu pematangan silang.',
          application: 'Mencegah kerusakan inventaris campur di terminal distribusi.'
        },
        {
          id: 'export',
          title: 'Ekspor / Impor',
          challenge: 'Perjalanan kontainer berpendingin jarak jauh menuntut toleransi mutu tinggi.',
          application: 'Mempertahankan spesifikasi Grade A hingga tiba di pelabuhan tujuan.'
        }
      ]
    },
    businessModel: {
      eyebrow: 'ARSITEKTUR BISNIS INVESTOR',
      title: 'Dibangun untuk nilai B2B berulang (Recurring Value).',
      subtitle: 'Model bisnis hibrida dengan kombinasi integrasi perangkat keras awal dan pendapatan berulang dari kartrid.',
      steps: [
        { name: 'SISTEM AWAL', role: 'Paket Perangkat & Integrasi Ruangan' },
        { name: 'INSTALASI FASILITAS', role: 'Duktus, Kalibrasi Sensor, & Uji Aliran' },
        { name: 'PENGGANTIAN KARTRID', role: 'Pendapatan Berulang (Recurring Revenue)' },
        { name: 'MAINTENANCE & SLA', role: 'Layanan Kalibrasi & Telemetri Tahunan' },
        { name: 'EKSPANSI RUANGAN', role: 'Penambahan Ruang Simpan / Cabang Baru' }
      ],
      recurringHighlight: 'RECURRING CONSUMABLE CORE',
      recurringDesc: 'Penggantian kartrid secara berkala menciptakan hubungan kemitraan B2B jangka panjang yang dapat diprediksi seiring siklus panen pelanggan.'
    },
    market: {
      eyebrow: 'UKURAN PASAR & PROKSI RISET',
      title: 'Menjawab tantangan pascapanen hortikultura.',
      subtitle: 'Estimasi pasar berdasarkan data bisnis hortikultura dan rantai dingin komersial.',
      proxyNotice: 'PROKSI PASAR KERJA (WORKING ESTIMATE)',
      disclaimer: 'Angka estimasi akan terus disempurnakan melalui data tingkat fasilitas dan wawancara customer discovery lapangan.',
      tam: {
        title: 'TAM (Total Addressable Market)',
        value: '1.939',
        unit: 'Bisnis Hortikultura Terkait Buah di Indonesia',
        desc: 'Proksi unit bisnis hortikultura pascapanen, cold storage, dan grosir nasional.'
      },
      sam: {
        title: 'SAM (Serviceable Addressable Market)',
        value: '889',
        unit: 'Bisnis Hortikultura di Pulau Jawa',
        desc: 'Konsentrasi fasilitas penyimpanan di koridor logistik dan dekat sentra pabrik gula.'
      },
      som: {
        title: 'SOM (Serviceable Obtainable Market)',
        value: '10',
        unit: 'Fasilitas Pilot Target Awal',
        desc: 'Operator cold storage dan packhouse perintis untuk program validasi lapangan.'
      }
    },
    investorStory: {
      eyebrow: 'TESIS INVESTASI B2B',
      title: 'Dari inovasi material menuju platform B2B terukur.',
      subtitle: 'Kombinasi material daur ulang bernilai tinggi, perangkat keras modular, dan pendapatan berulang.',
      pillars: [
        { title: 'Masalah Nyata', desc: 'Kebocoran ekonomi akibat susut mutu pascapanen yang dapat diukur secara finansial.' },
        { title: 'Teknologi Terpadu', desc: 'Platform modular berbasis kartrid adsorben ampas tebu terstandarisasi.' },
        { title: 'Pendapatan Berulang', desc: 'Model konsumsi kartrid berkala didukung kontrak pemeliharaan fasilitas.' },
        { title: 'Skalabilitas', desc: 'Dapat diadaptasi untuk aneka kapasitas ruangan, komoditas, dan konfigurasi fasilitas.' }
      ],
      whyNow: 'Mengapa Sekarang? Meningkatnya standar mutu retail, tuntutan reduksi food loss, dan kesiapan sensor IoT industri.'
    },
    roadmap: {
      eyebrow: 'ROADMAP PENGEMBANGAN',
      title: 'Dari validasi material hingga implementasi komersial.',
      subtitle: 'Tahapan riset, prototipe, dan komersialisasi dengan diferensiasi status yang jelas.',
      statuses: {
        completed: 'Tervalidasi',
        inDev: 'Dalam Pengembangan',
        planned: 'Direncanakan'
      },
      phases: [
        { phase: 'Fase 01', title: 'Pengembangan Material', status: 'completed', desc: 'Sintesis karbon aktif ampas tebu, aktivasi pori, dan karakterisasi awal.' },
        { phase: 'Fase 02', title: 'Validasi Adsorpsi', status: 'inDev', desc: 'Pengujian dynamic breakthrough etilen dan kinetika adsorpsi skala laboratorium.' },
        { phase: 'Fase 03', title: 'Prototipe Terpadu', status: 'inDev', desc: 'Rancang bangun kartrid modular, modul blower aliran, sensor, dan controller.' },
        { phase: 'Fase 04', title: 'Uji Coba Mini-Chamber', status: 'planned', desc: 'Pengujian performa pada ruang simpan terkontrol dengan buah klimakterik nyata.' },
        { phase: 'Fase 05', title: 'Validasi B2B Lapangan', status: 'planned', desc: 'Instalasi pilot pada 10 fasilitas mitra cold storage & pengujian willingness-to-pay.' },
        { phase: 'Fase 06', title: 'Skala Komersial', status: 'planned', desc: 'Manufaktur batch kartrid, jaringan logistik reverse-takeback, dan kemitraan skala regional.' }
      ]
    },
    team: {
      eyebrow: 'TIM MULTIDISIPLIN',
      title: 'Dibangun oleh tim lintas disiplin ilmu.',
      subtitle: 'Memadukan keahlian pascapanen pangan, teknik kimia & material, IoT tertanam, dan teknik industri.',
      roles: [
        { role: 'Business & Food Technology', domain: 'Strategi komersial, biokimia pascapanen, dan penemuan pelanggan industri hortikultura.' },
        { role: 'Materials & Process', domain: 'Sintesis karbon aktif biomassa ampas tebu, rekayasa pori, dan uji kinetika adsorpsi.' },
        { role: 'IoT & Digital Systems', domain: 'Arsitektur sensor gas, mikrokontroler edge, firmware blower, dan dashboard telemetri.' },
        { role: 'Industrial Engineering & Operations', domain: 'Desain manufaktur modular, rantai pasok ampas tebu, dan unit economics per kartrid.' },
        { role: 'Agroindustry & Quality', domain: 'Uji fisiologi buah, penetrometer kekerasan, susut bobot, dan protokol uji cold storage.' }
      ]
    },
    insights: {
      eyebrow: 'ARTIKEL & WAWASAN TEKNIS',
      title: 'Wawasan dari teknologi pascapanen.',
      subtitle: 'Analisis mendalam mengenai penyerapan etilen, integrasi CAS, dan valorisasi ampas tebu.',
      readMore: 'Baca Artikel Lengkap →'
    },
    faq: {
      eyebrow: 'PERTANYAAN UMUM',
      title: 'Tanya Jawab Teknis & Operasional',
      subtitle: 'Klarifikasi seputar kompatibilitas CAS, target gas, dan penggantian kartrid.'
    },
    finalCta: {
      badge: 'KOLABORASI PENYIMPANAN PASCAPANEN',
      headline: 'Mari bangun sistem penyimpanan pascapanen yang lebih baik.',
      body: 'Diskusikan bagaimana SACETHYX dapat diintegrasikan ke dalam fasilitas cold storage atau Controlled Atmosphere Storage (CAS) Anda.',
      demoBtn: 'Ajukan Demo Fasilitas',
      partnerBtn: 'Bermitra Dengan Kami',
      subtext: 'Terbuka untuk operator cold-chain, packhouse, distributor, eksportir buah, mitra teknologi, dan investor agritech.'
    },
    footer: {
      brandDesc: 'Sistem Manajemen Etilen Cerdas untuk Fasilitas Pascapanen.',
      subDesc: 'Platform teknologi B2B yang mengintegrasikan kartrid adsorben karbon aktif ampas tebu, resirkulasi udara, dan telemetri cerdas.',
      navTitle: 'Navigasi Platform',
      businessTitle: 'Kemitraan & Bisnis',
      connectTitle: 'Hubungi Kami',
      legalDesc: '© 2026 SACETHYX. Hak cipta dilindungi undang-undang.',
      legalNote: 'Dikembangkan sebagai platform inovasi B2B agritech tahap awal.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      cookies: 'Kebijakan Cookie'
    },
    modal: {
      title: 'Permintaan Uji Coba / Demo Fasilitas',
      subtitle: 'Konsultasikan kebutuhan ruang simpan Anda bersama tim teknis SACETHYX.',
      nameLabel: 'Nama Lengkap *',
      emailLabel: 'Email Kerja / Perusahaan *',
      orgLabel: 'Nama Perusahaan / Organisasi *',
      phoneLabel: 'Nomor Telepon / WhatsApp *',
      roleLabel: 'Jenis Fasilitas / Pemangku Kepentingan',
      commodityLabel: 'Komoditas Buah Utama',
      messageLabel: 'Detail Ruangan (Volume m³, Suhu, atau Tantangan Mutu)',
      submitBtn: 'Kirim Permintaan Konsultasi Teknis',
      submittingBtn: 'Memproses Permintaan...',
      successTitle: 'Permintaan Berhasil Dikirim',
      successDesc: 'Tim teknis kami akan meninjau profil fasilitas Anda dan menghubungi via email/WhatsApp dalam 1 hari kerja.',
      closeBtn: 'Kembali ke Situs'
    }
  },
  en: {
    nav: {
      technology: 'Technology',
      solution: 'Solution',
      components: 'Components',
      cas: 'CAS Integration',
      simulation: 'Simulator',
      dashboard: 'Dashboard',
      market: 'Market Opportunity',
      impact: 'Circular Economy',
      roadmap: 'Roadmap',
      insights: 'Insights',
      faq: 'FAQ',
      partnerBtn: 'Partner With Us',
      demoBtn: 'Request a Demo',
    },
    hero: {
      eyebrow: 'SMART ETHYLENE MANAGEMENT FOR POST-HARVEST SYSTEMS',
      headline1: 'Managing Ethylene.',
      headline2: 'Protecting Value.',
      supporting: 'Smart ethylene management for post-harvest storage.',
      body: 'SACETHYX integrates sugarcane-bagasse-based activated carbon adsorption, controlled airflow, and smart monitoring to help manage ethylene in fruit storage environments.',
      demoCta: 'Request a Demo',
      exploreCta: 'Explore Technology',
      trust: {
        b2b: 'B2B Agritech',
        cas: 'CAS-Compatible',
        modular: 'Modular System',
        monitoring: 'Smart Monitoring'
      },
      diagram: {
        title: 'Airflow Recirculation Loop Architecture',
        subtitle: 'Enclosed Particle Adsorption Simulation',
        fruitBay: 'Fruit Storage Bay',
        emission: 'Ethylene gas emission (C₂H₄)',
        intake: 'Controlled Air Intake',
        cartridgeUnit: 'SACETHYX CARTRIDGE UNIT',
        cartridgeSubtitle: 'Bagasse Bio-Adsorbent',
        adsorbing: 'Ethylene particles adsorbed...',
        cleanReturn: 'Lower-Ethylene Air Recirculated to Storage',
        particleCaption: 'Visual representation of ethylene particles (amber) colliding with and shrinking into sugarcane bagasse micropores, leaving decontaminated clean air to return to storage.',
        collisionTag: 'PARTICLE COLLISION & ADSORPTION EFFECT',
        collisionDesc: 'C₂H₄ molecules visibly shrink and disappear into bagasse carbon micropores upon physical impact.',
        moleculesCaptured: 'C₂H₄ Molecules Trapped',
        adsorptionRate: 'Adsorption Efficiency',
        speedSlow: '0.4x Slow-Mo',
        speedNormal: '1.0x Normal',
        receptorsActive: 'Active Micropore Sites'
      }
    },
    problem: {
      eyebrow: 'THE POST-HARVEST DILEMMA',
      title: 'Post-harvest loss starts with the storage environment.',
      subtitle: 'Fruit quality continues to change after harvest. Ambient ethylene accelerates ripening, pulp softening, and market value degradation.',
      sliderLabel: 'SIMULATED STORAGE ETHYLENE CONCENTRATION',
      sliderLow: 'LOW (Regulated)',
      sliderHigh: 'HIGH (Critical Accumulation)',
      conditionLabel: 'Storage Atmosphere Condition',
      ethyleneLabel: 'Ethylene Concentration',
      windowLabel: 'Estimated Commercial Selling Window',
      rotRiskLabel: 'Softening & Spoilage Vulnerability',
      disclaimer: '* Conceptual simulation for illustrating post-harvest physiological dynamics in climacteric commodities.',
      cards: [
        {
          index: '01',
          title: 'Ethylene Accumulation',
          tag: 'Physiological Trigger',
          desc: 'Ethylene accelerates ripening and senescence in climacteric fruits even at trace parts-per-million levels in sealed storage.'
        },
        {
          index: '02',
          title: 'Shorter Selling Window',
          tag: 'Commercial Limitation',
          desc: 'Rapid quality deterioration reduces available distribution time and forces emergency distress selling at discounted rates.'
        },
        {
          index: '03',
          title: 'Existing Storage Limitations',
          tag: 'Infrastructure Gap',
          desc: 'Cold storage and CAS control macro-temperatures and O₂/CO₂, but do not automatically capture volatile ethylene gas.'
        },
        {
          index: '04',
          title: 'Economic Value Leakage',
          tag: 'Financial Impact',
          desc: 'Produce grade downgrades (Class A to B) and rot loss severely erode distributor and cold storage facility operating margins.'
        }
      ]
    },
    solution: {
      eyebrow: 'MODULAR RETROFIT ARCHITECTURE',
      title: 'An ethylene-management layer for existing storage.',
      subtitle: 'Engineered to integrate seamlessly with cold storage and CAS infrastructure without demanding costly room reconstruction.',
      corePrinciple: 'Core B2B Principle: “Designed to Integrate, Not Replace.”',
      pipeline: [
        {
          step: '01',
          name: 'EXISTING STORAGE / CAS',
          desc: 'Commercial cold storage or CAS holding fruit and accumulating ethylene gas.',
          hover: 'Existing cold storage or controlled-atmosphere environment.'
        },
        {
          step: '02',
          name: 'AIR RECIRCULATION',
          desc: 'Blower module draws storage air across the adsorption cartridge bed.',
          hover: 'Directs storage air through the adsorption cartridge.'
        },
        {
          step: '03',
          name: 'SACETHYX CARTRIDGE',
          desc: 'Core ethylene adsorption component loaded with sugarcane bagasse carbon.',
          hover: 'Core ethylene adsorption component.'
        },
        {
          step: '04',
          name: 'ETHYLENE ADSORPTION',
          desc: 'Porous carbon matrix captures volatile C₂H₄ without chemical additives.',
          hover: 'Binds volatile ethylene molecules within micro/mesopores.'
        },
        {
          step: '05',
          name: 'CONDITIONED AIR',
          desc: 'Clean air with lowered ethylene concentration returns into room circulation.',
          hover: 'Returns scrubbed, lower-ethylene air to storage.'
        }
      ]
    },
    cas: {
      eyebrow: 'INFRASTRUCTURE COMPATIBILITY',
      title: 'CAS controls the atmosphere. SACETHYX manages ethylene.',
      subtitle: 'SACETHYX does not replace CAS. It adds an ethylene-management function to existing controlled-atmosphere environments.',
      toggleLabel: 'SELECT SIMULATION MODE:',
      casOnlyBtn: 'CAS Only (Standard)',
      casPlusBtn: 'CAS + SACETHYX (Integrated)',
      casBox: {
        tag: 'User Infrastructure',
        title: 'CAS (Controlled Atmosphere Storage)',
        items: [
          'Oxygen Regulation (O₂) 1–3%',
          'Carbon Dioxide Regulation (CO₂) 1–5%',
          'Precision Cold Temperature Control',
          'Relative Humidity Regulation (RH)',
          'Gas-Tight Room Enclosure'
        ],
        note: 'Governs macroscopic atmospheric gases and thermal profiles.'
      },
      sacethyxBox: {
        tag: 'Integrated Dedicated Layer',
        title: 'SACETHYX Ethylene Layer',
        items: [
          'Selective Ethylene Adsorption (C₂H₄)',
          'Air Recirculation Across Carbon Bed',
          'Real-Time Ethylene Trend Telemetry',
          'Tool-Free Quick Cartridge Swap Cycle',
          'Predictive Saturation Threshold Alerts'
        ],
        note: 'Focuses on volatile hormone capture and telemetry.'
      },
      synergy: {
        badge: 'THE COMPREHENSIVE ATMOSPHERE FORMULA',
        headline: 'CAS + SACETHYX = Complementary Post-Harvest Storage Management',
        text: 'Suppresses macroscopic fruit respiration while simultaneously mitigating hormone-driven senescence triggers.'
      }
    },
    components: {
      eyebrow: 'MODULAR HARDWARE ARCHITECTURE',
      title: 'Inside the SACETHYX system.',
      subtitle: 'One unified agritech platform comprising 5 integrated components centered around the replaceable bagasse cartridge.',
      clickPrompt: 'Click a component to inspect technical specifications and dedicated high-res renders:',
      list: [
        {
          id: 'cartridge',
          num: '01',
          name: 'SACETHYX CARTRIDGE',
          role: 'CORE PRODUCT',
          desc: 'Replaceable modular cartridge packed with sugarcane-bagasse-derived activated carbon, engineered for rapid tool-free replacement.',
          techFunction: 'Physical ethylene adsorption in tuned pore structures',
          systemRole: 'Traps volatile ethylene molecules from recirculating room air.'
        },
        {
          id: 'flow',
          num: '02',
          name: 'SACETHYX FLOW',
          role: 'RECIRCULATION MODULE',
          desc: 'Low-vibration centrifugal blower unit directing room air across the cartridge bed at uniform contact residence velocities.',
          techFunction: 'Airflow velocity and contact-time regulation',
          systemRole: 'Enforces closed-loop air exchange without disrupting thermal layers.'
        },
        {
          id: 'sense',
          num: '03',
          name: 'SACETHYX SENSE',
          role: 'SENSOR & TELEMETRY MODULE',
          desc: 'Industrial multi-parameter sensor probe unit measuring ethylene gas trends, ambient temperature, and relative humidity.',
          techFunction: 'Ethylene gas, temperature, and RH sensing',
          systemRole: 'Feeds continuous atmospheric telemetry into the controller.'
        },
        {
          id: 'controller',
          num: '04',
          name: 'SACETHYX CONTROLLER',
          role: 'CONTROL & EDGE LOGIC UNIT',
          desc: 'Edge microcontroller that aggregates sensor data, adjusts blower duty cycles, estimates saturation thresholds, and broadcasts alerts.',
          techFunction: 'Saturation algorithm execution & IoT gateway',
          systemRole: 'Controls hardware behavior and triggers timely maintenance alerts.'
        },
        {
          id: 'integration',
          num: '05',
          name: 'INTEGRATION LAYER',
          role: 'FACILITY RETROFIT INTERFACE',
          desc: 'Adaptor ducting, mounting brackets, and airtight flange connectors designed for non-invasive mounting on cold storage or CAS envelopes.',
          techFunction: 'Gas-tight duct transition without envelope leakage',
          systemRole: 'Connects the SACETHYX hardware to client storage bays.'
        }
      ]
    },
    cutaway: {
      eyebrow: 'HARDWARE ANATOMY',
      title: 'SACETHYX cartridge cutaway exploration.',
      subtitle: 'Explore the engineered layers of our bio-adsorbent ethylene cartridge.',
      badge: 'CONCEPTUAL PROTOTYPE',
      layers: [
        {
          id: 'housing',
          name: 'Cartridge Housing Enclosure',
          desc: 'Modular polymer/aluminum frame with quick-release rail guides designed for zero-downtime cartridge swaps.'
        },
        {
          id: 'filter',
          name: 'Particulate Filter & Bed Retainer',
          desc: 'Micron mesh preventing carbon particle migration while maintaining low pressure drop across the air path.'
        },
        {
          id: 'carbon',
          name: 'Sugarcane Bagasse Activated Carbon',
          desc: 'High surface area micro/mesoporous carbon synthesized from Saccharum bagasse, acting as the primary ethylene adsorbent.'
        },
        {
          id: 'channel',
          name: 'Internal Airflow Distribution Channels',
          desc: 'Aerodynamic baffles distributing air evenly across the entire carbon bed cross-section to eliminate channeling.'
        },
        {
          id: 'outlet',
          name: 'Conditioned Air Discharge Outlet',
          desc: 'Diffuser port releasing scrubbed, lower-ethylene air back into the room circulation pattern.'
        }
      ]
    },
    dashboard: {
      eyebrow: 'PROTOTYPE TELEMETRY CONSOLE',
      title: 'See what your storage system sees.',
      subtitle: 'Transforming storage atmosphere conditions into actionable post-harvest operational intelligence.',
      simulationTag: 'SIMULATION DATA',
      simulationSub: 'Illustrative prototype telemetry',
      timeframes: ['6 HOURS', '12 HOURS', '24 HOURS'],
      states: {
        normal: 'NORMAL',
        warning: 'WARNING',
        replacement: 'CARTRIDGE REPLACEMENT'
      },
      alertReplacement: 'Cartridge replacement recommended. Adsorption capacity approaching validated replacement threshold.',
      alertWarning: 'Warning: Ethylene spike detected in Zone 2. Airflow recirculation boosted.',
      metrics: {
        status: 'Storage Status',
        temp: 'Temperature',
        rh: 'Relative Humidity',
        ethylene: 'Ethylene (C₂H₄)',
        airflow: 'Recirculation Airflow',
        cartridge: 'Cartridge Status',
        controller: 'Controller State'
      }
    },
    simulator: {
      eyebrow: 'INTERACTIVE CONCEPTUAL SIMULATION',
      title: 'SACETHYX Simulation Lab',
      subtitle: 'Simulate system behavior across storage volumes, initial ethylene loads, and cartridge conditions.',
      disclaimerBadge: 'INTERACTIVE CONCEPTUAL SIMULATION',
      volLabel: 'Storage Room Volume (m³)',
      ethLabel: 'Initial Ethylene Load (ppm)',
      flowLabel: 'Blower Airflow (m³/h)',
      cartridgeLabel: 'Cartridge Condition',
      cartridgeFresh: 'Fresh (100% Capacity)',
      cartridgeUsed: 'Used (Partial Capacity)',
      initialEth: 'Ethylene Before Cartridge',
      scrubbedEth: 'Ethylene After Passing Cartridge',
      reductionRate: 'Estimated Single-Pass Reduction Rate',
      note: '* Values represent conceptual prototype simulations for interactive visualization, not formal experimental claims.'
    },
    techJourney: {
      eyebrow: 'MATERIALS & TECHNOLOGY JOURNEY',
      title: 'From sugarcane waste to post-harvest management.',
      subtitle: 'A continuous scientific pathway transforming agricultural residue into high-value preservation technology.',
      stages: [
        {
          num: '01',
          name: 'Sugarcane Bagasse',
          desc: 'Abundant lignocellulosic agro-industrial fiber residue from sugar mill cane extraction.'
        },
        {
          num: '02',
          name: 'Carbonization & Activation',
          desc: 'Controlled thermal pyrolysis and chemical/steam activation developing porous internal structure.'
        },
        {
          num: '03',
          name: 'Porous Carbon Matrix',
          desc: 'Formation of micro and mesoporous networks tailored for low-molecular volatile hydrocarbon capture.'
        },
        {
          num: '04',
          name: 'Cartridge Encasement',
          desc: 'Packing adsorbent media into standardized quick-swap modular cartridge hardware.'
        },
        {
          num: '05',
          name: 'Physical Ethylene Adsorption',
          desc: 'Trapping volatile C₂H₄ from recirculating storage air without hazardous chemical additives.'
        },
        {
          num: '06',
          name: 'Smart Telemetry Monitoring',
          desc: 'Digital sensor arrays tracking ethylene trends and cumulative operational hours.'
        },
        {
          num: '07',
          name: 'Post-Harvest Management',
          desc: 'Prolonging export fruit shelf life and reducing physiological loss across commercial facilities.'
        }
      ]
    },
    circular: {
      eyebrow: 'INDUSTRIAL CIRCULAR ECONOMY',
      title: 'From agricultural waste to functional technology.',
      subtitle: 'Establishing a closed-loop value chain upcycling sugar mill byproducts into commercial post-harvest preservation.',
      steps: [
        'Sugarcane Cultivation',
        'Sugar Mill Processing',
        'Sugarcane Bagasse',
        'Activated Carbon Synthesis',
        'SACETHYX Cartridge',
        'Ethylene Adsorption in Storage',
        'Cartridge Take-Back Program',
        'Material Recovery & Regeneration'
      ]
    },
    supplyChain: {
      eyebrow: 'HORTICULTURE VALUE CHAIN',
      title: 'Designed for the commercial fruit supply chain.',
      subtitle: 'Targeting vulnerable ethylene accumulation points from farm staging to global export.',
      steps: [
        {
          id: 'farm',
          title: 'Farm / Harvest',
          challenge: 'Post-harvest respiration triggers immediate endogenous ethylene synthesis.',
          application: 'Pre-cooling and staging mitigation before packhouse transport.'
        },
        {
          id: 'packhouse',
          title: 'Packhouse',
          challenge: 'Sorting, washing, and boxed holding bays concentrate volatile emissions.',
          application: 'Preserves pulp firmness and rind cosmetic grade prior to dispatch.'
        },
        {
          id: 'coldstorage',
          title: 'Cold Storage & CAS',
          challenge: 'Multi-week holding risks sudden softening and cross-batch ripening surges.',
          application: 'Continuous closed-loop adsorption layer extending safe holding windows.'
        },
        {
          id: 'distribution',
          title: 'Wholesale & Distribution',
          challenge: 'Mixed commodity bays cause cross-ethylene ripening acceleration.',
          application: 'Isolates inventory and prevents premature softening across warehouse bays.'
        },
        {
          id: 'export',
          title: 'Export / Import Logistics',
          challenge: 'Reefer container transit demands strict Class-A firmness tolerances upon arrival.',
          application: 'Protects commercial value throughout port staging and international shipping.'
        }
      ]
    },
    businessModel: {
      eyebrow: 'INVESTOR BUSINESS MODEL',
      title: 'Built for recurring B2B value.',
      subtitle: 'A hybrid agritech model combining upfront hardware integration with high-margin recurring cartridge replenishment.',
      steps: [
        { name: 'INITIAL SYSTEM', role: 'Hardware Enclosure & Subsystem Package' },
        { name: 'INSTALLATION & INTEGRATION', role: 'Duct Retrofit, Calibration & Commissioning' },
        { name: 'CARTRIDGE REPLACEMENT', role: 'Recurring Core Consumable Revenue' },
        { name: 'MAINTENANCE & SLA', role: 'Annual Sensor Recalibration & Support' },
        { name: 'FACILITY EXPANSION', role: 'Fleet Expansion to Additional Cold Rooms' }
      ],
      recurringHighlight: 'RECURRING REVENUE AT SCALE',
      recurringDesc: 'Routine cartridge replenishment creates an ongoing, predictable B2B relationship tied directly to customer harvest and storage volume cycles.'
    },
    market: {
      eyebrow: 'MARKET OPPORTUNITY & PROXIES',
      title: 'Addressing a growing post-harvest challenge.',
      subtitle: 'Working market estimates grounded in commercial horticulture enterprise registrations.',
      proxyNotice: 'WORKING MARKET PROXY',
      disclaimer: 'Market sizing will be continually refined using validated facility-level data and ongoing customer discovery.',
      tam: {
        title: 'TAM (Total Addressable Market)',
        value: '1,939',
        unit: 'Fruit-Related Horticulture Businesses in Indonesia',
        desc: 'National commercial proxy of post-harvest, packhouse, and cold storage facilities.'
      },
      sam: {
        title: 'SAM (Serviceable Addressable Market)',
        value: '889',
        unit: 'Horticulture Businesses in Java',
        desc: 'High-density facility corridor proximate to sugar mills and major logistics arteries.'
      },
      som: {
        title: 'SOM (Serviceable Obtainable Market)',
        value: '10',
        unit: 'Initial Target Pilot Facilities',
        desc: 'Early-adopter commercial cold storage and packhouse partners for trial deployment.'
      }
    },
    investorStory: {
      eyebrow: 'INVESTMENT THESIS',
      title: 'Why SACETHYX can become a scalable B2B platform.',
      subtitle: 'Bridging upcycled material science, modular industrial hardware, and recurring SaaS/consumable economics.',
      pillars: [
        { title: 'The Problem', desc: 'Post-harvest quality loss creates measurable economic leakage in commercial cold chains.' },
        { title: 'The Technology', desc: 'A modular ethylene-management platform built around proprietary bagasse bio-carbon.' },
        { title: 'Business Model', desc: 'Initial system sales supported by recurring cartridge replenishment and technical SLAs.' },
        { title: 'Scalability', desc: 'Platform easily adapts across varying room volumes, commodities, and facility layouts.' }
      ],
      whyNow: 'Why Now? Stricter supermarket quality grading, food loss reduction mandates, and IoT sensing maturity.'
    },
    roadmap: {
      eyebrow: 'DEVELOPMENT ROADMAP',
      title: 'From validation to deployment.',
      subtitle: 'A disciplined milestone pathway from laboratory synthesis to regional commercial scale.',
      statuses: {
        completed: 'Validated',
        inDev: 'In Development',
        planned: 'Planned'
      },
      phases: [
        { phase: 'Phase 01', title: 'Material Development', status: 'completed', desc: 'Sugarcane bagasse activated carbon synthesis, activation protocols, and pore characterization.' },
        { phase: 'Phase 02', title: 'Adsorption Validation', status: 'inDev', desc: 'Dynamic ethylene breakthrough testing and kinetic capacity modeling under lab storage conditions.' },
        { phase: 'Phase 03', title: 'Prototype Engineering', status: 'inDev', desc: 'Integrated cartridge enclosure, recirculation blower, multi-sensor probes, and edge controller.' },
        { phase: 'Phase 04', title: 'Mini-Chamber Trials', status: 'planned', desc: 'Controlled storage testing with actual climacteric fruit batches to verify ethylene suppression.' },
        { phase: 'Phase 05', title: 'B2B Field Pilots', status: 'planned', desc: 'Pilot deployment across 10 partner cold stores with willingness-to-pay validation.' },
        { phase: 'Phase 06', title: 'Commercial Scale', status: 'planned', desc: 'Batch cartridge manufacturing, reverse-logistics take-back fulfillment, and regional distribution.' }
      ]
    },
    team: {
      eyebrow: 'MULTIDISCIPLINARY TEAM',
      title: 'Built by a multidisciplinary team.',
      subtitle: 'Uniting post-harvest food science, materials chemistry, embedded IoT systems, and industrial engineering.',
      roles: [
        { role: 'Business & Food Technology', domain: 'Commercial strategy, post-harvest biochemistry, and horticulture industry customer discovery.' },
        { role: 'Materials & Process', domain: 'Sugarcane bagasse activated carbon synthesis, pore engineering, and adsorption kinetic testing.' },
        { role: 'IoT & Digital Systems', domain: 'Gas sensing arrays, embedded microcontrollers, airflow fan algorithms, and telemetry dashboards.' },
        { role: 'Industrial Engineering & Operations', domain: 'Modular hardware manufacturing, bagasse supply chain integration, and unit economics.' },
        { role: 'Agroindustry & Quality', domain: 'Fruit firmness assays, post-harvest trial design, physiological loss tracking, and facility protocols.' }
      ]
    },
    insights: {
      eyebrow: 'TECHNICAL PAPERS & INSIGHTS',
      title: 'Insights from post-harvest technology.',
      subtitle: 'Engineering analyses on ethylene adsorption, controlled atmosphere dynamics, and bagasse upcycling.',
      readMore: 'Read Technical Paper →'
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions',
      subtitle: 'Authoritative clarifications on CAS compatibility, gas targets, and operational cycles.'
    },
    finalCta: {
      badge: 'POST-HARVEST DEPLOYMENT',
      headline: 'Let’s build better post-harvest storage.',
      body: 'Explore how SACETHYX can be integrated into your storage or controlled-atmosphere operation.',
      demoBtn: 'Request a Demo',
      partnerBtn: 'Partner With Us',
      subtext: 'For cold-chain operators, packhouses, distributors, exporters, technology partners, and investors.'
    },
    footer: {
      brandDesc: 'Smart Ethylene Management for Post-Harvest Systems.',
      subDesc: 'A B2B agritech platform integrating bagasse activated carbon cartridges, airflow recirculation, and smart telemetry.',
      navTitle: 'Platform Navigation',
      businessTitle: 'Partnerships & Inquiries',
      connectTitle: 'Connect',
      legalDesc: '© 2026 SACETHYX. All rights reserved.',
      legalNote: 'Developed as an early-stage B2B agritech innovation platform.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Policy'
    },
    modal: {
      title: 'Request Facility Assessment or Demo',
      subtitle: 'Connect with SACETHYX technical specialists to evaluate ethylene integration for your facility.',
      nameLabel: 'Full Name *',
      emailLabel: 'Work / Business Email *',
      orgLabel: 'Company / Organization *',
      phoneLabel: 'Phone / WhatsApp *',
      roleLabel: 'Facility / Stakeholder Type',
      commodityLabel: 'Primary Stored Commodities',
      messageLabel: 'Facility Details (Volume m³, Temperature, or Quality Challenges)',
      submitBtn: 'Submit Technical Assessment Request',
      submittingBtn: 'Processing Request...',
      successTitle: 'Inquiry Successfully Submitted',
      successDesc: 'Our technical engineering team will review your facility profile and contact you within 1 business day.',
      closeBtn: 'Return to Website'
    }
  }
};
