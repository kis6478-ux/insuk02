import { Cafe } from '../types';

export const CAFES_DATA: Cafe[] = [
  {
    id: 'moani',
    name: '모아니 (moani)',
    tagline: '바람에 실려오는 나무 숲속, 분당 도심 속 거대한 건축 미학',
    category: '숲/마운틴뷰',
    region: '성남 판교·분당·남한산성',
    address: '경기 성남시 분당구 쇳골로 117',
    shortLocation: '성남 분당구 금곡동',
    distanceFromOrigins: {
      '판교역': { carMin: 12, transitMin: 28, distanceKm: 5.8 },
      '서현/수내역': { carMin: 14, transitMin: 24, distanceKm: 6.2 },
      '야탑/모란역': { carMin: 18, transitMin: 35, distanceKm: 9.1 },
      '남한산성입구역': { carMin: 26, transitMin: 52, distanceKm: 14.5 }
    },
    transitGuide: '미금역 7번 출구에서 마을버스 7-2번 탑승 후 쇳골마을회관 하차 도보 3분',
    drivingGuide: '분당수서간고속화도로 또는 대왕판교로에서 쇳골마을 방면 진입 (전용 주차타워 완비)',
    signatureMenus: [
      { name: '모아니 시그니처 숲 라떼', price: '8,500원', description: '말차 크림과 진한 에스프레소가 어우러진 시그니처 음료', isSignature: true },
      { name: '클래식 몽블랑 페이스트리', price: '9,000원', description: '매일 아침 구워내는 결이 살아있는 밤 페이스트리', isSignature: true },
      { name: '핸드드립 게이샤 블렌드', price: '9,500원', description: '화사한 꽃향기와 감귤류의 산미가 돋보이는 최고급 스페셜티' }
    ],
    priceRange: '8천원 이상',
    businessHours: '10:00 - 19:00 (라스트오더 18:30)',
    closedDays: '매주 월요일 정기휴무',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['숲속 건축상', '전용 주차장', '루프탑 테라스', '노키즈존(2층일부)', '베이커리'],
    rating: 4.8,
    reviewCount: 3420,
    highlights: [
      '숲과 자연 경사면을 그대로 살린 압도적인 노출 콘크리트 건축물',
      '사계절 변화하는 마운틴 포레스트 뷰를 감상하는 야외 자작나무 테라스',
      '전문 파티시에가 굽는 최고급 프렌치 버터 베이커리 라인업'
    ],
    parkingInfo: '매장 지하 및 야외 1~2주차장 완비 (음료 구매 시 2시간 무료)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '마운틴/숲',
    bestTimeToVisit: '오전 10:30 오픈 직후 (숲 햇살이 가장 맑게 들어오는 골든타임)',
    crowdTip: '주말 14:00~16:00 피크 타임에는 1층 야외 정원 좌석을 먼저 선점하세요.',
    nearbySpots: [
      { name: '율동공원 & 번지점프대', type: '산책로', travelMin: 12 },
      { name: '판교 현대백화점 & 아브뉴프랑', type: '쇼핑', travelMin: 10 },
      { name: '정자동 카페거리', type: '맛집', travelMin: 8 }
    ],
    recommendedCourse: '금곡동 모아니 브런치 & 숲멍 산책 ➡️ 율동공원 호수 둘레길 드라이브 ➡️ 서현 먹자골목 저녁식사',
    naverSearchQuery: '분당 모아니 카페',
    kakaoSearchQuery: '모아니 분당구'
  },
  {
    id: 'smeltz',
    name: '스멜츠 (Smeltz)',
    tagline: '통유리창 너머 펼쳐지는 숲의 캔버스, 광주 숲멍의 대표 명소',
    category: '숲/마운틴뷰',
    region: '경기 광주 (신현/오포/퇴촌)',
    address: '경기 광주시 오포읍 신현로 103',
    shortLocation: '경기 광주시 신현동',
    distanceFromOrigins: {
      '판교역': { carMin: 18, transitMin: 35, distanceKm: 8.5 },
      '서현/수내역': { carMin: 15, transitMin: 30, distanceKm: 7.2 },
      '야탑/모란역': { carMin: 22, transitMin: 42, distanceKm: 11.0 },
      '남한산성입구역': { carMin: 30, transitMin: 55, distanceKm: 15.2 }
    },
    transitGuide: '서현역에서 520번 또는 119번 버스 탑승 후 현대모닝사이드2차 하차 도보 4분',
    drivingGuide: '분당 율동공원에서 태재고개를 넘어 신현리 방향 5분 직진',
    signatureMenus: [
      { name: '포레스트 아인슈페너', price: '7,500원', description: '솔잎 향의 달콤 쌉싸름한 크림을 얹은 시그니처 커피', isSignature: true },
      { name: '트러플 머쉬룸 크림 파스타', price: '18,500원', description: '진한 트러플 오일과 양송이, 베이컨이 어우러진 브런치 인기 메뉴', isSignature: true },
      { name: '시즈널 과일 크로플', price: '11,000원', description: '프렌치 크루아상 생지로 바삭하게 구워낸 아이스크림 크로플' }
    ],
    priceRange: '7천원~9천원',
    businessHours: '10:30 - 22:00 (연중무휴)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['통창 숲뷰', '발렛주차', '브런치 맛집', '포토존 성지', '야경 조명'],
    rating: 4.7,
    reviewCount: 4210,
    highlights: [
      'SNS를 뜨겁게 달군 2층 전체 통유리 단풍·녹음 포레스트 파노라마 뷰',
      '낮에는 자연광 가득한 브런치 카페, 밤에는 무드 있는 와인 & 커피 바',
      '모던 블랙 앤 화이트 인테리어와 자연의 감각적인 대비'
    ],
    parkingInfo: '매장 앞 전용 주차장 및 발렛 파킹 서비스 운영 (발렛비 2,000원)',
    hasFreeParking: false,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '마운틴/숲',
    bestTimeToVisit: '평일 오후 14:00~16:00 또는 비 오는 날(빗소리와 운무가 환상적)',
    crowdTip: '2층 창가 포토존 자리는 회전율이 높으니 잠시 대기하면 사진 촬영 가능!',
    nearbySpots: [
      { name: '분당 율동공원 & 책테마파크', type: '산책로', travelMin: 8 },
      { name: '신현리 먹거리 골목', type: '맛집', travelMin: 5 },
      { name: '남한산성 도립공원 남문', type: '관광/명소', travelMin: 22 }
    ],
    recommendedCourse: '서현역/판교 출발 ➡️ 태재고개 스멜츠 숲속 브런치 ➡️ 율동공원 호수 산책 ➡️ 분당 중앙공원 야경',
    naverSearchQuery: '경기광주 스멜츠',
    kakaoSearchQuery: '스멜츠 광주시'
  },
  {
    id: 'cafe-ryu',
    name: '카페 류 (Ryu)',
    tagline: '남한산성 푸른 능선 아래, 솔향기 머무는 감성 한옥 테라스',
    category: '한옥/전통',
    region: '성남 판교·분당·남한산성',
    address: '경기 광주시 남한산성면 남한산성로 523',
    shortLocation: '남한산성 도립공원 인근',
    distanceFromOrigins: {
      '남한산성입구역': { carMin: 14, transitMin: 28, distanceKm: 7.5 },
      '야탑/모란역': { carMin: 20, transitMin: 40, distanceKm: 11.2 },
      '판교역': { carMin: 25, transitMin: 48, distanceKm: 15.8 },
      '서현/수내역': { carMin: 24, transitMin: 46, distanceKm: 14.9 }
    },
    transitGuide: '산성역 2번 출구에서 9번/9-1번 버스 탑승 후 산성로터리 하차 도보 5분',
    drivingGuide: '성남 산성대로에서 남한산성 순환도로 진입 (경치가 아름다운 힐링 드라이브길)',
    signatureMenus: [
      { name: '남한산성 흑임자 크림라떼', price: '7,800원', description: '고소하게 볶아낸 국내산 흑임자와 묵직한 에스프레소 크림', isSignature: true },
      { name: '수제 쑥 인절미 와플', price: '12,000원', description: '쫄깃한 쑥떡을 와플팬에 구워 바닐라 아이스크림과 콩고물을 곁들인 별미', isSignature: true },
      { name: '문경 오미자 에이드', price: '7,500원', description: '상큼하고 달콤한 천연 발효 오미자 스파클링 티' }
    ],
    priceRange: '7천원~9천원',
    businessHours: '10:00 - 20:30 (주말 21:30까지 연장)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['한옥 감성', '마운틴뷰', '반려견 동반 야외', '계곡 소리', '주차 가능'],
    rating: 4.8,
    reviewCount: 2890,
    highlights: [
      '고즈넉한 전통 처마와 현대적인 글라스 인테리어가 조화를 이룬 힐링 한옥',
      '산속 맑은 공기와 졸졸 흐르는 계곡 물소리를 들으며 즐기는 야외 평상석',
      '어르신부터 2030까지 모두 만족하는 전통 퓨전 디저트 맛집'
    ],
    parkingInfo: '카페 전용 대형 주차장 완비 (무료 주차 30대 이상)',
    hasFreeParking: true,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: false,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '마운틴/숲',
    bestTimeToVisit: '해질녘 17:30 (한옥 처마에 은은한 주황빛 조명이 켜지는 시간)',
    crowdTip: '야외 계곡 테라스 평상 자리는 봄~가을철 인기 만점이니 11시 전 방문 추천!',
    nearbySpots: [
      { name: '남한산성 행궁 & 수어장대', type: '관광/명소', travelMin: 5 },
      { name: '남한산성 백숙거리', type: '맛집', travelMin: 3 },
      { name: '남한산성 둘레길 1코스', type: '산책로', travelMin: 4 }
    ],
    recommendedCourse: '산성역 출발 ➡️ 남한산성 드라이브 ➡️ 산성 백숙 오찬 ➡️ 카페 류 한옥 테라스 티타임 ➡️ 수어장대 일몰 감상',
    naverSearchQuery: '남한산성 카페 류',
    kakaoSearchQuery: '카페류 남한산성'
  },
  {
    id: 'moan-gogiri',
    name: '모안 (Moan Cafe)',
    tagline: '고기리 청정 계곡을 품은 테라스, 물멍과 숲멍을 동시에',
    category: '계곡/테라스',
    region: '용인 (고기리/수지/보정)',
    address: '경기 용인시 수지구 고기로 377번길 18',
    shortLocation: '용인 수지구 고기동',
    distanceFromOrigins: {
      '판교역': { carMin: 16, transitMin: 38, distanceKm: 8.2 },
      '서현/수내역': { carMin: 18, transitMin: 36, distanceKm: 8.9 },
      '야탑/모란역': { carMin: 24, transitMin: 45, distanceKm: 13.1 },
      '남한산성입구역': { carMin: 32, transitMin: 58, distanceKm: 18.0 }
    },
    transitGuide: '미금역 7번 출구에서 마을버스 14번 탑승 후 관음사입구 하차 도보 3분',
    drivingGuide: '대왕판교로에서 고기리 계곡 방면 진입 (고기리막국수에서 차로 3분)',
    signatureMenus: [
      { name: '고기리 솔잎 에이드', price: '7,500원', description: '솔잎 수제청과 라임의 청량함이 가득한 힐링 드링크', isSignature: true },
      { name: '수제 바닐라빈 라떼', price: '7,000원', description: '마다가스카르산 천연 바닐라빈 시럽으로 풍미를 극대화', isSignature: true },
      { name: '바스크 치즈케이크', price: '8,000원', description: '스페인 전통 방식으로 겉은 그을리고 속은 촉촉한 글루텐프리 케이크' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '10:30 - 20:00 (주말 21:00까지)',
    closedDays: '매주 화요일 휴무',
    images: [
      'https://images.unsplash.com/photo-1507133750040-3a7f5730b5f1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445116572660-238413b888b5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['계곡 1열 테라스', '물멍 힐링', '고기리 막국수 연계', '반려견 야외 동반', '무료주차'],
    rating: 4.6,
    reviewCount: 1980,
    highlights: [
      '맑고 시원한 고기리 계곡물이 바로 발밑에서 흐르는 감성 데크 테라스',
      '고기리 유명 맛집들과 바로 인접해 주말 당일치기 코스로 최적',
      '여름에는 시원한 계곡 발담그기, 가을에는 울긋불긋 단풍 감상 명당'
    ],
    parkingInfo: '카페 앞 주차장 및 제2주차장 완비 (약 25대 무료 주차)',
    hasFreeParking: true,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: false,
    hasWifi: true,
    hasOutlets: false,
    sceneryType: '계곡',
    bestTimeToVisit: '오후 13:00~15:00 (계곡물에 반사되는 윤슬이 가장 예쁠 때)',
    crowdTip: '주말 점심시간 고기리 진입로 정체가 있을 수 있으니 오전 11:30 이전 이동 추천!',
    nearbySpots: [
      { name: '고기리 막국수 (들기름막국수 원조)', type: '맛집', travelMin: 3 },
      { name: '광교산 둘레길 & 바라산 휴양림', type: '산책로', travelMin: 10 },
      { name: '대장동 판교 대장지구 카페거리', type: '쇼핑', travelMin: 7 }
    ],
    recommendedCourse: '판교/분당 출발 ➡️ 고기리 막국수 웨이팅 및 식사 ➡️ 모안 계곡 테라스 물멍 ➡️ 바라산 자연휴양림 숲 산책',
    naverSearchQuery: '용인 고기리 모안 카페',
    kakaoSearchQuery: '모안 용인 고기동'
  },
  {
    id: 'le-detour',
    name: '르디투어 (Le Detour)',
    tagline: '세계적 건축가 곽희수의 작품, 광교 웰빙타운의 압도적 루프탑',
    category: '대형/베이커리',
    region: '수원 (광교호수)',
    address: '경기 수원시 영통구 웰빙타운로36번길 46-234',
    shortLocation: '수원 광교 웰빙타운',
    distanceFromOrigins: {
      '판교역': { carMin: 22, transitMin: 34, distanceKm: 14.2 },
      '서현/수내역': { carMin: 24, transitMin: 40, distanceKm: 15.5 },
      '야탑/모란역': { carMin: 28, transitMin: 45, distanceKm: 18.2 },
      '남한산성입구역': { carMin: 38, transitMin: 60, distanceKm: 24.0 }
    },
    transitGuide: '신분당선 광교역(경기대) 2번 출구에서 도보 15분 또는 택시 기본요금',
    drivingGuide: '용인서울고속도로 서수지IC 또는 광교상현IC에서 웰빙타운 방향 5분',
    signatureMenus: [
      { name: '빨미까레 & 퀸아망', price: '6,500원', description: '프랑스 AOP 이즈니 버터로 겹겹이 바삭하게 구워낸 대표 페이스트리', isSignature: true },
      { name: '르디투어 시그니처 플랫화이트', price: '6,800원', description: '콜롬비아 게이샤 블렌딩으로 진하고 고소한 플랫화이트', isSignature: true },
      { name: '생망고 크루아상 케이크', price: '9,500원', description: '신선한 생망고와 마스카포네 생크림이 듬뿍 올라간 디저트' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '10:00 - 21:00 (라스트오더 20:30)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['건축가 곽희수 설계', '초대형 베이커리', '온돌 루프탑', '광교 호수공원 연계', '엘리베이터'],
    rating: 4.8,
    reviewCount: 5120,
    highlights: [
      '기장 웨이브온, 홍천 유리트리트를 지은 건축가 곽희수 마스터피스',
      '계단식 좌식 평상과 겨울에는 따뜻한 온돌이 들어오는 옥상 온돌 루프탑',
      '프랑스 제과 명장이 만드는 수십 종의 최고급 페이스트리 빵지순례 성지'
    ],
    parkingInfo: '건물 전용 주차장 및 맞은편 대형 전용 주차타워 완비 (2시간 무료)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '모던건축',
    bestTimeToVisit: '오후 16:30 (루프탑에서 바라보는 광교산 노을이 장관)',
    crowdTip: '실내 2~3층 계단형 좌석은 콘센트가 있어 노트북 작업이나 대화에 최적입니다.',
    nearbySpots: [
      { name: '광교 호수공원 & 프라이부르크 전망대', type: '관광/명소', travelMin: 8 },
      { name: '광교 갤러리아 백화점 & 아쿠아플라넷', type: '쇼핑', travelMin: 7 },
      { name: '광교 카페거리', type: '맛집', travelMin: 5 }
    ],
    recommendedCourse: '성남 판교 출발 ➡️ 르디투어 브런치 & 베이커리 ➡️ 광교 앨리웨이 산책 ➡️ 광교호수공원 야경 산책로',
    naverSearchQuery: '광교 르디투어',
    kakaoSearchQuery: '르디투어 광교'
  },
  {
    id: 'nella-foresta',
    name: '넬라포레스타 (Nella Foresta)',
    tagline: '백운호수 자락 숲속 대형 유리온실과 유럽식 비밀 정원',
    category: '온실/식물원',
    region: '의왕·과천 (백운호수)',
    address: '경기 의왕시 백운안길 61',
    shortLocation: '의왕 백운호수 인근',
    distanceFromOrigins: {
      '판교역': { carMin: 18, transitMin: 45, distanceKm: 12.0 },
      '서현/수내역': { carMin: 22, transitMin: 48, distanceKm: 13.8 },
      '야탑/모란역': { carMin: 25, transitMin: 50, distanceKm: 16.5 },
      '남한산성입구역': { carMin: 35, transitMin: 65, distanceKm: 21.0 }
    },
    transitGuide: '인덕원역 2번 출구에서 05번/06번 마을버스 탑승 후 백운호수 하차',
    drivingGuide: '판교-안양 도로를 통해 백운호수 순환도로 진입 (롯데 타임빌라스에서 5분)',
    signatureMenus: [
      { name: '이탈리안 젤라또 아포가토', price: '9,000원', description: '유기농 수제 젤라또에 진한 에스프레소를 얹은 정통 디저트', isSignature: true },
      { name: '생바질 마르게리타 포카치아', price: '8,500원', description: '온실에서 직접 기른 생바질과 올리브오일의 풍미 가득한 브레드', isSignature: true },
      { name: '포레스트 카모마일 리프 티', price: '8,000원', description: '유기농 허브 찻잎으로 우려낸 심신 안정 플라워 티' }
    ],
    priceRange: '8천원 이상',
    businessHours: '10:00 - 22:00 (연중무휴)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['대형 유리온실', '유럽풍 정원', '백운호수 뷰', '타임빌라스 연계', '야외 잔디밭'],
    rating: 4.7,
    reviewCount: 3870,
    highlights: [
      '피톤치드 가득한 사계절 푸른 식물과 꽃으로 둘러싸인 거대 유리 글라스하우스',
      '유럽 황실 정원을 연상시키는 드넓은 분수대와 야외 잔디 산책로',
      '롯데 프리미엄아울렛 타임빌라스와 차로 5분 거리로 주말 쇼핑 코스 연계 최고'
    ],
    parkingInfo: '대형 전용 주차장 3개 구역 완비 (무료 주차 100대 이상 가능)',
    hasFreeParking: true,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '정원/가든',
    bestTimeToVisit: '화창한 낮 11:00~14:00 (온실 천장으로 쏟아지는 햇살 감상)',
    crowdTip: '정원 야외 테이블은 반려견 동반이 자유로우며 피크닉 기분을 낼 수 있습니다.',
    nearbySpots: [
      { name: '롯데 프리미엄 아울렛 타임빌라스', type: '쇼핑', travelMin: 5 },
      { name: '의왕 백운호수 생태탐방로', type: '산책로', travelMin: 3 },
      { name: '백운호수 장어 & 한정식 마을', type: '맛집', travelMin: 4 }
    ],
    recommendedCourse: '성남 판교 출발 ➡️ 넬라포레스타 온실 정원 브런치 ➡️ 타임빌라스 쇼핑 ➡️ 백운호수 목재 데크길 일몰 산책',
    naverSearchQuery: '의왕 넬라포레스타',
    kakaoSearchQuery: '넬라포레스타 의왕'
  },
  {
    id: 'bellstar-beach',
    name: '팔당 벨스타비치 (Bellstar Beach)',
    tagline: '한강이 눈앞에 펼쳐지는 파노라마 리버뷰, 노을과 심야 낭만',
    category: '호수/리버뷰',
    region: '하남·팔당 (한강뷰)',
    address: '경기 남양주시 와부읍 다산로 56',
    shortLocation: '하남 미사 맞은편 팔당 한강변',
    distanceFromOrigins: {
      '남한산성입구역': { carMin: 28, transitMin: 55, distanceKm: 18.5 },
      '야탑/모란역': { carMin: 32, transitMin: 60, distanceKm: 22.1 },
      '판교역': { carMin: 35, transitMin: 62, distanceKm: 25.8 },
      '서현/수내역': { carMin: 34, transitMin: 60, distanceKm: 24.5 }
    },
    transitGuide: '경의중앙선 팔당역 1번 출구에서 도보 18분 또는 자전거 대여 도로 이용',
    drivingGuide: '수도권제1순환고속도로 또는 팔당대교를 건너 강변 북로 진입',
    signatureMenus: [
      { name: '벨스타 선셋 자몽 블렌디드', price: '8,500원', description: '붉게 물드는 팔당 노을을 형상화한 상큼한 프리미엄 스무디', isSignature: true },
      { name: '화덕 고르곤졸라 피자', price: '19,000원', description: '이태리 화덕에서 직접 구워 꿀과 함께 먹는 리버뷰 인기 메뉴', isSignature: true },
      { name: '바삭 마늘 바게트 볼', price: '7,800원', description: '진한 마늘 버터와 크림치즈가 듬뿍 들어간 베이커리 베스트셀러' }
    ],
    priceRange: '7천원~9천원',
    businessHours: '10:00 - 새벽 02:00 (심야 영업)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['한강 1열 리버뷰', '심야 02시까지', '모닥불 불멍', '피자&맥주', '한강 산책로 직결'],
    rating: 4.6,
    reviewCount: 4650,
    highlights: [
      '성남에서 30분대 닿는 한강 바로 앞 모래사장 비치 테라스와 흔들의자',
      '도심 속 답답함을 날려버리는 탁 트인 팔당호 수평선과 환상적인 일몰 야경',
      '새벽 2시까지 운영하여 성남 드라이브 코스 및 심야 힐링의 성지'
    ],
    parkingInfo: '매장 앞뒤 전용 대형 주차장 완비 (주차 요원 안내, 무료 주차)',
    hasFreeParking: true,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '리버/호수',
    bestTimeToVisit: '일몰 30분 전 (18:00~19:30, 한강이 황금빛으로 물드는 시간)',
    crowdTip: '야외 모닥불 구역에서는 마시멜로 굽기 체험이 가능하여 커플·가족 모두 인기 만점!',
    nearbySpots: [
      { name: '하남 스타필드 & 아쿠아필드', type: '쇼핑', travelMin: 10 },
      { name: '팔당 원조 초계국수 본점', type: '맛집', travelMin: 3 },
      { name: '다산생태공원 둘레길', type: '산책로', travelMin: 12 }
    ],
    recommendedCourse: '성남 출발 ➡️ 하남 스타필드 쇼핑 ➡️ 팔당 초계국수 저녁 ➡️ 벨스타비치 한강 노을 & 모닥불 불멍 ➡️ 심야 드라이브 귀가',
    naverSearchQuery: '남양주 팔당 벨스타비치',
    kakaoSearchQuery: '벨스타비치 팔당'
  },
  {
    id: 'padisha',
    name: '파디샤 (Padisha)',
    tagline: '운중동 숲자락 이국적인 오리엔탈 정원, 터키식 모래커피 & 카이막',
    category: '도심/감성로스터리',
    region: '성남 판교·분당·남한산성',
    address: '경기 성남시 분당구 하산운동 361-2',
    shortLocation: '성남 서판교 운중동 끝자락',
    distanceFromOrigins: {
      '판교역': { carMin: 14, transitMin: 30, distanceKm: 6.8 },
      '서현/수내역': { carMin: 18, transitMin: 36, distanceKm: 8.5 },
      '야탑/모란역': { carMin: 22, transitMin: 42, distanceKm: 11.8 },
      '남한산성입구역': { carMin: 30, transitMin: 55, distanceKm: 16.5 }
    },
    transitGuide: '판교역 북편에서 341번 버스 탑승 후 운중농원 하차 도보 3분',
    drivingGuide: '안양판교로에서 한국학중앙연구원 방향 하산운동 숲길 진입',
    signatureMenus: [
      { name: '터키식 오리지널 샌드커피 (체즈베)', price: '7,000원', description: '300도 뜨거운 모래 위에서 끓여내는 깊고 진한 터키 정통 커피', isSignature: true },
      { name: '천상의 맛 수제 카이막 세트', price: '13,000원', description: '매일 아침 끓여 굳힌 생우유 카이막과 갓 구운 피타 브레드, 피스타치오 꿀', isSignature: true },
      { name: '오스만 제국 홍차 (차이)', price: '6,500원', description: '이국적인 터키 찻잔에 서브되는 향긋한 잎차' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '11:00 - 21:00 (라스트오더 20:30)',
    closedDays: '매주 수요일 휴무',
    images: [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507133750040-3a7f5730b5f1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['모래커피 시연', '카이막 맛집', '서판교 힐링숲', '이국적 분위기', '무료주차'],
    rating: 4.7,
    reviewCount: 1640,
    highlights: [
      '눈앞에서 300도 모래 위에 구리 주전자를 굴려 추출하는 신비로운 샌드커피 퍼포먼스',
      '백종원이 극찬했던 터키 천상의 디저트 카이막을 성남에서 가장 제대로 맛볼 수 있는 곳',
      '운중저수지 자락 울창한 소나무 숲에 둘러싸인 아늑하고 이국적인 정원 인테리어'
    ],
    parkingInfo: '카페 전용 주차장 구비 (무료 15대)',
    hasFreeParking: true,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: false,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '정원/가든',
    bestTimeToVisit: '오후 14:00~17:00 (모래커피 추출 시연을 가장 여유롭게 관람 가능)',
    crowdTip: '카이막 세트는 당일 한정 수량 생산되므로 주말엔 오후 3시 이전 주문 권장!',
    nearbySpots: [
      { name: '운중저수지 & 한국학중앙연구원 숲길', type: '산책로', travelMin: 4 },
      { name: '서판교 운중동 먹거리마을', type: '맛집', travelMin: 5 },
      { name: '판교 박물관 & 낙생대공원', type: '관광/명소', travelMin: 8 }
    ],
    recommendedCourse: '판교역 ➡️ 서판교 운중동 화덕피자 ➡️ 파디샤 카이막 & 모래커피 ➡️ 운중천 산책로 힐링',
    naverSearchQuery: '판교 운중동 파디샤',
    kakaoSearchQuery: '파디샤 판교'
  },
  {
    id: 'farmers-daddy',
    name: '파머스대디 (Farmer\'s Daddy)',
    tagline: '가든 디자이너의 손길이 닿은 그린하우스, 퇴촌 숲속 힐링 아지트',
    category: '온실/식물원',
    region: '경기 광주 (신현/오포/퇴촌)',
    address: '경기 광주시 퇴촌면 정영로 458',
    shortLocation: '경기 광주시 퇴촌면',
    distanceFromOrigins: {
      '남한산성입구역': { carMin: 32, transitMin: 60, distanceKm: 21.0 },
      '야탑/모란역': { carMin: 36, transitMin: 68, distanceKm: 24.5 },
      '서현/수내역': { carMin: 38, transitMin: 70, distanceKm: 26.2 },
      '판교역': { carMin: 40, transitMin: 72, distanceKm: 28.0 }
    },
    transitGuide: '경기광주역에서 38-41번 버스 탑승 후 퇴촌농협 하차 택시 5분',
    drivingGuide: '성남-장원간 고속화도로에서 퇴촌/남종 방향 45번 국도 이용',
    signatureMenus: [
      { name: '파머스 그린 가든 에이드', price: '8,000원', description: '직접 재배한 페퍼민트, 로즈마리와 청포도의 상쾌한 블렌딩', isSignature: true },
      { name: '수제 스콘 & 홈메이드 잼', price: '6,500원', description: '영국식 고메 버터 스콘과 계절 베리 콩포트', isSignature: true },
      { name: '더치 콜드브루 & 쿠키 세트', price: '9,000원', description: '깔끔한 바디감의 스페셜티 더치 커피와 오트밀 쿠키' }
    ],
    priceRange: '7천원~9천원',
    businessHours: '10:30 - 18:30 (입장 마감 18:00)',
    closedDays: '매주 화, 수요일 정기휴무',
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['가든 디자이너 공간', '입장권 음료포함', '야외 피크닉', '자연 식물원', '힐링 포토존'],
    rating: 4.8,
    reviewCount: 2150,
    highlights: [
      '유명 가든 디자이너 최시영 대표가 직접 기획하고 가꾼 자연 친화적 대형 온실',
      '입장료(음료 1잔 포함) 시스템으로 여유롭고 조용하게 숲속 정원을 온전히 만끽',
      '계절마다 피어나는 수국, 라벤더, 핑크뮬리와 숲속 야외 벤치'
    ],
    parkingInfo: '농원 입구 및 내부 전용 주차 공간 (무료 40대 이상)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: false,
    hasWifi: false,
    hasOutlets: false,
    sceneryType: '정원/가든',
    bestTimeToVisit: '오전 11:00~13:00 (자연 바람과 식물 피톤치드가 가장 상쾌한 시간)',
    crowdTip: '디지털 디톡스를 지향하여 와이파이 대신 자연 소리에 귀 기울이기 좋은 공간입니다.',
    nearbySpots: [
      { name: '퇴촌 토마토 마을 & 율봄식물원', type: '관광/명소', travelMin: 8 },
      { name: '퇴촌 털보네 바베큐', type: '맛집', travelMin: 6 },
      { name: '팔당 물안개공원 (자전거 코스)', type: '산책로', travelMin: 12 }
    ],
    recommendedCourse: '성남 모란 출발 ➡️ 퇴촌 드라이브길 ➡️ 파머스대디 온실 티타임 ➡️ 팔당 물안개공원 자전거 산책 ➡️ 퇴촌 바베큐 저녁',
    naverSearchQuery: '퇴촌 파머스대디',
    kakaoSearchQuery: '파머스대디 퇴촌'
  },
  {
    id: 'gleam-bakery',
    name: '글림 (GLEAM Coffee & Bakery)',
    tagline: '고기리 빵지순례의 대명사, 천연 효모 앙버터와 국가대표 로스팅',
    category: '대형/베이커리',
    region: '용인 (고기리/수지/보정)',
    address: '경기 용인시 수지구 이종무로 157',
    shortLocation: '용인 수지구 고기동',
    distanceFromOrigins: {
      '판교역': { carMin: 15, transitMin: 36, distanceKm: 7.9 },
      '서현/수내역': { carMin: 17, transitMin: 35, distanceKm: 8.4 },
      '야탑/모란역': { carMin: 22, transitMin: 44, distanceKm: 12.8 },
      '남한산성입구역': { carMin: 30, transitMin: 56, distanceKm: 17.5 }
    },
    transitGuide: '미금역 7번 출구에서 14번 버스 탑승 후 장투말 하차 도보 1분',
    drivingGuide: '분당 대왕판교로에서 고기교를 지나 고기초등학교 방면 3분',
    signatureMenus: [
      { name: '골든 앙버터 치아바타', price: '6,800원', description: '천연 발효종 바게트에 무염 고메버터와 국산 팥앙금을 듬뿍 넣은 인생 앙버터', isSignature: true },
      { name: '글림 블렌드 아메리카노 (챔피언십)', price: '5,800원', description: '국가대표 로스터가 직접 블렌딩한 초콜릿 풍미의 깔끔한 에스프레소', isSignature: true },
      { name: '크림치즈 무화과 사워도우', price: '7,500원', description: '와인에 절인 쫀득한 무화과와 묵직한 크림치즈의 조화' }
    ],
    priceRange: '5천원~7천원',
    businessHours: '09:00 - 19:00 (빵 소진 시 조기 마감 가능)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['전국구 앙버터 3대 맛집', '국가대표 로스터리', '천연발효종', '아침 9시 오픈', '무료주차'],
    rating: 4.8,
    reviewCount: 3180,
    highlights: [
      '수요미식회 및 각종 방송에서 극찬받은 전국구 앙버터 성지',
      '프리미엄 생두를 직접 볶는 로스터리 팩토리로 커피 애호가들의 필수 방문지',
      '아침 9시부터 따끈따끈한 갓 구운 빵 냄새가 고기리 골짜기를 채우는 곳'
    ],
    parkingInfo: '매장 전면 및 옆마당 전용 주차 공간 (무료 주차 20여 대)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: false,
    hasBakery: true,
    hasBrunch: false,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '마운틴/숲',
    bestTimeToVisit: '오전 10:30~12:00 (시그니처 앙버터와 치아바타가 막 구워져 나오는 시간)',
    crowdTip: '앙버터는 오후 늦게 가면 품절될 수 있으니 포장 예정이라면 오전에 방문하세요!',
    nearbySpots: [
      { name: '고기리 막국수', type: '맛집', travelMin: 4 },
      { name: '낙생저수지 둘레 산책로', type: '산책로', travelMin: 6 },
      { name: '동천동 유타워 쇼핑몰', type: '쇼핑', travelMin: 8 }
    ],
    recommendedCourse: '성남 판교 출발 ➡️ 글림 베이커리 빵 쇼핑 & 모닝 커피 ➡️ 고기리 숲 산책 ➡️ 막국수 점심',
    naverSearchQuery: '용인 고기리 글림',
    kakaoSearchQuery: '글림 고기동'
  },
  {
    id: 'boaz-yangjae',
    name: '보아즈 & 플로렛 (BOAZ)',
    tagline: '신분당선 14분! 양재천 메타세쿼이아길 테라스와 정통 스페셜티',
    category: '도심/감성로스터리',
    region: '서울 (양재천/강남)',
    address: '서울 서초구 양재천로 109',
    shortLocation: '서울 서초구 양재천 카페거리',
    distanceFromOrigins: {
      '판교역': { carMin: 20, transitMin: 18, distanceKm: 12.5 },
      '서현/수내역': { carMin: 22, transitMin: 22, distanceKm: 14.0 },
      '야탑/모란역': { carMin: 24, transitMin: 32, distanceKm: 15.2 },
      '남한산성입구역': { carMin: 32, transitMin: 40, distanceKm: 19.8 }
    },
    transitGuide: '신분당선 양재시민의숲역 1번 출구에서 양재천 데크길 따라 도보 7분',
    drivingGuide: '경부고속도로 양재IC 또는 양재대로에서 양재천로 진입 (공영주차장 이용 편리)',
    signatureMenus: [
      { name: '양재천 숲 아인슈페너', price: '7,000원', description: '부드러운 피스타치오 크림과 콜드브루의 산뜻한 조화', isSignature: true },
      { name: '리코타 치즈 프렌치 토스트', price: '16,500원', description: '촉촉한 브리오슈 식빵에 계절 과일과 메이플 시럽을 곁들인 브런치', isSignature: true },
      { name: '스페셜티 에티오피아 핸드드립', price: '8,000원', description: '재스민 꽃향기와 베리류의 달콤함이 입안 가득 감도는 싱글오리진' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '08:30 - 22:00 (브런치는 10:00부터)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['신분당선 초역세권', '양재천 숲길뷰', '브런치 성지', '테라스 반려동물', '스페셜티'],
    rating: 4.8,
    reviewCount: 2740,
    highlights: [
      '판교역에서 신분당선으로 단 2정거장(14분)! 뚜벅이도 차 없이 힐링 가능한 최적 입지',
      '창밖으로 푸른 메타세쿼이아 가로수길과 양재천 물길이 시원하게 보이는 유럽풍 테라스',
      '호텔 출신 셰프의 고품격 올데이 브런치와 직접 로스팅하는 신선한 원두'
    ],
    parkingInfo: '양재천 노상 공영주차장 또는 인근 매헌시민의숲 주차장 (주차비 저렴)',
    hasFreeParking: false,
    petFriendly: true,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '정원/가든',
    bestTimeToVisit: '봄 벚꽃 시즌 / 가을 단풍철 오전 11:00 야외 테라스석',
    crowdTip: '성남에서 지하철(신분당선)로 이동 시 주말 교통 체증 없이 20분 만에 도착!',
    nearbySpots: [
      { name: '매헌시민의숲 & 메타세쿼이아길', type: '산책로', travelMin: 3 },
      { name: '양재 꽃시장 & 화훼공판장', type: '쇼핑', travelMin: 8 },
      { name: '양재천 수변공원 자전거길', type: '관광/명소', travelMin: 1 }
    ],
    recommendedCourse: '판교역 신분당선 ➡️ 양재시민의숲역 ➡️ 보아즈 테라스 브런치 ➡️ 양재천 메타세쿼이아길 산책 ➡️ 양재 꽃시장 구경',
    naverSearchQuery: '양재천 보아즈 카페',
    kakaoSearchQuery: '보아즈 양재천'
  },
  {
    id: 'ibaebae-bakery',
    name: '이배재제빵소 (Ibaebae Bakery)',
    tagline: '성남 상대원에서 10분! 목현천 계곡물 흐르는 초대형 베이커리 쉼터',
    category: '대형/베이커리',
    region: '성남 판교·분당·남한산성',
    address: '경기 광주시 이배재로 247',
    shortLocation: '성남 중원구 경계 목현동',
    distanceFromOrigins: {
      '남한산성입구역': { carMin: 12, transitMin: 25, distanceKm: 6.2 },
      '야탑/모란역': { carMin: 15, transitMin: 28, distanceKm: 7.8 },
      '서현/수내역': { carMin: 22, transitMin: 42, distanceKm: 12.0 },
      '판교역': { carMin: 24, transitMin: 45, distanceKm: 13.5 }
    },
    transitGuide: '모란역 6번 출구에서 3-1번 또는 31-2번 버스 탑승 후 이배재고개 하차',
    drivingGuide: '성남 상대원동 공단로에서 이배재터널을 지나 광주 방향 3분',
    signatureMenus: [
      { name: '이배재 프리미엄 소금빵 세트', price: '7,000원', description: '겉바속촉의 정석! 게랑드 천일염과 최고급 프랑스산 고메 버터', isSignature: true },
      { name: '생크림 팡도르', price: '8,500원', description: '부드러운 슈가파우더 눈꽃과 우유 생크림이 꽉 찬 시그니처 베이커리', isSignature: true },
      { name: '이배재 선셋 로스티드 라떼', price: '6,800원', description: '다크 초콜릿의 묵직함과 너티한 고소함이 일품인 대표 커피' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '10:00 - 22:00 (매일)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['성남 10분컷', '계곡물 테라스', '초대형 3층 규모', '소금빵 맛집', '대형 주차장'],
    rating: 4.7,
    reviewCount: 3950,
    highlights: [
      '이배재터널 개통으로 성남 구도심(상대원/단대/모란)에서 10~15분 만에 도착하는 최고의 접근성',
      '건물 뒤편으로 시원하게 뻗은 목현천 계곡과 자연 암반을 조망하는 테라스 좌석',
      '매시간 끊임없이 구워져 나오는 50여 종 이상의 신선한 제과제빵 퍼레이드'
    ],
    parkingInfo: '건물 전용 대형 주차타워 및 지상 주차장 완비 (무료 주차 80대 이상)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '계곡',
    bestTimeToVisit: '주말 오후 13:00~16:00 (갓 구운 빵 냄새와 계곡물 소리 감상)',
    crowdTip: '3층 테라스 라운지는 비교적 조용하여 숲멍과 독서에 안성맞춤입니다.',
    nearbySpots: [
      { name: '목현동 먹거리골목 (오리백숙, 보리밥)', type: '맛집', travelMin: 2 },
      { name: '남한산성 동문 & 망월사', type: '관광/명소', travelMin: 12 },
      { name: '성남 황송공원 & 산책로', type: '산책로', travelMin: 8 }
    ],
    recommendedCourse: '성남 모란/상대원 출발 ➡️ 이배재터널 통과 ➡️ 목현동 보리밥 정식 점심 ➡️ 이배재제빵소 계곡 테라스 힐링',
    naverSearchQuery: '광주 이배재제빵소',
    kakaoSearchQuery: '이배재제빵소'
  },
  {
    id: 'open-alley',
    name: '오픈앨리 (Open Alley)',
    tagline: '신현동 숲자락 붉은 벽돌의 스페셜티 성지, 브런치와 로스팅의 깊이',
    category: '도심/감성로스터리',
    region: '경기 광주 (신현/오포/퇴촌)',
    address: '경기 광주시 오포읍 문형산길 163',
    shortLocation: '경기 광주시 신현동 문형산 자락',
    distanceFromOrigins: {
      '판교역': { carMin: 20, transitMin: 40, distanceKm: 9.8 },
      '서현/수내역': { carMin: 16, transitMin: 32, distanceKm: 8.0 },
      '야탑/모란역': { carMin: 24, transitMin: 46, distanceKm: 12.5 },
      '남한산성입구역': { carMin: 32, transitMin: 58, distanceKm: 16.8 }
    },
    transitGuide: '서현역에서 520번 버스 탑승 후 신현리 종점 인근 하차',
    drivingGuide: '분당 율동공원에서 태재고개를 넘어 문형산 등산로 방면 숲길 진입',
    signatureMenus: [
      { name: '오픈앨리 시그니처 더치 큐브라떼', price: '7,500원', description: '에스프레소 얼음 큐브에 따뜻한 생우유를 부어 마시는 깊은 풍미', isSignature: true },
      { name: '수제 훈제연어 에그 베네딕트', price: '17,000원', description: '잉글리시 머핀 위 홀랜다이즈 소스와 수란의 환상적인 하모니', isSignature: true },
      { name: '버터밀크 팬케이크 플레이트', price: '15,500원', description: '폭신폭신한 팬케이크에 신선한 생크림과 베이컨, 과일' }
    ],
    priceRange: '6천원~8천원',
    businessHours: '10:00 - 20:00 (주말 브런치 18:00 마감)',
    closedDays: '매주 월요일 휴무',
    images: [
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['스페셜티 로스터리', '브런치 성지', '붉은 벽돌 감성', '문형산 숲세권', '단골 명소'],
    rating: 4.8,
    reviewCount: 2310,
    highlights: [
      '오랜 기간 분당·광주 주민들에게 사랑받아온 정통 스페셜티 커피의 터줏대감',
      '높은 층고와 붉은 빈티지 벽돌, 클래식한 로스터기가 뿜어내는 따스한 유럽 감성',
      '정통 레시피로 매일 정성스레 조리하는 고퀄리티 브런치 플레이트'
    ],
    parkingInfo: '매장 전용 주차장 구비 (무료 주차 20대)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: true,
    hasBrunch: true,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '마운틴/숲',
    bestTimeToVisit: '주말 오전 10:30~12:30 (여유로운 숲속 브런치 타임)',
    crowdTip: '브런치 메뉴 주문 시 스페셜티 아메리카노 할인 혜택이 적용됩니다.',
    nearbySpots: [
      { name: '문형산 등산로 힐링 둘레길', type: '산책로', travelMin: 1 },
      { name: '분당 율동공원 & 서현역 로데오', type: '쇼핑', travelMin: 12 },
      { name: '신현동 카페촌', type: '맛집', travelMin: 4 }
    ],
    recommendedCourse: '분당 서현 출발 ➡️ 문형산 자락 드라이브 ➡️ 오픈앨리 에그베네딕트 브런치 ➡️ 율동공원 산책',
    naverSearchQuery: '경기광주 오픈앨리',
    kakaoSearchQuery: '오픈앨리 광주'
  },
  {
    id: 'earth-and-wood',
    name: '흙과나무 (Earth & Wood)',
    tagline: '백운호수 수변 데크길 바로 앞, 잔잔한 호수 윤슬과 통창 파노라마',
    category: '호수/리버뷰',
    region: '의왕·과천 (백운호수)',
    address: '경기 의왕시 백운로 496',
    shortLocation: '의왕 백운호수 1열',
    distanceFromOrigins: {
      '판교역': { carMin: 17, transitMin: 42, distanceKm: 11.5 },
      '서현/수내역': { carMin: 20, transitMin: 45, distanceKm: 13.0 },
      '야탑/모란역': { carMin: 24, transitMin: 48, distanceKm: 15.8 },
      '남한산성입구역': { carMin: 34, transitMin: 62, distanceKm: 20.5 }
    },
    transitGuide: '인덕원역 2번 출구에서 05-1번 마을버스 탑승 후 백운호수 제방 하차 도보 3분',
    drivingGuide: '판교IC 또는 북청계IC에서 백운호수 방향 8분 (호수변 전용 주차장)',
    signatureMenus: [
      { name: '호수 뷰 비엔나 아인슈페너', price: '9,000원', description: '진한 수제 크림과 더치 커피가 어우러진 클래식 아인슈페너', isSignature: true },
      { name: '수제 대추차 & 전통 한과', price: '10,000원', description: '가마솥에서 12시간 푹 고아낸 진하고 깊은 영양 보양차', isSignature: true },
      { name: '벨지안 다크 초콜릿 라떼', price: '8,500원', description: '벨기에산 칼리바우트 초콜릿을 직접 녹여 만든 진한 핫초코' }
    ],
    priceRange: '8천원 이상',
    businessHours: '11:00 - 23:30 (심야 영업)',
    closedDays: '연중무휴',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop'
    ],
    badges: ['백운호수 1열 전망', '심야 23시30분까지', '호수 산책로 연결', '부모님 선호 1위', '야경 명소'],
    rating: 4.6,
    reviewCount: 3120,
    highlights: [
      '백운호수 물결이 손에 닿을 듯 가까운 1열 수변 통창 좌석',
      '낮에는 반짝이는 윤슬, 밤에는 호수에 비치는 은은한 야경 조명 감상',
      '카페 1층에서 백운호수 수변 목재 데크 둘레길로 바로 연결되는 최상의 산책 코스'
    ],
    parkingInfo: '매장 전용 주차장 및 발렛 파킹 완비 (무료 주차)',
    hasFreeParking: true,
    petFriendly: false,
    kidsZone: true,
    hasTerrace: true,
    hasBakery: false,
    hasBrunch: false,
    hasWifi: true,
    hasOutlets: true,
    sceneryType: '리버/호수',
    bestTimeToVisit: '해질녘 18:00~20:00 (호수에 붉은 노을이 내려앉는 매직아워)',
    crowdTip: '창가 1열 호수 좌석은 주말 저녁 일몰 시 인기 최고이므로 30분 전 선점 추천!',
    nearbySpots: [
      { name: '백운호수 순환 둘레길 (3km)', type: '산책로', travelMin: 1 },
      { name: '의왕 타임빌라스 롯데아울렛', type: '쇼핑', travelMin: 6 },
      { name: '청계산 등산로 & 맑은숲공원', type: '관광/명소', travelMin: 10 }
    ],
    recommendedCourse: '성남 분당 출발 ➡️ 백운호수 장어구이 저녁 ➡️ 흙과나무 호수 뷰 커피 ➡️ 백운호수 야간 데크길 산책',
    naverSearchQuery: '의왕 흙과나무 카페',
    kakaoSearchQuery: '흙과나무 의왕'
  }
];
