export const TRANSLATIONS = {
  id: {
    nav: {
      technology: 'Teknologi',
      solution: 'Solusi',
      components: 'Komponen',
      cas: 'Integrasi CAS',
      simulation: 'Simulator',
      dashboard: 'Dashboard',
      roi: 'Kalkulator ROI',
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
      banner: {
        badge: 'Tampak dalam Ruang CAS (penyimpanan buah pisang)',
        subBadge: 'Instalasi Perangkat Keras SACETHYX',
        caseTitle: 'Case / Housing',
        caseDesc: 'Berisi sistem kontrol, sensor multi-gas, dan modul pemrosesan data real-time.',
        cartridgeTitle: 'Cartridge Karbon Aktif',
        cartridgeDesc: 'Karbon aktif ampas tebu. Menyerap etilen dan senyawa volatil lain.',
        displayTitle: 'Layar Display Real-Time',
        displayDesc: 'Menampilkan konsentrasi gas C₂H₄, O₂, CO₂, suhu, dan kelembapan ruangan secara langsung.',
        ledTitle: 'Indikator Status LED',
        ledDesc: 'Menunjukkan status alat (berjalan optimal, resirkulasi aktif, peringatan servis).',
        hoseTitle: 'Selang Sirkulasi Udara',
        hoseDesc: 'Mengalirkan udara ruangan melalui cartridge adsorben dengan tekanan stabil.',
        accessTitle: 'Mudah Diakses',
        accessDesc: 'Cukup buka panel depan untuk mengganti cartridge tanpa mengganggu ruang simpan.',
        telemetryTitle: 'Smart Ethylene Management',
        roomStatus: 'Kondisi Ruangan Optimal',
        tempLabel: 'Suhu',
        humidityLabel: 'Kelembapan',
        statusLow: 'Rendah',
        statusStable: 'Stabil',
        features: [
          { title: 'Mengurangi Etilen', desc: 'Memperpanjang masa simpan buah klimaterik.' },
          { title: 'Menjaga Kualitas Udara', desc: 'O₂, CO₂, suhu, dan kelembapan terkontrol.' },
          { title: 'Sistem Pintar', desc: 'Monitoring real-time dan sistem notifikasi.' },
          { title: 'Desain Praktis', desc: 'Cartridge plug & play, mudah diganti dan dirawat.' }
        ],
        tabBanner: 'Instalasi Ruang CAS (Banner Utama)',
        tabPhysics: 'Simulasi Fisika Partikel'
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
      sliderLabel: 'Storage Environment Simulator',
      sliderSubtext: 'Pelajari pengaruh kadar etilen terhadap penyimpanan buah.',
      sliderLow: 'Etilen Lebih Rendah',
      sliderHigh: 'Etilen Lebih Tinggi',
      conditionLabel: 'Status Ruang Simpan',
      ethyleneLabel: 'Tingkat Etilen',
      windowLabel: 'Estimasi Jendela Mutu Penjualan',
      rotRiskLabel: 'Tingkat Risiko Pelunakan/Pembusukan',
      disclaimer: 'Simulasi konseptual ilustratif mengenai dinamika etilen komoditas klimakterik.',
      cards: [
        {
          index: '01',
          title: 'Ethylene Buildup',
          tag: '01',
          desc: 'Etilen yang menumpuk mempercepat pematangan buah selama penyimpanan.'
        },
        {
          index: '02',
          title: 'Shorter Selling Window',
          tag: '02',
          desc: 'Buah lebih cepat matang sehingga waktu distribusi dan penjualan menjadi lebih singkat.'
        },
        {
          index: '03',
          title: 'Storage Limitations',
          tag: '03',
          desc: 'Cold storage dan CAS mengatur kondisi penyimpanan, tetapi tidak otomatis menghilangkan etilen.'
        },
        {
          index: '04',
          title: 'Quality Loss',
          tag: '04',
          desc: 'Penurunan mutu dan pembusukan meningkatkan risiko kerugian selama distribusi.'
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
      eyebrow: 'SIMULASI KONSEPTUAL',
      title: 'Storage Environment Simulator',
      subtitle: 'Pelajari bagaimana kadar etilen dapat memengaruhi penyimpanan buah.',
      modeLabel: 'Skenario Etilen',
      modeLower: 'Etilen Lebih Rendah (Terkontrol)',
      modeHigher: 'Etilen Lebih Tinggi (Tanpa Adsorpsi)',
      sliderLabel: 'Tingkat Konsentrasi Etilen Ruangan',
      controlledLevel: 'Tingkat Terkelola (SACETHYX)',
      ambientLevel: 'Tingkat Etilen Ruangan',
      reductionRate: 'Estimasi Pengurangan per Siklus Aliran',
      note: 'Simulasi ilustratif untuk menjelaskan dinamika etilen dalam ruang simpan, bukan klaim hasil pengukuran laboratorium.'
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
      eyebrow: 'POTENSI PASAR',
      title: 'Peluang pasar pascapanen hortikultura Indonesia.',
      subtitle: 'Estimasi potensi pasar berdasarkan riset rantai pasok hortikultura buah nasional.',
      proxyNotice: 'DATA RISET PASAR',
      disclaimer: 'Berdasarkan data riset pasar hortikultura buah nasional dan target penetrasi cold storage pascapanen.',
      tam: {
        title: 'TAM (Total Addressable Market)',
        value: 'Rp38,78 M',
        unit: 'Total Usaha Hortikultura Buah di Indonesia',
        desc: 'Potensi pasar menyeluruh bagi pelaku usaha hortikultura buah, packhouse, dan cold chain di seluruh Indonesia.'
      },
      sam: {
        title: 'SAM (Serviceable Available Market)',
        value: 'Rp17,78 M',
        unit: 'Total Usaha Hortikultura Buah di Pulau Jawa',
        desc: 'Fasilitas cold storage dan sentra hortikultura di Pulau Jawa yang terkoneksi langsung dengan koridor logistik dan rantai pasok gula.'
      },
      som: {
        title: 'SOM (Serviceable Obtainable Market)',
        value: 'Rp200 Jt',
        unit: 'Target Akuisisi Tahun Pertama',
        desc: 'Target penetrasi komersial awal pada operator cold storage dan packhouse perintis di tahun pertama implementasi.'
      }
    },
    roi: {
      eyebrow: 'KALKULATOR ROI FASILITAS',
      title: 'Hitung Estimasi Penurunan Susut & Pengembalian Investasi',
      subtitle: 'Simulasikan efisiensi finansial fasilitas Anda berdasarkan kapasitas ruang simpan, komoditas buah, dan struktur biaya nyata SACETHYX (Sistem Awal Rp20 Jt & Cartridge Rp1,5 Jt).',
      facilityType: 'Tipe Fasilitas Operasional',
      storageCapacity: 'Kapasitas Ruang Simpan per Siklus',
      commodityType: 'Komoditas Buah Klimakterik',
      cyclesPerYear: 'Frekuensi Perputaran Stok per Tahun',
      marketTarget: 'Target Standar Mutu Penjualan',
      customPrice: 'Nilai Pasar Komoditas (Rp/Ton)',
      lossBaseline: 'Estimasi Susut Tanpa Pengendalian Etilen',
      lossWithSacethyx: 'Susut Terkendali dengan SACETHYX',
      lossReduction: 'Penurunan Susut Mutu (Decay Reduction)',
      protectedValue: 'Nilai Panen yang Terselamatkan',
      hardwareSetup: 'Investasi Paket Awal & Setup (Rp20 Jt/unit)',
      cartridgeRecurring: 'Biaya Cartridge Pengganti (Rp1,5 Jt/unit)',
      totalCost: 'Total Investasi Tahun Pertama',
      netSavings: 'Estimasi Penghematan Bersih Tahunan',
      roiPercent: 'Tingkat Pengembalian Investasi (ROI)',
      paybackPeriod: 'Waktu Balik Modal (Payback Period)',
      ctaBtn: 'Ajukan Demo & Studi Kelayakan Pilot Project',
      panenTitle: 'Realisasi Pilar Proposisi Nilai P-A-N-E-N',
      disclaimer: '* Kalkulasi merupakan proyeksi simulasi berdasarkan parameter input, referensi nilai komoditas, dan estimasi reduksi etilen karbon aktif ampas tebu.'
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
      roi: 'ROI Calculator',
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
      banner: {
        badge: 'Interior View of CAS Room (banana storage)',
        subBadge: 'SACETHYX Hardware Installation',
        caseTitle: 'Case / Housing',
        caseDesc: 'Houses control system, multi-gas sensors, and real-time processing modules.',
        cartridgeTitle: 'Activated Carbon Cartridge',
        cartridgeDesc: 'Sugarcane bagasse activated carbon. Adsorbs ethylene and volatile organics.',
        displayTitle: 'Real-Time Display Screen',
        displayDesc: 'Continuously displays ambient C₂H₄, O₂, CO₂, temperature, and humidity.',
        ledTitle: 'LED Status Indicator',
        ledDesc: 'Displays active hardware state (optimal run, scrub cycle, maintenance warning).',
        hoseTitle: 'Air Circulation Hose',
        hoseDesc: 'Reroutes chamber atmosphere through the bio-carbon adsorbent cartridge.',
        accessTitle: 'Rapid Service Access',
        accessDesc: 'Simply open the front panel latch for instant toolless cartridge swaps.',
        telemetryTitle: 'Smart Ethylene Management',
        roomStatus: 'Optimal Room Condition',
        tempLabel: 'Temp',
        humidityLabel: 'Humidity',
        statusLow: 'Low',
        statusStable: 'Stable',
        features: [
          { title: 'Ethylene Reduction', desc: 'Extends post-harvest shelf life for climacteric fruit.' },
          { title: 'Air Quality Control', desc: 'Maintains optimal O₂, CO₂, temperature, and humidity.' },
          { title: 'Smart Systems', desc: 'Continuous telemetry logging and threshold alerts.' },
          { title: 'Practical Design', desc: 'Plug-and-play cartridge swaps with zero downtime.' }
        ],
        tabBanner: 'CAS Room Installation (Main Banner)',
        tabPhysics: 'Particle Adsorption Physics'
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
      sliderLabel: 'Storage Environment Simulator',
      sliderSubtext: 'Explore how ethylene levels may affect fruit storage.',
      sliderLow: 'Lower ethylene',
      sliderHigh: 'Higher ethylene',
      conditionLabel: 'Storage Atmosphere Condition',
      ethyleneLabel: 'Ethylene Concentration',
      windowLabel: 'Estimated Commercial Selling Window',
      rotRiskLabel: 'Softening & Spoilage Vulnerability',
      disclaimer: 'Conceptual simulation illustrating fruit storage dynamics under varying ethylene levels.',
      cards: [
        {
          index: '01',
          title: 'Ethylene Buildup',
          tag: '01',
          desc: 'Accumulated ethylene accelerates fruit ripening during storage.'
        },
        {
          index: '02',
          title: 'Shorter Selling Window',
          tag: '02',
          desc: 'Fruit ripens faster, substantially shortening distribution and commercial selling windows.'
        },
        {
          index: '03',
          title: 'Storage Limitations',
          tag: '03',
          desc: 'Cold storage and CAS manage storage conditions, but do not automatically eliminate ethylene.'
        },
        {
          index: '04',
          title: 'Quality Loss',
          tag: '04',
          desc: 'Quality decline and spoilage elevate the risk of financial loss during distribution.'
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
      eyebrow: 'CONCEPTUAL SIMULATION',
      title: 'Storage Environment Simulator',
      subtitle: 'Explore how ethylene levels may affect fruit storage.',
      modeLabel: 'Ethylene Scenario',
      modeLower: 'Lower Ethylene (Controlled)',
      modeHigher: 'Higher Ethylene (Unscrubbed)',
      sliderLabel: 'Chamber Ethylene Concentration',
      controlledLevel: 'Managed Level (SACETHYX)',
      ambientLevel: 'Ambient Chamber Ethylene',
      reductionRate: 'Estimated Single-Pass Reduction',
      note: 'Illustrative simulation to explain storage ethylene dynamics, not measured laboratory test results.'
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
      eyebrow: 'MARKET OPPORTUNITY',
      title: 'Addressing Indonesia’s post-harvest opportunity.',
      subtitle: 'Market potential based on national fruit horticulture supply chain research.',
      proxyNotice: 'MARKET RESEARCH DATA',
      disclaimer: 'Based on national fruit horticulture enterprise data and initial commercial cold-storage penetration targets.',
      tam: {
        title: 'TAM (Total Addressable Market)',
        value: 'Rp 38.78 B',
        unit: 'Total Fruit Horticulture Enterprises in Indonesia',
        desc: 'Comprehensive market value encompassing fruit agribusinesses, packhouses, and cold storage facilities across Indonesia.'
      },
      sam: {
        title: 'SAM (Serviceable Available Market)',
        value: 'Rp 17.78 B',
        unit: 'Total Fruit Horticulture Enterprises in Java',
        desc: 'Concentrated commercial facilities across Java directly connected to major cold-chain logistics arteries and sugar mill supply zones.'
      },
      som: {
        title: 'SOM (Serviceable Obtainable Market)',
        value: 'Rp 200 M',
        unit: 'First-Year Acquisition Target',
        desc: 'First-year commercial target focused on pioneering cold storage operators and commercial packhouse clusters.'
      }
    },
    roi: {
      eyebrow: 'B2B ROI CALCULATOR',
      title: 'Calculate Decay Reduction & Return on Investment',
      subtitle: 'Simulate commercial savings based on your storage capacity, fruit commodity, and real SACETHYX unit economics (Rp20M initial setup & Rp1.5M recurring cartridge).',
      facilityType: 'Operational Facility Type',
      storageCapacity: 'Chamber Storage Capacity per Cycle',
      commodityType: 'Ethylene-Sensitive Commodity',
      cyclesPerYear: 'Storage Turnover Cycles per Year',
      marketTarget: 'Target Quality Distribution Tier',
      customPrice: 'Market Price per Metric Ton (IDR)',
      lossBaseline: 'Estimated Decay Loss Without Ethylene Control',
      lossWithSacethyx: 'Controlled Decay Loss with SACETHYX',
      lossReduction: 'Decay & Food Loss Reduction',
      protectedValue: 'Protected Commercial Harvest Value',
      hardwareSetup: 'Initial System & Setup Package (Rp20M/unit)',
      cartridgeRecurring: 'Recurring Cartridge Replenishment (Rp1.5M/cartridge)',
      totalCost: 'Total First-Year Investment',
      netSavings: 'Estimated Net Annual Savings',
      roiPercent: 'Projected Return on Investment (ROI)',
      paybackPeriod: 'Estimated Payback Period',
      ctaBtn: 'Request Demo & Pilot Feasibility Study',
      panenTitle: 'Direct Realization of P-A-N-E-N Pillars',
      disclaimer: '* Calculations represent projection models based on user inputs, standard commodity price indexes, and bio-carbon ethylene adsorption metrics.'
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
